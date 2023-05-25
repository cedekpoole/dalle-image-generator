import { NextResponse } from "next/server";

export async function POST(request: Request) {
     const res = await request.json();
     const prompt = res.prompt;
    
     const response = await fetch('https://ai-image-generator-application-dalle.azurewebsites.net/api/generateimg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
     })

     const data = await response.text()

     return NextResponse.json(data)
    }