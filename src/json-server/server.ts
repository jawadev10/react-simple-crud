import jsonServer from 'json-server';
import mockData from "./mockdata";

const server = jsonServer.create();
const router = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running')
})