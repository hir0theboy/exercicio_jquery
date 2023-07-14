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
        $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
        });
    });
    
    function adicionarTarefa(nomeTarefa) {
        const novaTarefa = $('<li></li>').text(nomeTarefa);
        $('#lista-tarefas').append(novaTarefa);
    }
    
    function verificarTarefaRepetida(nomeTarefa) {
        let tarefaRepetida = false;
        $('#lista-tarefas li').each(function() {
        if ($(this).text() === nomeTarefa) {
            tarefaRepetida = true;
            return false; 
        }
        });
        return tarefaRepetida;
    }