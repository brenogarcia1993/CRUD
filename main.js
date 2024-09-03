function validateFields() {
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById('recover-password-button').disable = true
    }   else if (validateEmail(email)) {
        document.getElementById('recover-password-button').disable = false;
    }

    // Verificar se o email não é vazio e se o email é válido
    // Se verdadeiro, então habilitar o botão de recuperação de senha
    // Se falso, desabilitar o botão de recuperar senha

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

}