$("#aggiungi").keydown(

  function(evento){

    if ( evento.which == 13 ) {
      var testo = $(this).val();

    if ( testo != "" ) {
      var template = $(".template li").clone();
      template.prepend(testo);
      $(".todo-list").append(template);
      $(this).val(" ");
    }
  }
});

$(document).on("click", ".todo-list .delete",
  function(){
    $(this).parent().remove();
  }
);
