/*alert("Ola mundo")*/
//console.log("teste")


var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

btnMenu.addEventListener('click',function(){
    //alert('ok');

    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');

})


/*ao clicar no menu, esconde o mesmo e retorne o botao para posicao inicial*/s
menu.addEventListener('click', function(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
})
