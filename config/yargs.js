const argv = require('yargs')
            .options('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe:'Es la base de la tabla de multiplicar'
            })
            .options('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'muestra la tabla de multiplicar'
            }).options('h',{
                alias: 'limite',
                type: 'number',
                demandOption: true,
                describe:'Es el limite de la tabla de multiplicar'
            })
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw 'la base tiene que ser un numero'
                }else if(isNaN(argv.h)){
                    throw 'el limite tiene que ser un numero'
                }
                return true
            })
            .argv;

module.exports = argv;