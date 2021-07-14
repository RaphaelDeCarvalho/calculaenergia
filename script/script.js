function calcular(){
    //potência em Watts
    pot = potencia.value
    //tempo de consumo da energia em minutos
    tmpm = tempom.value
    //dias de consumo da energia por semana
    var e = document.getElementById("diassem");
    var result = e.options[e.selectedIndex].value
    if(potencia.value == 0 || tempom.value == 0 || e.options[e.selectedIndex].value == 0) {
        alert(`[ERRO]\nDigite todos os dados!`)
    } else {
        //valor cobrado na conta de energia em Kw/h
        kWth = valorKwh.value
        //tempo total de dias por semana no mês
        tmpmes = result*4.5
        //tempo de consumo da energia em minutos por mês
        tmpmtot = tmpm*tmpmes
        //tempo de consumo de energia por mês em horas
        tmph = tmpmtot/60
        //calculo de Watt em Kilowatt
        kWt = pot/1000
        //calcular consumo por Kilowatts por hora
        consum = kWt*tmph
        //calcular valor total de consumo por mês
        consumtot = consum*kWth
        //Resultado convertido em Reais
        titulo.innerHTML="R$"+consumtot.toFixed(2).replace(".",",")+" por mês."
        }
    }
