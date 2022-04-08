const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato base introducido ${base} no es un numero`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`El dato limite introducido ${limite} no es un numero`.red);
            return;
        }

        console.log('========================='.yellow);
        console.log(`    Tabla del ${base}    `.yellow);
        console.log('========================='.yellow);

        for (let i = 0; i <= limite; i++) {
            resolve(console.log(`${base} * ${i} = ${ base * i }`));
        }

    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato base introducido ${base} no es un numero`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`El dato limite introducido ${limite} no es un numero`.red);
            return;
        }

        let data = "";

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}