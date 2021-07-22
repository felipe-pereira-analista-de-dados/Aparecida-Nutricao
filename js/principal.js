var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//# seletor de id
// o . seleciona a classe

var pacientes = document.querySelectorAll(".paciente"); 

for(var i = 0; i < pacientes.length; i++){ //o for foi usado para pegar a lista inteira de pacientes e calcular os imc de todos os pacientes juntos.
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); 
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValido = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválida!");
        pesoValido = false;
        tdImc.textContent = "Peso inválida!";
        paciente.classList.add("paciente-invalido") //criando uma classe que pega informações no css
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaValido = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }

    if(alturaValido && pesoValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); //limitando as casas decimais com to fixed().
    }

    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event) {
        event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
}
