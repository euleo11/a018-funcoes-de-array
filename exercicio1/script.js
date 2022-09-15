const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (parametro) => {
    return {
    nome: parametro.nome.toUpperCase(),
    profissao: parametro.profissao.toUpperCase(),
    username: parametro.username.toUpperCase(),
    senha: parametro.senha.toUpperCase()
    }
}

console.log(caixaAlta(objeto));

//---TEXTO CORRIDO
function texto(objeto){
    console.log(`Meu nome é${objeto.nome}, e trabalho como ${objeto.profissao}\nLogin: ${objeto.username} \nSenha:${objeto.senha}`)
}
texto(objeto)

//---CALLBACK
function cbk(objeto,callback){
    console.log("Trocando",callback(objeto))
}
cbk(objeto,caixaAlta)
cbk(objeto,texto)