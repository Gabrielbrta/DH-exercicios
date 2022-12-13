const alunosCurso = [];
const nomes = ["Gabriel", "Marcos", "Marcia", "Monica"];
/* 
Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).  */
class Aluno {
  constructor(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  }

  /* 
  Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 
  */
  calcularMedia() {
    let notas = this.notas
    let media = 0;
    notas.forEach(nota => { 
      (media += nota) / this.notas.length; 
      return media
    });
    return media;
  }

  falta() {
    this.faltas += 1;
  }
}
/*
crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2). 
*/

const curso = {
  nome: "Programação imperativa",
  notaAprovacao: 6,
  faltasMaximas: 2,
  estudantes: alunosCurso,

  /*
  Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. 
  */
  addEstudante(nome, faltas, notas) {
    let novoEstudante = new Aluno(nome, faltas, notas);
    this.estudantes.push(novoEstudante);
  },

  /*
  Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
  */

  situacaoFinal(aluno) {
    let media = (aluno.notas.reduce((acc, nota) => { 
      return (acc + nota);
    }) / aluno.notas.length).toFixed();

    if( media >= this.notaAprovacao && aluno.faltas < this.faltasMaximas ) {
     return `${aluno.nome} Aprovado!`
    } 
    else if( media >= this.notaAprovacao && aluno.faltas == this.faltasMaximas ) {
      let porcentagemAprovacao = this.notaAprovacao * 1.1;
        if( media >= porcentagemAprovacao) {
          return `${aluno.nome} Aprovado!`;
        } else {
          return `${aluno.nome} Reprovado`;
        }
    } else {
      return `${aluno.nome} Reprovado`;
    }
  },

  /*	
  Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
  */
  aprovadosEReprovados() {
    let arraySituacao = []
    this.estudantes.forEach((estudante, index) =>{
      arraySituacao[index] = this.situacaoFinal(estudante);
      return arraySituacao;
    });
    return arraySituacao;
  }
}

function insereAlunos(arrayNomes) {
  arrayNomes.forEach((nome) => {
    curso.addEstudante(nome, numAleatorio(1), [+numAleatorio(10), +numAleatorio(10), +numAleatorio(10)]);
  });
}

function numAleatorio(numeroMax) {
  return (Math.random() * numeroMax).toFixed();
}
insereAlunos(nomes);
console.log(curso.situacaoFinal(curso.estudantes[0]));
console.log(curso.aprovadosEReprovados());