const catalogo = require('../database/catalogo.json');


module.exports = (codigoBuscado) =>{

    function temCodigoIgualAoBuscado(Filme){
if(Filme.codigo == codigoBuscado){
   return true;
}else{
    return false;
}

    
}

   return catalogo.find(temCodigoIgualAoBuscado);

}