//1import json server
const jsonserver = require('json-server');

//2create a server for media app
const server = jsonserver.create();

//3setup path for json file
const router = jsonserver.router('db.json')

//4return middleware used by json server
const middleware = jsonserver.defaults();

//5 setup port number
const port = process.env.PORT || 4000;

//use middleware
server.use(middleware);
server.use(router);

//start server
server.listen(port, () => {
    console.log('server started on ' + port);
});
 