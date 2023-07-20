/*  
  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os   seguintes dados:

  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
  - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar   no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Daniel",
    firstTest: 8,
    secondTest: 9,
  },
  {
    name: "Carla",
    firstTest: 6.6,
    secondTest: 7.8,
  },
  {
    name: "Maria",
    firstTest: 8.6,
    secondTest: 3.9,
  },
  {
    name: "João",
    firstTest: 7,
    secondTest: 6.5,
  },
  {
    name: "Camila",
    firstTest: 7.5,
    secondTest: 7,
  },
]

function finalMedia(firstTest, secondTest) {
 return ((firstTest + secondTest) / 2).toFixed(2)

}

function studentAverage(student) {
  if (finalMedia(student.firstTest, student.secondTest,) >= 7) {
    return ` A média do(a) aluno(a) ${student.name} foi de ${finalMedia(
      student.firstTest,
      student.secondTest
    )}\n Parabéns ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    return ` A média do(a) aluno(a) ${student.name} foi de ${finalMedia(
      student.firstTest,
      student.secondTest
    )}\n Não foi dessa vez ${student.name}! Tente novamente`
  }
}

for (let student of students) {
  let studentMessage = studentAverage(student)
  alert(studentMessage)
}



