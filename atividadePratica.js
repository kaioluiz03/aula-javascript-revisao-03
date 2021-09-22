//1)Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
//a)Se a fruta for maçã, retorne no console: “Não vendemos esta fruta aqui”.
//b)Se for kiwi, retorne: “Estamos com escassez de kiwis”.
//c)Se for melancia, retorne: “Aqui está, são 3 reais o quilo”.
//d)Se não for nenhum dos valores, deverá retornar uma mensagem de erro no console: Procure o administrador do sistema!

let fruta = "";

if(fruta = "maçã") {
    console.log('Não vendemos esta fruta aqui');
}
else if(fruta = "kiwi") {
    console.log('Estamos com escassez de kiwis');
}
else if(fruta = "melancia") {
    console.log('Aqui está, são 3 reais o quilo');
}
else {
    console.log('Procure o administrador do sistema!');
}

//          //              //          //              //          //

//2)As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. 
//Criar variáveis que tenham o salário do colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
//a)Salários até R$ 280,00 (incluindo) : aumento de 20%
//b)Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//c)Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//d)Salários de R$ 1500,00 em diante : aumento de 5%

//Após o aumento ser realizado, informe no console:
//●  O salário antes do reajuste;
//●  O percentual de aumento aplicado;
//●  O valor do aumento;
//●  O novo salário, após o aumento

var salarioColab = 1500; 
var taxas = ['20%','15%','10%','5%'];

if(salarioColab <= 280.00) {
    let reajuste = salarioColab * 0.20;
    let salarioReajuste = salarioColab + reajuste;

    console.log("Salário antes reajuste: R$ " + salarioColab);
    console.log("Percentual do almento: " + taxas[0]);
    console.log("Valor do reajuste Salarial: R$ " + reajuste);
    console.log("Salário após reajuste Salarial: R$ " + salarioReajuste.toFixed(2));
}
else if(salarioColab > 280.00 && salarioColab < 700.00) {
    let reajuste = salarioColab * 0.15;
    let salarioReajuste = salarioColab + reajuste;

    console.log("Salário antes reajuste: R$ " + salarioColab);
    console.log("Percentual do almento: " + taxas[1]);
    console.log("Valor do reajuste Salarial: R$ " + reajuste);
    console.log("Salário após reajuste Salarial: R$ " + salarioReajuste.toFixed(2));
}
else if(salarioColab > 700.00 && salarioColab < 1500.00) {
    let reajuste = salarioColab * 0.10;
    let salarioReajuste = salarioColab + reajuste;

    console.log("Salário antes reajuste: R$ " + salarioColab);
    console.log("Percentual do almento: " + taxas[2]);
    console.log("Valor do reajuste Salarial: R$ " + reajuste);
    console.log("Salário após reajuste Salarial: R$ " + salarioReajuste.toFixed(2));
}
else if(salarioColab >= 1500.00) {
    let reajuste = salarioColab * 0.05;
    let salarioReajuste = salarioColab + reajuste;

    console.log("Salário antes reajuste: R$ " + salarioColab);
    console.log("Percentual do almento: " + taxas[3]);
    console.log("Valor do reajuste Salarial: R$ " + reajuste);
    console.log("Salário após reajuste Salarial: R$ " + salarioReajuste.toFixed(2));
}