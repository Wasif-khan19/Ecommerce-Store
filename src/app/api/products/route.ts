import { NextResponse } from "next/server"
import { createClient } from "next-sanity";
import { SanityClient } from "sanity";
import { client } from "../../../../sanity/lib/client";


export async function GET() {
    try {
        let response = await client.fetch(`*[_type == "products"]`);
        console.log(response);
        return NextResponse.json({ response })
    } catch (error) {

        console.log((error as { message: string }).message);
        return NextResponse.json({ message: "FAILED " })

    }
}