let idadePessoa = 17;

if (idadePessoa < 0) {
    console.log("Idade invalida");
} else if (idadePessoa <= 12) {
    console.log("Criança");
} else if (idadePessoa <= 17) {
    console.log("Adolescente");
} else if (idadePessoa <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}