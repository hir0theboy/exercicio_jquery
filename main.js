$(document).ready(function() {
    $('header button').click(function() {
    $('form').slideDown();
    });
    $('#cancelar').click(function() {
    $('form').slideUp();
    });
    $('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#tarefa-nova').val();
    if (verificarTarefaRepetida(novaTarefa)) {
        alert('Essa tarefa já foi inserida!');
    } else {
        adicionarTarefa(novaTarefa);
        $('#tarefa-nova').val('');
    }
    });
    $('#tabela-tarefas').on('click', 'td', function() {
    $(this).parent('tr').toggleClass('riscado');
    });
});

function adicionarTarefa(nomeTarefa) {
    const novaLinha = $('<tr></tr>');
    const novaCelula = $('<td></td>').text(nomeTarefa);
    $(novaLinha).append(novaCelula);
    $('#tabela-tarefas tbody').append(novaLinha);
}

function verificarTarefaRepetida(nomeTarefa) {
    let tarefaRepetida = false;
    $('#tabela-tarefas tbody td').each(function() {
    if ($(this).text() === nomeTarefa) {
        tarefaRepetida = true;
        return false; 
    }
    });
    return tarefaRepetida;
}