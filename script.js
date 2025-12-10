// 1) soma de dois números 

const num1_1 = Number(prompt("1. Digite o primeiro número:"));
const num2_1 = Number(prompt("1. Digite o segundo número:"));
alert(`1. A soma é: ${num1_1 + num2_1}`);

// 2) Subtração do primeiro pelo segundo

const num1_2 = Number(prompt("2. Digite o primeiro número:"));
const num2_2 = Number(prompt("2. Digite o segundo número:"));
alert(`2. A subtração é: ${num1_2 - num2_2}`);

// 3) Multiplicação

const num1_3 = Number(prompt("3. Digite o primeiro número:"));
const num2_3 = Number(prompt("3. Digite o segundo número:"));
alert(`3. A multiplicação é: ${num1_3 * num2_3}`);

// 4) Divisão

const num1_4 = Number(prompt("4. Digite o primeiro número:"));
const num2_4 = Number(prompt("4. Digite o segundo número:"));
alert(`4. A divisão é: ${num1_4 / num2_4}`);

// 5) Par ou Ímpar

const num_5 = Number(prompt("5. Digite um número:"));
const resultado_5 = (num_5 % 2 === 0) ? "par" : "ímpar";
alert(`5. O número ${num_5} é ${resultado_5}.`);

// 6) Positivo, Negativo ou Zero

const num_6 = Number(prompt("6. Digite um número:"));
let resultado_6;
if (num_6 > 0) {
    resultado_6 = "positivo";
} else if (num_6 < 0) {
    resultado_6 = "negativo";
} else {
    resultado_6 = "zero";
}
alert(`6. O número é ${resultado_6}.`);

// 7) Saudação com Nome

const nome_7 = prompt("7. Digite seu nome:");
alert(`7. Olá, ${nome_7}!`);

// 8) Maior ou Menor de Idade

const idade_8 = Number(prompt("8. Digite sua idade:"));
const status_8 = (idade_8 >= 18) ? "maior" : "menor";
alert(`8. Você é ${status_8} de idade.`);

// 9) Mostrar o Maior de dois números

const num1_9 = Number(prompt("9. Digite o primeiro número:"));
const num2_9 = Number(prompt("9. Digite o segundo número:"));
const maior_9 = Math.max(num1_9, num2_9);
alert(`9. O maior número é: ${maior_9}`);

// 10) Números Iguais ou Diferentes

const num1_10 = prompt("10. Digite o primeiro número:");
const num2_10 = prompt("10. Digite o segundo número:");
const comparacao_10 = (num1_10 === num2_10) ? "iguais" : "diferentes";
alert(`10. Os números são ${comparacao_10}.`);

// 11) Média e Aprovação

const n1_11 = parseFloat(prompt("11. Digite a primeira nota:"));
const n2_11 = parseFloat(prompt("11. Digite a segunda nota:"));
const n3_11 = parseFloat(prompt("11. Digite a terceira nota:"));
const media_11 = (n1_11 + n2_11 + n3_11) / 3;
let situacao_11;

if (media_11 >= 7) {
    situacao_11 = "Aprovado";
} else if (media_11 >= 5) {
    situacao_11 = "Recuperação";
} else {
    situacao_11 = "Reprovado";
}

alert(`11. Média: ${media_11.toFixed(2)}. Situação: ${situacao_11}.`);

// 12) Idade para Votar

const anoNascimento_12 = Number(prompt("12. Digite o ano de seu nascimento:"));
const anoAtual_12 = new Date().getFullYear();
const idade_12 = anoAtual_12 - anoNascimento_12;
const podeVotar_12 = (idade_12 >= 16) ? "pode votar" : "não pode votar";
alert(`12. Sua idade é ${idade_12} anos. Você ${podeVotar_12}.`);

// 13) Número entre 10 e 50

const num_13 = Number(prompt("13. Digite um número:"));
const estaEntre_13 = (num_13 >= 10 && num_13 <= 50) ? "está" : "não está";
alert(`13. O número ${estaEntre_13} entre 10 e 50.`);

// 14) Múltiplo de 5

const num_14 = Number(prompt("14. Digite um número:"));
const multiplo_14 = (num_14 % 5 === 0) ? "é múltiplo" : "não é múltiplo";
alert(`14. O número ${multiplo_14} de 5.`);

// 15) Calculadora Simples (if/else if)

const num1_15 = Number(prompt("15. Digite o primeiro número:"));
const operacao_15 = prompt("15. Digite a operação (+, -, *, /):");
const num2_15 = Number(prompt("15. Digite o segundo número:"));
let resultado_15;

if (operacao_15 === '+') {
    resultado_15 = num1_15 + num2_15;
} else if (operacao_15 === '-') {
    resultado_15 = num1_15 - num2_15;
} else if (operacao_15 === '*') {
    resultado_15 = num1_15 * num2_15;
} else if (operacao_15 === '/') {
    resultado_15 = num1_15 / num2_15;
} else {
    resultado_15 = "Operação inválida!";
}

alert(`15. Resultado: ${resultado_15}`);

// 16) Desconto de 10%

const preco_16 = parseFloat(prompt("16. Digite o preço do produto:"));
const precoComDesconto_16 = preco_16 * 0.90; // 100% - 10% = 90%
alert(`16. Preço com 10% de desconto: R$ ${precoComDesconto_16.toFixed(2)}`);

// 17) Divisível por 3 e por 5

const num_17 = Number(prompt("17. Digite um número:"));
const divisivel_17 = (num_17 % 3 === 0 && num_17 % 5 === 0) ? "é divisível" : "não é divisível";
alert(`17. O número ${divisivel_17} por 3 e por 5 ao mesmo tempo.`);

// 18) Faixa Etária

const idade_18 = Number(prompt("18. Digite sua idade:"));
let faixaEtaria_18;

if (idade_18 <= 12) {
    faixaEtaria_18 = "criança";
} else if (idade_18 >= 13 && idade_18 <= 17) {
    faixaEtaria_18 = "adolescente";
} else if (idade_18 >= 18 && idade_18 <= 64) {
    faixaEtaria_18 = "adulto";
} else { // 65+
    faixaEtaria_18 = "idoso";
}

alert(`18. Faixa etária: ${faixaEtaria_18}.`);

// 19) Maior e Menor de três números

const num1_19 = Number(prompt("19. Digite o primeiro número:"));
const num2_19 = Number(prompt("19. Digite o segundo número:"));
const num3_19 = Number(prompt("19. Digite o terceiro número:"));

const maior_19 = Math.max(num1_19, num2_19, num3_19);
const menor_19 = Math.min(num1_19, num2_19, num3_19);

alert(`19. O maior número é ${maior_19} e o menor é ${menor_19}.`);

// 20) Positivo e Menor que 100

const num_20 = Number(prompt("20. Digite um número:"));
const condicao_20 = (num_20 > 0 && num_20 < 100) ? "satisfaz" : "não satisfaz";
alert(`20. O número ${condicao_20} as condições (positivo e menor que 100).`);

// 21) Dia da Semana com switch

const diaNum_21 = Number(prompt("21. Digite um número de 1 a 7:"));
let diaSemana_21;

switch (diaNum_21) {
    case 1:
        diaSemana_21 = "Domingo";
        break;
    case 2:
        diaSemana_21 = "Segunda-feira";
        break;
    case 3:
        diaSemana_21 = "Terça-feira";
        break;
    case 4:
        diaSemana_21 = "Quarta-feira";
        break;
    case 5:
        diaSemana_21 = "Quinta-feira";
        break;
    case 6:
        diaSemana_21 = "Sexta-feira";
        break;
    case 7:
        diaSemana_21 = "Sábado";
        break;
    default:
        diaSemana_21 = "Número inválido";
}

alert(`21. O dia da semana é: ${diaSemana_21}.`);

// 22) Mês do Ano com switch

const mesNum_22 = Number(prompt("22. Digite um número de 1 a 12:"));
let mesNome_22;

switch (mesNum_22) {
    case 1: mesNome_22 = "Janeiro"; break;
    case 2: mesNome_22 = "Fevereiro"; break;
    case 3: mesNome_22 = "Março"; break;
    case 4: mesNome_22 = "Abril"; break;
    case 5: mesNome_22 = "Maio"; break;
    case 6: mesNome_22 = "Junho"; break;
    case 7: mesNome_22 = "Julho"; break;
    case 8: mesNome_22 = "Agosto"; break;
    case 9: mesNome_22 = "Setembro"; break;
    case 10: mesNome_22 = "Outubro"; break;
    case 11: mesNome_22 = "Novembro"; break;
    case 12: mesNome_22 = "Dezembro"; break;
    default: mesNome_22 = "Número inválido";
}

alert(`22. O mês é: ${mesNome_22}.`);

// 23) Dias do Mês

const mesNum_23 = Number(prompt("23. Digite o número do mês (1 a 12):"));
let dias_23;

switch (mesNum_23) {
    case 2: // Fevereiro
        dias_23 = 28;
        break;
    case 4: // Abril
    case 6: // Junho
    case 9: // Setembro
    case 11: // Novembro
        dias_23 = 30;
        break;
    case 1: // Janeiro
    case 3: // Março
    case 5: // Maio
    case 7: // Julho
    case 8: // Agosto
    case 10: // Outubro
    case 12: // Dezembro
        dias_23 = 31;
        break;
    default:
        dias_23 = "Mês inválido";
}

alert(`23. Quantidade de dias: ${dias_23}.`);

// 24) Preço da Fruta com switch

const fruta_24 = prompt("24. Digite o nome de uma fruta (ex: banana, maca, uva):").toLowerCase();
let preco_24;

switch (fruta_24) {
    case "banana":
        preco_24 = 3.50;
        break;
    case "maca":
        preco_24 = 5.00;
        break;
    case "uva":
        preco_24 = 8.99;
        break;
    default:
        preco_24 = "Preço não cadastrado";
}

alert(`24. O preço da ${fruta_24} é: R$ ${preco_24}`);

// 25) Significado de Nota (A, B, C, D, F)

const nota_25 = prompt("25. Digite uma nota (A, B, C, D, F):").toUpperCase();
let significado_25;

switch (nota_25) {
    case 'A':
        significado_25 = "Excelente";
        break;
    case 'B':
        significado_25 = "Bom";
        break;
    case 'C':
        significado_25 = "Regular";
        break;
    case 'D':
        significado_25 = "Ruim";
        break;
    case 'F':
        significado_25 = "Reprovado";
        break;
    default:
        significado_25 = "Nota inválida";
}

alert(`25. Significado: ${significado_25}.`);

// 26) Frase Divertida sobre Time

const time_26 = prompt("26. Digite o nome de um time de futebol:").toLowerCase();
let frase_26;

switch (time_26) {
    case "corinthians":
        frase_26 = "O time do povo! O Timão é o bando de loucos.";
        break;
    case "sao paulo":
        frase_26 = "O Soberano! É o único time brasileiro tricampeão mundial.";
        break;
    case "palmeiras":
        frase_26 = "O Verdão! Tem mais títulos que anos no século, mas a piada é do Mundial.";
        break;
    case "santos":
        frase_26 = "O Peixe! Berço de Pelé e Neymar. A Vila Belmiro treme!";
        break;
    default:
        frase_26 = `Que legal! ${time_26} é um grande time.`;
}

alert(`26. ${frase_26}`);

// 27) Mensagem por Cor

const cor_27 = prompt("27. Digite o nome de uma cor (ex: vermelho, azul, amarelo):").toLowerCase();
let mensagem_27;

switch (cor_27) {
    case "vermelho":
        mensagem_27 = "Vermelho é a cor da paixão e da energia!";
        break;
    case "azul":
        mensagem_27 = "Azul lembra o céu e o mar, trazendo calma e serenidade.";
        break;
    case "amarelo":
        mensagem_27 = "Amarelo é a cor da alegria e do otimismo!";
        break;
    default:
        mensagem_27 = `A cor ${cor_27} é muito bonita.`;
}

alert(`27. ${mensagem_27}`);

// 28) Mini Calculadora com switch

const num1_28 = Number(prompt("28. Digite o primeiro número:"));
const operacao_28 = prompt("28. Digite a operação (+, -, *, /):");
const num2_28 = Number(prompt("28. Digite o segundo número:"));
let resultado_28;

switch (operacao_28) {
    case '+':
        resultado_28 = num1_28 + num2_28;
        break;
    case '-':
        resultado_28 = num1_28 - num2_28;
        break;
    case '*':
        resultado_28 = num1_28 * num2_28;
        break;
    case '/':
        resultado_28 = num1_28 / num2_28;
        break;
    default:
        resultado_28 = "Operação inválida!";
}

alert(`28. Resultado: ${resultado_28}`);

// 29) Saudação Apropriada por Hora

const nome_29 = prompt("29. Digite seu nome:");
const hora_29 = Number(prompt("29. Digite a hora atual (0 a 23):"));
let saudacao_29;

if (hora_29 >= 0 && hora_29 <= 11) {
    saudacao_29 = "Bom dia";
} else if (hora_29 >= 12 && hora_29 <= 17) {
    saudacao_29 = "Boa tarde";
} else if (hora_29 >= 18 && hora_29 <= 23) {
    saudacao_29 = "Boa noite";
} else {
    saudacao_29 = "Olá";
}

alert(`29. ${saudacao_29}, ${nome_29}!`);

// 30 Menu Interativo com switch 

const escolha_30 = prompt("30. Escolha uma opção:\n1. Somar dois números\n2. Descobrir se um número é par ou ímpar\n3. Calcular média de três notas\n4. Sair");
let resultado_30 = "";

switch (escolha_30) {
    case '1':
        const num1_soma = Number(prompt("Soma: Digite o primeiro número:"));
        const num2_soma = Number(prompt("Soma: Digite o segundo número:"));
        resultado_30 = `A soma é: ${num1_soma + num2_soma}`;
        break;
    case '2':
        const num_parimpar = Number(prompt("Par/Ímpar: Digite um número:"));
        const status_parimpar = (num_parimpar % 2 === 0) ? "par" : "ímpar";
        resultado_30 = `O número é ${status_parimpar}.`;
        break;
    case '3':
        const n1_media = parseFloat(prompt("Média: Digite a primeira nota:"));
        const n2_media = parseFloat(prompt("Média: Digite a segunda nota:"));
        const n3_media = parseFloat(prompt("Média: Digite a terceira nota:"));
        const media = (n1_media + n2_media + n3_media) / 3;
        resultado_30 = `A média é: ${media.toFixed(2)}`;
        break;
    case '4':
        resultado_30 = "Obrigado por usar o menu. Saindo...";
        break;
    default:
        resultado_30 = "Opção inválida.";
}

alert(`30. ${resultado_30}`);