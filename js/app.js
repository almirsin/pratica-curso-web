//jquery/ pega o elemento /  executa a funçao -- espera o carregamento do documento
$(document).ready(function (){
	
	//Cria variavel com referencia para o elemento com id igual a 'conheca-me'

	var $btnConhecaMe = $('#conheca-me');
	
	$btnConhecaMe.on('click', function(){
		var conf = confirm('voce deseja continuar ?');
			if (conf){

					alert('Muito Obrigado!');
			}else{

					alert(':(');
			}		


	});

	$('.animated').on('click', function (event) {
		var $element;

		// evita que a açao padra do botão seja chamada
		event.preventDefault();
		// Pega o elemento clicaDO
		$element = $($.attr(this, 'href'));
		if ($element.length){
		// Opçoes da animacao
			options = { 
			
			scrollTop: $element.offset().top
			};
			// Duracao em milisegundos
			duration = 500;
			$('html, body').animate(options, duration);
			//Add efeito de animacao

		}
	
	});

});


//var $btnConhecaMe = $('#conheca-me');

	//Adiciona acao ao click
//	$btnConhecaMe.on('click', function(){
//		alert('obrigado!');
//	});
