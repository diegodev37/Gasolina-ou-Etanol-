

const msgResultado = document.querySelector("#resultado");


function calcular() {
    const precoGasolina = parseFloat (document.getElementById("gasolina").value);
    const precoAlcool = parseFloat (document.getElementById("alcool").value);

    if (isNaN(precoGasolina)){
        msgResultado.innerHTML = "Preço da Gasolina inválido";
        return;
    }
    if (isNaN(precoAlcool)){
        msgResultado.innerHTML = "Preço do Álcool inválido";
        return;
    }
console.log(precoAlcool / precoGasolina)
if((precoAlcool / precoGasolina) >= 0.7)

    msgResultado.innerHTML = "Vale mais a pena usar Gasolina!";
    else msgResultado.innerHTML = "Vale mais a pena usar Álcool!"
}

 

