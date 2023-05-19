export async function GET(request: Request) {

    // connect to microsoft azure endpoint
    const response = await fetch('...', {
        cache: 'no-store'
    })

    const data = await response.text()

    return new Response(JSON.stringify(data.trim()), {
        status: 200,
    });
}