$(document).ready(function() {
    $('header button').click(function() {
    $('form').slideDown();
    });
    $('#cancelar').click(function() {
    $('form').slideUp();
    });
    $('form').on('submit', function(e) {
    e.preventDefault();
    const NovaTarefa = $('#tarefa-nova').val();
    const novoItem = $('<li></li>');
    $('<span></span>').text(NovaTarefa).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#tarefa-nova').val('');
    });
});
$(document).on('click', 'ul li', function() {
$(this).toggleClass('riscado');
});