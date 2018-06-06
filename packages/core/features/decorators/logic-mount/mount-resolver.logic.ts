export const mountResolver = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}