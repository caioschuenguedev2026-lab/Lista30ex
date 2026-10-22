let notaBoletim = 5.8;
let frequenciaBoletim = 82;

if (frequenciaBoletim < 75) {
    console.log("Reprovado por frequncia");
} else if (notaBoletim >= 7) {
    console.log("Aprovado");
} else if (notaBoletim >= 5) {
    console.log("Recuperação");
} else {
    console.log("reprovado por nota");
}
