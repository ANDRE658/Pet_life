var CaixasDeRespostas = document.querySelectorAll(".duvida");

CaixasDeRespostas.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    }) //toggle se tiver tira se não coloca
})
