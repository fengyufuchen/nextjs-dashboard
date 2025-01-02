
'use server'
import { createClient } from '@/app/utils/supabase/server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function login(formData: FormData) {
    const supbase = await createClient();

    const data = {
        email: formData.get("email") as string,
        password: formData.get('password') as string,
    }

    const { error } = await supbase.auth.signInWithPassword(data)
    if (error) {

        redirect('/error')
    }
    revalidatePath('/', 'layout')
    redirect("/account")
}


export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const dataSigup = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { data, error } = await supabase.auth.signUp(dataSigup)

    console.log("signup", data, error)

    if (error) {
        console.log("sign error", error)
        redirect(`/error?error=${error.message}`)
    }

    revalidatePath('/', 'layout')
    redirect('/account')
}
