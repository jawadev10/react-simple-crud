import jsonServer from 'json-server';
import mockData from "./mockdata";

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(mockData);
const port = 3001;

server.use(middlewares);
server.use(jsonServer.rewriter({
    "/api/*": "/$1"
}));

server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
});