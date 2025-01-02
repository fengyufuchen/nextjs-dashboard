"use server"
import { z } from 'zod'
import { db } from '@vercel/postgres'
import { dbClient } from './data'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { signIn } from "@/auth"
import { AuthError } from 'next-auth'

export async function authenticate(preState: string | undefined, formData: FormData) {

    try {
        
        await signIn('credentials', formData)
    } catch (error) {

        if (error instanceof AuthError) {
            console.log("error", error)
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }

        }
        console.log("error", error)
        // throw error
    }

}

export type State = {
    error?: {
        customerId?: string[],
        amount?: string[],
        status?: string[]
    },
    message?: string | null
}
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer'
    }),
    amount: z.coerce.number().gt(0, 'Amount must be greater than 0'),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: "Please select an invoice status."
    }),//z.enum(['pending', 'paid']),
    date: z.string(),
})
const CreateInvoice = FormSchema.omit({ id: true, date: true })
const UpdateInvoice = FormSchema.omit({ id: true, date: true })

export async function deleteInvoice(id: string) {
    await dbClient.sql`DELETE FROM invoices WHERE id = ${id}`
    revalidatePath("/dashboard/invoices")

}

export async function updateInvoice(id: string, formData: FormData) {

    const { customerId, amount, status } = UpdateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })
    const amountInCents = amount * 100
    const updateRes = await dbClient.sql`
      UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
    `;
    console.log("updateRes", updateRes)
    revalidatePath("/dashboard/invoices")
    redirect("/dashboard/invoices")
}

export async function createInvoice(preState: State, formData: FormData) {

    const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    })
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data;

    const amountInCents = amount * 100
    const date = new Date().toISOString().split("T")[0]
    try {
        await dbClient.sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }


    revalidatePath('/dashboard/invoices')

    redirect('/dashboard/invoices')

}