export async function GET(request: Request) {

    // connect to microsoft azure endpoint
    const response = await fetch('http://localhost:7071/api/getSuggestion', {
        cache: 'no-store'
    })

    const data = await response.text()

    return new Response(JSON.stringify(data.trim()), {
        status: 200,
    });
}