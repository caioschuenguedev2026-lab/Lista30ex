let idadeMotorista = 22;
let possuiCNH = false;

if (idadeMotorista < 18) {
    console.log("nao pode dirigir: idade inferior a 18 anos");
} else if (!possuiCNH) {
    console.log("nao pode dirigir: nao possui CNH");
} else {
    console.log("pode dirigir");
}