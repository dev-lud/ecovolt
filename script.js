const btnEntrar = document.getElementById('btn-entrar');

btnEntrar.addEventListener('click', function() {
    window.location.href = 'entrar.html'
});


document.addEventListener("DOMContentLoaded", () => {
    const btnVoltar = document.getElementById("btn-voltar");
    if (btnVoltar) {
      btnVoltar.addEventListener("click", () => {
        window.location.href = "app.html"; // Corrigido com aspas
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const homeBtn = document.getElementById("home-btn");
  
    if (homeBtn) {
      homeBtn.addEventListener("click", function(event) {
        event.preventDefault(); // impede comportamento padrão do link
        window.location.href = "inicial.html"; // redireciona para a página desejada
      });
    }
  });
  