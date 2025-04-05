idade = prompt ("Quantos anos você tem?")
if(idade >= 18){
    escolhaJogador = prompt("Digite: 1-Pedra, 2-Papel ou 3-Tesoura")
    escolhaComputador = Math.floor(Math.random() * 3) + 1;
    //console.log("escolha do computador:" + escolhaComputador);

if (escolhaJogador == escolhaComputador){
    alert("Empate!!")
}
if (escolhaJogador == 1){
    if(escolhaComputador == 2){
        alert("Computador venceu!, escolheu papel")
    }
    if (escolhaComputador == 3) {
        alert("Você venceu!, computador tesoura");
    }
}
if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
        alert("Você venceu!, computador pedra");
    }
    if (escolhaComputador == 3) {
        alert("Computador venceu!, escolheu tesoura");
    }
}
if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
        alert("Computador venceu!, escolheu pedra");
    }
    if (escolhaComputador == 2) {
        alert("Você venceu!, computador escolheu papel");
    }
}
    alert("escolha do computador: " + escolhaComputador);
}