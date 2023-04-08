const name1    = prompt("insira o nome 1: ")
const poweratk = parseInt(prompt("insira o poder de atk do prs 1: "))

const name2     = prompt("insira o nome 2:")
const life      = parseInt(prompt("insira o a vida do prs 2:"))
const powerdfs  = parseInt(prompt("insira o a poder de dfs do prs 2:"))
let   shield    = confirm("Possui escudo?")

let damage

if (poweratk > powerdfs && shield === false) {
    damage = poweratk - powerdfs
    let remaining_life = parseInt(life - damage) 
    alert("Seu dano foi de " + damage + "e a sua vida restante é " + remaining_life)
} else if (poweratk > powerdfs && shield === true) {
    damage = (poweratk / 2) - powerdfs
    let remaining_life = parseInt(life - damage) 
    alert("Seu dano foi de " + damage + "e a sua vida restante é " + remaining_life)
} else if (poweratk <= powerdfs) {
    damage = 0
    let remaining_life = parseInt(life - damage) 
    alert("Seu dano foi de " + damage + "e a sua vida restante é " + remaining_life)
}

