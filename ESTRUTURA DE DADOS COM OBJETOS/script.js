/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Joana",
    age: 28,
    weight: 85,
    height: 178,
  },
  {
    name: "Maria",
    age: 56,
    weight: 93,
    height: 183,
  },
  {
    name: "Carlos",
    age: 32,
    weight: 73,
    height: 173,
  },
]

let patientsName = [];

for (let patient of patients) {
  patientsName.push(patient.name)
}

alert(patientsName)