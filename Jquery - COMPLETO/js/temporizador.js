(function ($) {
    $.fn.temporizador = function(opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '25:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade,separadorMinuto,
            segundoDezena, segundoUnidade, mensagem )

            const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
            const horarioAtual = regex.exerc(opcoesFinais.horario)

            let temporizador = setInterval(() => {
                 const agora = new Date()
                 const alvo = new Date()
                 alvo.setHours(horarioAlvo[1])
                 alvo.setMinutes(horarioAlvo[2])
                 alvo.setSeconds(horarioAlvo[3])

                const diferençaEmMili = alvo.getTime() - agora.getTime()

                if(diferençaEmMili >= 0) {
                    const diferença = regex.exerc(new Date(diferençaEmMili).toISOString())
                    
                    horaDezena.html(diferença[1][0])
                    horaUnidade.html(diferença[1][1])
                    minutoDezena.html(diferença[2][0])
                    minutoUnidade.html(diferença[2][1])
                    segundoDezena.html(diferença[3][0])
                    segundoUnidade.html(diferença[3[1]])
                } else {
                    clearInterval(temporizador)
                }
            }, 1000)

        return this
    }
})