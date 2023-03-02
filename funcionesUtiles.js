///////////////////////////////////
// FUNCIONES ÚTILES

// Comprobar qué tipo de archivo es
function comprobarTipo(archivo) {
    return path.extname(archivo);
}

// Eliminar archivos
// fs.unlinkSync(`${rutaDescargas}/entrada-LA-FLAUTA-MAGICA-Beatriz-Robledo.pdf`);

// Leer los archivos de una carpeta
// console.log(fs.readdirSync(rutaDescargas));


// Crear un servidor de node solo por recordar cómo se hace...
/*
const http = require('http');

const direccion = '127.0.0.1';
const puerto = 3000;

const servidor = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola!')
});

servidor.listen(puerto, direccion, () => {
    console.log(`Servidor corriendo en http://${direccion}:${puerto}/`)
});
*/