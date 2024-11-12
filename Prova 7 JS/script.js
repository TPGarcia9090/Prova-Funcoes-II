const calcularGorjeta = () => {
    const valorConta = parseFloat(document.getElementById("valorConta").value);
    const qualidadeServico = parseFloat(document.getElementById("qualidadeServico").value);

    if (isNaN(valorConta) || valorConta <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido para a conta.";
        return;
    }

    const calcularValorGorjeta = (valor, taxa) => valor * taxa;

    const gorjeta = calcularValorGorjeta(valorConta, qualidadeServico);
    const total = valorConta + gorjeta;

    document.getElementById("resultado").innerText = `Gorjeta: R$ ${gorjeta.toFixed(2)}, Total: R$ ${total.toFixed(2)}`;
};