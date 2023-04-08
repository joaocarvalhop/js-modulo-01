let valor = parseFloat(prompt("Insira o valor: "));
let opcao = prompt(
  "- milímetro (mm)\n- centímetro (cm)\n- decímetro (dm)\n- decâmetro (dam)\n- hectômetro (hm)\n- quilômetro (km)"
);

switch (opcao) {
  case "mm":
    alert(valor + "mm");
    break;
  case "cm":
    alert(valor + "cm");
    break;
  case "dm":
    alert(valor + "dm");
    break;
  case "dam":
    alert(valor + "dam");
    break;
  case "hm":
    alert(valor + "hm");
    break;
  case "km":
    alert(valor + "km");
    break;
  default:
    alert("Opção inválida!");
    break;
}
