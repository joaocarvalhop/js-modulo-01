let menu1 = prompt("Opção 1, 2, 3, 4 e Encerrar")

while (menu1 != "Encerrar") {
    alert("Vc digitou a opção " + menu1)
    menu1 = prompt("Opção 1, 2, 3, 4 e Encerrar")
}

if (menu1 == "Encerrar") alert("Está sendo encerrado...")