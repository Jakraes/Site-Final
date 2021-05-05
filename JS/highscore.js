let nome = new Array(3)
let tempo = new Array(3)
let tempoJogado = new Array(3)

let n = new Array()
let t = new Array()
let tj = new Array()

for (i = 0; i < localStorage.length; i++){
    if (localStorage.key(i) !== "test"){
        let name = localStorage.key(i)
        let info = JSON.parse(localStorage.getItem(localStorage.key(i)))    
        n.push(name)
        t.push(info[1])
        tj.push(info[2])
    }
}


for (i = 0; i < 3; i++){
    let min = Math.min.apply(Math, t)
    let index = t.indexOf(min)
    if (n[index] != undefined){
        nome[i] = n[index]
        tempo[i] = t[index]
        tempoJogado[i] = tj[index]
    }
    n.splice(index,1)
    t.splice(index,1)
    tj.splice(index,1)
}

function tranformatempo(time) {
    var milisec = Math.floor((time % 1000) / 100),
    segundos = Math.floor((time / 1000) % 60),
    minutos = Math.floor((time / (1000 * 60)) % 60),
    horas = Math.floor((time / (1000 * 60 * 60)) % 24);

    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    return horas + ":" + minutos + ":" + segundos;
}

if (nome[0] != undefined){
document.getElementById("name1").innerHTML = nome[0]
document.getElementById("tempo1").innerHTML = tranformatempo(tempo[0])
document.getElementById("tempoj1").innerHTML = tranformatempo(tempoJogado[0])
}
if (nome[1] != undefined){
document.getElementById("name2").innerHTML = nome[1]
document.getElementById("tempo2").innerHTML = tranformatempo(tempo[1])
document.getElementById("tempoj2").innerHTML = tranformatempo(tempoJogado[1])
}
if (nome[2] != undefined){
document.getElementById("name3").innerHTML = nome[2]
document.getElementById("tempo3").innerHTML = tranformatempo(tempo[2])
document.getElementById("tempoj3").innerHTML = tranformatempo(tempoJogado[2])
}