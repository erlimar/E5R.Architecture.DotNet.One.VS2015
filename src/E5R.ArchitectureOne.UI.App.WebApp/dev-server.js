var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: 'wwwroot',
    name: 'E5R.ArchitectureOne.WebServer',
    port: 5000,
    cors: '*',
    followSymlink: true
});

server.start(function () {
    console.log(server.name, 'escutando na porta', server.port);
});
