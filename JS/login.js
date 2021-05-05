localStorage.setItem("test", "test"); // Linha necessária ou o for loop não funciona em register() e em login()
sessionStorage.setItem("Current User", "username");

function getinfo() {
    var username = document.getElementById("name").value
    var password = document.getElementById("pass").value
    setInterval(function(){username = document.getElementById("name").value;password = document.getElementById("pass").value;console.log(username, password)}, 1000)
    }
    
function register(){
    var valid = false
    var username = document.getElementById("name").value
    var password = document.getElementById("pass").value
    for (i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) === username){
            valid = false
            break
        }
        else {
            valid = true
        }
    }
    
    if (valid){
        alert("Registado com sucesso.")
        localStorage.setItem(username, JSON.stringify([password, null, 0]));
    }
    else {
        alert("Esse nome já existe.")
    }
    document.getElementById("name").value = ""
    document.getElementById("pass").value = ""
}

function login(){
    var valid = false
    var username = document.getElementById("name").value
    var password = document.getElementById("pass").value
    for (i = 0; i < localStorage.length; i++){
        if (localStorage.key(i) === username){
            if (JSON.parse(localStorage.getItem(localStorage.key(i)))[0] === password){
                valid = true
                break
            }
        }
    }
    if (valid){
        alert("Login efetuado com sucesso.")
        sessionStorage.setItem("Current User", username)
    }
    else {
        alert("Username ou password errados.")
    }
    document.getElementById("name").value = ""
    document.getElementById("pass").value = ""
}

