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
}
