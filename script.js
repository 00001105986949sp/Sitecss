// Função para exibir uma mensagem de boas-vindas quando o site é carregado
window.onload = function() {
    alert("Bem-vindo ao Meu Site Criativo!");
};

// Função para rolar suavemente para as seções quando o menu é clicado
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
