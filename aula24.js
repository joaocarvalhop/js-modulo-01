const name  = prompt("Me diga seu nome: ");
let visited = confirm("Já visitou alguma cidade? ");
let cities  = ""

while (visited === true) {
  city = prompt("Qual é o nome da cidade? ")
  cities += " - " + city
  visited = confirm("Já visitou alguma OUTRA cidade? ");
}

alert(name + " visitou essas cidades -> " + cities)