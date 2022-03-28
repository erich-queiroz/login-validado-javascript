const button = document.getElementById("botao");

    button.addEventListener('click', (validar) => {
    validar.preventDefault();

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    

    if(email.value == ""){
    document.getElementById("erro").textContent = `O E-mail precisa ser preenchido.`
    email.classList.add("erroInput");
}       else {  
            email.classList.remove("erroInput"); 
    
}
    if(senha.value == ""){
    document.getElementById("erro").textContent = `A senha precisa ser preenchida.`
    senha.classList.add("erroInput");
}       else {  
            senha.classList.remove("erroInput");
    //document.getElementById("erro").remove();
}
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("erroInput");
    }
})