const fs = require('fs');

const port = process.env.PORT || 502
const host = process.env.HOST || 'localhost'
const modbusServer = require('./modbus-server-module').createServer(port, host);

modbusServer.on('read-holding-registers', readHoldingRegisters);
modbusServer.on('read-coils',readCoils);
modbusServer.on('write-multiple-registers',writeRegisters);

function readHoldingRegisters(from, to, reply, req) {
    var deviceId = req.unitId - 1; 
    console.log('Read holding registers id:' + deviceId + ' > ' + from + '-' + to);
    var values = [1,6,3,9]; // sample values just to see if it works.
    

    fs.readFile('devices/device_' + deviceId + '.json', (err, response) => {
        if (err) throw err;
        var data = JSON.parse(response);
        var registers = [];
        var index = 0;
        for (from; from < to; from++) {
            registers[index] = data[from];
            index++;
        }
        return reply(null, bufferify(registers));
    });
}

function readCoils(from,to,reply) {
    console.log('Read coils '+from+'-'+to);
    var values = [2,0,8]; // anything greater than zero is received as a 1
    return reply(null,values);
}

function writeRegisters(from,to,items,reply) {
    console.log('Write registers '+from+'-'+to);
    console.log('  items:'+items);
    reply();
}

function bufferify(itemsArray) {
    // When client reads values, have to supply an 
    // array of Buffers (not just an array of numbers) to the reply function.
    var n = itemsArray.length;
    var registers = [];
    for (var i=0; i<n; i++) {
        registers[i] = Buffer.alloc(2);
        registers[i].writeInt16BE(itemsArray[i],0);
    }
    return registers;
}
