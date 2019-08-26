Simulador Modbus TCP con NodeJS:  
------  
Este servidor permite generar archivos JSON (Dispositivos) y permitiendo editarlos en tiempo real para ver los cambios reflejados en las lecturas de los esclavos Modbus. Solamente lo utilice para HoldingRegister pero se puede editar facilmente.

## Modo de uso
Primero es necesario tener instalado nodejs > v10 y luego instalar las dependencias mediante Yarn o NPM

```sh
$ npm install
```

Para generar los archivos que reprensentan los archivos ejecute:
```sh
node generate.js
```

Para iniciar el servidor en Windows el comando es el siguiente:

```sh
$env:PORT=505; $env:HOST="localhost"; node .\index.js
```

Para iniciar el servidor en Linux/MAC el comando es el siguiente:

```sh
PORT=505 HOST="localhost" node .\index.js
```

Gracias Diogo Resende por compartir tu proyecto
[http://github.com/dresende/node-modbus-tcp.git](http://github.com/dresende/node-modbus-tcp.git)