import { NextResponse } from "next/server";


export async function GET() {

    console.log("/api/students")
    return NextResponse.json({ name: "Hello, World!" });
}