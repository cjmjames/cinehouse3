const catalogo = require('./database/catalogo.json');
const mostrarFilmes = require('./functions/mostrarFilmes');
const buscarFilme = require ('./functions/buscarfilmes')


let acao = process.argv[2];

  
  switch (acao){
    case "mostrar":
        mostrarFilmes(catalogo);
        break;
        case "buscar":
             let codigo = process.argv[3];
              let filmeEncontrado = buscarFilme(codigo)
             console.log(filmeEncontrado);
        break;
        case "adicionar":
            console.log("vae adicionar um filme");
         break;

        default:
            
            console.log("comando nao encontrado...");
            
   }
