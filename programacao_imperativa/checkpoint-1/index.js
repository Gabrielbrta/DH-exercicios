function microondas(opcao, tempo){
  let tempoPipoca = 10;
  let tempoMacarrao = 8;
  let tempoCarne = 15;
  let tempoFeijao = 12;
  let tempoBrigadeiro = 8;

  switch(opcao) {
    case 1:
      verificaTempo(tempo, tempoPipoca);
      console.log("Prato pronto, bom apetite!!!");
      break;
    case 2:
      verificaTempo(tempo, tempoMacarrao);
      console.log("Prato pronto, bom apetite!!!");
      break;
    case 3:
      verificaTempo(tempo, tempoCarne);
      console.log("Prato pronto, bom apetite!!!");
      break;
    case 4:
      verificaTempo(tempo, tempoFeijao);
      console.log("Prato pronto, bom apetite!!!");
      break;
    case 5:
      verificaTempo(tempo, tempoBrigadeiro);
      console.log("Prato pronto, bom apetite!!!");
      break;
    default:
      console.log('Opção Invalida') ;
  }
}

function verificaTempo(tempoUser, tempoComida) {
  let dobroTempo = tempoUser > tempoComida * 2 && tempoUser < tempoComida * 3;
  let triploTempo = tempoUser >= tempoComida * 3;
  let tempoInsuficiente = tempoUser < tempoComida;

  if (dobroTempo) {
    return console.log('Sua comida queimou')
  } else if(triploTempo) {
    return console.log('Kambuum!!!');
  } else if(tempoInsuficiente) {
    return console.log("Tempo Insuficiente");
  }
}

  microondas(5, 24);