const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors/safe');
const argv = require('./config/yargs')
// l: true
// listar
// boolean
// defauld: false
console.clear();

crearArchivo(argv.b,argv.l,argv.h)
.then(nombrearchivo => console.log(colors.america(nombrearchivo), 'creado'))
.catch(err => console.log(err));