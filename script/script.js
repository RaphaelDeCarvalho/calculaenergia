function calcular(){
    //potência em Watts
    pot = potencia.value
    //tempo de consumo da energia em minutos
    tmpm = tempom.value
    //dias de consumo da energia por semana
    tmpd = tempod.value
    //valor cobrado na conta de energia em Kw/h
    kWth = valorKwh.value
    //tempo total de dias por semana no mês
    tmpmes = tmpd*4.5
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
    