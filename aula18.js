const name_car1 = prompt("nome carro 1")
const vel_car1  = parseFloat(prompt("velocidade carro 1"))
const name_car2 = prompt("nome carro 2")
const vel_car2  = parseFloat(prompt("vel carro 2"))

if (vel_car1 > vel_car2) {
    alert("carro 1 é mais rapido")
} else if (vel_car2 > vel_car1) {
    alert("carro 2 é mais rapido")
} else {
    alert("os dois tem a mesma velocidade")
}