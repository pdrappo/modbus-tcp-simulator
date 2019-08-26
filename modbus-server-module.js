var net = require('net');
var modbus = require('modbus-tcp');
var modbusServer = new modbus.Server();

var tcpServer = net.createServer();
var createServer = function(p, h){
    var port = p || 502
    var host = h || 'localhost'

    tcpServer.listen(port, host, function(){
        console.log('TCP Socket bound to ' + host + ':'+ port);
    });
    
    tcpServer.on('connection', function(socket){
        console.log('client has connected');
        modbusServer.pipe(socket);
    
        socket.on('error', function(e){
            console.log('Connection error: '+e);
            socket.destroy();
        });
    
        socket.on('close', function(e){
            console.log('Client has closed connection.');
        });
    });

    return modbusServer;
}


module.exports.createServer = createServer;
