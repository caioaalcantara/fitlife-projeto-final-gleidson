function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoDiv = document.getElementById('resultado');

    if (nome === '' || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';
    let corFundo = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        corFundo = '#f1c40f';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
        corFundo = '#2ecc71';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
        corFundo = '#e67e22';
    } else {
        classificacao = 'Obesidade';
        corFundo = '#e74c3c';
    }

    resultadoDiv.innerHTML = `
        <p>Olá, <strong>${nome}</strong>!</p>
        <p>Seu IMC é: <strong>${imc}</strong></p>
        <p>Classificação: <span>${classificacao}</span></p>
    `;
    
    resultadoDiv.style.backgroundColor = corFundo;
    resultadoDiv.style.color = '#fff';
    resultadoDiv.classList.remove('hidden');
}