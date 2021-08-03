var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event) {
        event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPcienteDoFormulario(form);

    var pacienteTr = montarTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemPcienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChildmontaTd(paciente.nome, "info-nome");
    pacienteTr.appendChildmontaTd(paciente.peso, "info-peso");
    pacienteTr.appendChildmontaTd(paciente.altura, "info-altura");
    pacienteTr.appendChildmontaTd(paciente.gordura, "info-gordura");
    pacienteTr.appendChildmontaTd(paciente.imc, "info-imc");
    
    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
}

