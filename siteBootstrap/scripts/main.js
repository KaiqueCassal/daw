
jQuery(document).ready(function($){
    window.onscroll = function(){
        let btnCadastro = $("#cadastrar");

        btnCadastro.click(function(a){
            $("#navegacao").removeClass("active")
            $("#perfil").removeClass("esconde")
        })
        if(window.pageYOffset > 140){
            $("#navegacao").addClass("active");
        }else{
            $("#navegacao").removeClass("active");
        }
    };

    let btns = $("#cardapio .button-group button");

    btns.click(function(e){
        $("#cardapio .button-group button").removeClass('active');
        e.target.classList.add("active");
        $('#cardapio .button-group button').on( 'click', 'button', function() {
            let selector = $(e.target).attr('data-filter');
            $("#cadapio .row .grid .item-details").isotope({ filter: selector });
        });
    });
    $(window).on("load", function(){
        $("#cardapio .grid").isotope({
            filter: "*",
        });
    });

    $(".grid .popup-link").magnificPopup({
        type: "image",
        closeOnContentClicl: true,
        mainClass: 'mfp-img-mobile', 
        gallery:{
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        },
        image: {
            verticalFit: true
        },
        zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
        
    })
});

function salvar(){
    let email = document.getElementById('inputEmail').value
    let nome = document.getElementById('inputNome').value
    let sobrenome = document.getElementById('inputSobrenome').value
    let endereco = document.getElementById('inputEndereco').value
    let referencia = document.getElementById('inputReferencia').value
    let celular = document.getElementById('inputCelular').value
    let senha = document.getElementById('inputSenha').value
    let confirmaSenha = document.getElementById('inputConfrimaSenha').value


    let conta = [email, nome, sobrenome, endereco, referencia, celular, senha, confirmaSenha]

    globalThis.contas = [conta]
     
}

function mostrar(){
    let n = document.getElementById('nome')
    let s = document.getElementById('sobrenome')
    let e = document.getElementById('email')
    let en = document.getElementById('endereco')
    let c = document.getElementById('celular')

    n.innerHTML = `${contas[0][1]}`
    s.innerHTML = `${contas[0][2]}`
    e.innerHTML = `${contas[0][0]}`
    en.innerHTML = `${contas[0][3]}`
    c.innerHTML = `${contas[0][5]}`
}