$(".aggiungi").keydown(

  function(evento){

  if ( evento.which == 13 ) {

    var testo = $(this).val();
    console.log(testo);
  }
});
