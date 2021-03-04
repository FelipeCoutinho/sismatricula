import * as express from 'express'

const server = express()
const port = 3333;

server.use(express.json())

server.listen(port, () => {
    console.log("servor on, port: " + port);
})

export default server;