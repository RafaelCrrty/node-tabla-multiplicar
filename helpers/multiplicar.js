const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = async (base, listar=false, limiteh=5) =>{
    try {
        let salida = ``, consoles = ``;
        for(let i= 0; i<limiteh;i++){
            salida +=`${base} ${colors.yellow('x')} ${i+1} ${colors.america('=')} ${base*(i+1)} \n`;
            consoles +=`${base} x ${i+1} = ${base*(i+1)} \n`;
        }
        if(listar){
            console.log(colors.rainbow('==================='));
            console.log(colors.america(` Tabla del ${base} `));
            console.log(colors.rainbow('==================='));
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,consoles);
        return `Se guardo la tabla tabla-${base}.txt`
    } catch (error) {
        throw error
    }  
    
    }

module.exports = {
    crearArchivo
}