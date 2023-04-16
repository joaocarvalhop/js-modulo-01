let qntd = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponível?"))
let opc = prompt("Vc possui: " + qntd + "\n deseja adicionar, remover ou sair?")
let valor

while (opc != "sair") {
    if (opc == "adicionar") {
        qntd += parseFloat(prompt("Vc possui: " + qntd + " quanto deseja adicionar?"))
        opc = prompt("Vc possui: " + qntd + "\n deseja adicionar, remover ou sair?")
    } else if (opc == "remover") {
        qntd -= parseFloat(prompt("Vc possui: " + qntd + " quanto deseja remover?"))
        opc = prompt("Vc possui: " + qntd + "\n deseja adicionar, remover ou sair?")
    }
} 

if (opc == "sair") alert("Saindo...")