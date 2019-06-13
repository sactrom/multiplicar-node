// Requireds
const fs=require('fs');
let data='';
let listarTabla=(base,limite=10)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)||!Number(limite)){
            reject(`Uno o ambos parametros no son un numero`);
            return;
        }
     for (let i =1; i<= limite; i++) {
         data+=`${base} * ${i}=${base*i}\n`;   
         }
         if(limite==undefined || base==undefined)reject(`No se definieron los parametros necesarios`);
            resolve (data);
     })
 };
let crearArchivo=(base,limite=10)=>{
   return new Promise((resolve,reject)=>{
       if(!Number(base)||!Number(limite)){
           reject(`Uno o ambos parametros no son un numero`);
           return;
       }
    for (let i =1; i<= limite; i++) {
        data+=`${base} * ${i}=${base*i}\n`;   
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
           if (err) reject (err);
           resolve (`tabla-${base}-al-${limite}.txt`);
         })
    })
};
module.exports={
    crearArchivo,
    listarTabla
}