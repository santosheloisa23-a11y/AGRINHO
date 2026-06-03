document.addEventListener('DOMContentLoaded', () => {
    
    // Sistema do Simulador de Sustentabilidade
    const btnCalcular = document.getElementById('btn-calcular');
    const checkboxes = document.querySelectorAll('.chk-sustentavel');
    const resultadoDiv = document.getElementById('resultado');
    const scoreValor = document.getElementById('score-valor');
    const scoreMensagem = document.getElementById('score-mensagem');

    btnCalcular.addEventListener('click', () => {
        let scoreTotal = 0;

        // Soma o valor de cada checkbox marcado
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                scoreTotal += parseInt(checkbox.value);
            }
        });

        // Atualiza a interface com o resultado
        scoreValor.textContent = `${scoreTotal}%`;
        
        // Altera a mensagem baseada no resultado
        if (scoreTotal === 0) {
            scoreMensagem.textContent = "Precisamos começar! Pequenas ações geram grandes impactos no campo e na cidade.";
            resultadoDiv.style.backgroundColor = "#ffcdd2"; // Vermelho claro
        } else if (scoreTotal <= 50) {
            scoreMensagem.textContent = "Bom começo! Você já pratica o equilíbrio, mas ainda podemos evoluir para proteger o agro e a natureza.";
            resultadoDiv.style.backgroundColor = "#ffe082"; // Amarelo claro
        } else if (scoreTotal <= 75) {
            scoreMensagem.textContent = "Muito bem! Sua consciência ecológica está forte e gerando impactos reais de equilíbrio.";
            resultadoDiv.style.backgroundColor = "#a5d6a7"; // Verde claro
        } else {
            scoreMensagem.textContent = "Excelente! Você é um verdadeiro embaixador do Futuro Sustentável do Agrinho! Parabéns!";
            resultadoDiv.style.backgroundColor = "#81c784"; // Verde firme
        }

        // Mostra o box de resultados removendo a classe "escondido"
        resultadoDiv.classList.remove('resultado-escondido');
        resultadoDiv.classList.add('resultado-visivel');
    });

    // Menu Mobile Simplificado
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
        }
    });
});