const fs = require('fs');

// fs.readFile('student.json', (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student);
// });

var dispotitivos = 60;
for (let deviceId = 0; deviceId < dispotitivos; deviceId++) {
    var mapa = [];
    for (let index = 0; index < 650; index++) {

        // Temperatura
        mapa[index] = Math.floor(Math.random() * 10) + 20;

        // Resistencia
        if(index > 257 && index < 512){
            mapa[index] = Math.floor(Math.random() * 500);
        }
        
    }

    let data = JSON.stringify(mapa, null, 2);

    fs.writeFile( 'devices/device_' + deviceId + '.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}