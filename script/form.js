function verifica () {
    if(document.dados.name.value==''){
       alert("Insira os dados no campo Nome");
        return;
    }
    else if (document.dados.email.value==''){
       alert("Insira os dados no campo Email");
        return;
    }
    else if (document.dados.message.value==''){
       alert("Insita o assunto no campo Assunto");
        return;
    }
}