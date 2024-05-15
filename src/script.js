function ranking(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;
    switch (true) {
        case saldo < 10:
            nivel = "Ferro";
            break;
        case saldo >= 10 && saldo <= 20:
            nivel = "Bronze";
            break;
        case saldo >= 21 && saldo <= 50:
            nivel = "Prata";
            break;
        case saldo >= 51 && saldo <= 80:
            nivel = "Ouro";
            break;
        case saldo >= 81 && saldo <= 90:
            nivel = "Diamante";
            break;
        case saldo >= 91 && saldo <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }
    console.log("O Herói tem de saldo de " + saldo + " está no nível de " + nivel + "!");
}
while (true) {
    vitorias = parseInt(prompt("Digite o número de vitórias:"));
    derrotas = parseInt(prompt("Digite o número de derrotas:"));

    if (!isNaN(vitorias) && !isNaN(derrotas)) {
        console.log("Calculando...");
        ranking(vitorias, derrotas);
        break; // Sai do loop se os valores forem válidos
    } else {
        console.log("Por favor, insira números válidos.");
    }
}