const usuarios =[
    {
        login: "sofia",
        senha: "sofia"
    },
    {
        login: "admin",
        senha: "admin"
    },
    {
        login: "test",
        senha: "test"
    }
]



function logar(){
    let pegaUsuario = document.getElementById("login").value;
    let pegaSenha = document.getElementById("senha").value;
    let validaLogin = false;

    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].senha){
            validaLogin = true;
            break
        }
    }
    if(validaLogin == true){
        location.href="index.html";
    }else{
        alert("Login e/ou senha incorretos. Tente novamente");
    }
}

