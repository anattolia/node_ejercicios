const fs = require('fs');
const path = require('path');

// Crear las carpetas que necesito para organizar la vida
const carpetas = ['imagenes', 'ejecutables', 'pdfs', 'textos'];

const rutaImagenes = './imagenes/';
const rutaEjecutables = './ejecutables/';
const rutaDescargas = './descargas/';

const archivosDescargas = fs.readdirSync(rutaDescargas);

// Crear carpetas si no existen
carpetas.forEach(carpeta => {
    if(!fs.existsSync(carpeta)){
        fs.mkdirSync(carpeta);
    };
})

archivosDescargas.forEach(archivo => {
    if(path.extname(archivo) === '.exe') {
      // Copiar archivos antes de moverlos
      fs.copyFile(`${rutaDescargas + archivo}`, archivo, function (err) {
        if(err) throw err
        console.log('¡Archivos copiados correctamente.')
       })

       // Mover archivos
       fs.rename(`./${archivo}`, `${rutaEjecutables + archivo}`, function (err) {
        if(err) throw err
        console.log('¡Archivos movidos correctamente.')
        fs.unlinkSync(`${rutaDescargas + archivo}`)
       })
   }
});