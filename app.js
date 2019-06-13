//Requireds
const {crearArchivo,listarTabla}=require('./multiplicar/multiplicar');
const {argv}=require('./config/yargs');
const color =require('colors');
// fin de Requireds
let comando=argv._[0];
switch (comando) {
    case 'listar':
            listarTabla(argv.base,argv.limite)
            .then(tabla=>console.log(tabla.green))
            .catch(err=>console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo=>console.log(`Se creo el archivo ${archivo.green}`))
        .catch(err=>console.log(err));
        break;    
    default:
     console.log(`No se reconocio el comando ${comando}`);   
        break;
}



