const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldoVitorias
let elo

//Calculadora de partidas Rankeadas
function iniciarElo() {
    rl.question("Partidas jogadas: ", (partidasTotais) => {
        rl.question("Numero de derrotas: ", (derrotas) => {
            saldoVitorias = partidasTotais - derrotas
            nivel(saldoVitorias)
        });
    });
}

// Feito em switch case

function nivel(saldoVitorias) {
    switch(true) {
        case (saldoVitorias <= 10):
            elo = "Ferro";
            break;
        case (saldoVitorias <= 20):
            elo = "Bronze";
            break;
        case (saldoVitorias <= 50):
            elo = "Prata";
            break;
        case (saldoVitorias <= 80):
            elo = "Ouro";
            break;
        case (saldoVitorias <= 90):
            elo = "Diamante";
            break;
        case (saldoVitorias <= 100):
            elo = "Lendário";
            break;
        default:
            elo = "Imortal";
            break;
    }
    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + elo);
    repetirElo();
}


function repetirElo() {
    rl.question("Deseja fazer outro cálculo? (S/n) ", (resposta) => {
        if (resposta.toLowerCase() === 's') {
            iniciarElo();
        } else if (resposta.toLowerCase() === 'n') {
            console.log("Até Mais!!");
            rl.close();
        } else {
            console.log("Opção inválida. Por favor, digite S ou n.")
            repetirElo();
        }
    });
}

iniciarElo()

// Feito em function
//function nivel(){
//    if(saldoVitorias <= 10){
//        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Ferro") //Se vitórias for menor do que 10 = Ferro
//    } else if(saldoVitorias <= 20){
//        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Bronze") //Se vitórias for entre 11 e 20 = Bronze
//    } else if(saldoVitorias <= 50){
//        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Prata") //Se vitórias for entre 21 e 50 = Prata
//    } else if(saldoVitorias <= 80){
//        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Ouro") //Se vitórias for entre 51 e 80 = Ouro
//    } else if(saldoVitorias <= 90){
//        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Diamante") //Se vitórias for entre 81 e 90 = Diamante
//    } else if(saldoVitorias <= 100){
//        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Lendário") //Se vitórias for entre 91 e 100= Lendário
//    } else {
//        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Imortal") //Se vitórias for maior ou igual a 101 = Imortal
//   }
//}