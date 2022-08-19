var cep = document.querySelector('#cep');
var rua = document.querySelector('#rua');
var bairro = document.querySelector('#bairro');
var cidade = document.querySelector('#cidade');
var estado = document.querySelector('#estado');
cep.value = "";

cep.addEventListener('mouseout', function(e){
    var cep = e.target.value; 
    var script = document.createElement('script');
    script.src ='https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);

});

function popularForm(resposta) {

    if ("erro" in resposta){
        alert ('CEP não encontrado');
    }

   
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}