
'use server'
export async function updateName(name: string) {
    debugger
    if (!name) {
        return {
            error: " name is required!"
        }

    }

    const response = await fetch('https://dummyjson.com/products')
        .then(res => res.json())
    console.log('response', response)
    const promiseProp = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success")
        }, 10000)

    })
    response.promiseProp = promiseProp

    return response;

}