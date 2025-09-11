const avança = document.querySelectorAll('btn-proximo');
const reiniciarBtn = document.getElementById('.btn-reiniciar');

avança.forEach(button => {
button.addEventListener('click',function(){
    const atual = document.querySelector('.ativo');
    const proximoPasso='passo-'+this.getAttribute('data-proximo');
    atual.classList.remove("ativo");
    cost proximoElemento= document.getElementById("proximoPasso");


    cost avanca= document.querySelectorAll("btn.proximo");
    cost reiniciarBtn= document.getElementById("btn.reiniciar");

avanca.forEach{button =>{
    button.addEventListener('click', function());
    const atual= document.querySelector('.ativo');
    const proximoPasso= 'passo-'+ this.getAttribute('data-proxima');
    if (proximoElemento) {
        proximoElemento.classList.add('ativo');
    } else {
        console, console.error(`Elemento com ID "${proximoPasso}" não encontrado.`);
                }

         } }}
    )
        });