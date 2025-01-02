
import { db } from "@vercel/postgres"
import { NextResponse } from "next/server";

const client = await db.connect();
export async function GET() {
    await client.sql`BEGIN`

    const res = await client.sql`SELECT invoices.amount, customers.name
FROM invoices
JOIN customers ON invoices.customer_id = customers.id
WHERE invoices.amount = 666;`;
    await client.sql`COMMIT`

    return NextResponse.json({
        data: res
    })

}