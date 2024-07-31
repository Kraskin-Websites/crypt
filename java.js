// java.js
document.addEventListener('DOMContentLoaded', function () {
    // Função para editar nomes
    document.querySelectorAll('.motoboy-info span').forEach(span => {
      span.addEventListener('click', function () {
        let currentName = this.textContent;
        let newName = prompt("Editar nome:", currentName);
        if (newName !== null && newName.trim() !== "") {
          this.textContent = newName.trim();
          localStorage.setItem(this.id, newName.trim()); // Salva o novo nome no localStorage
        }
      });
    });
  
    // Função para alternar a cor da borda da imagem
    let longPressDuration = 2000; // 2 segundos
    document.querySelectorAll('.motoboy-info img').forEach(img => {
      let timer;
  
      img.addEventListener('mousedown', function () {
        timer = setTimeout(() => {
          img.classList.toggle('red'); // Alterna a classe 'red'
          localStorage.setItem(img.id + '-red', img.classList.contains('red')); // Salva o estado no localStorage
        }, longPressDuration);
      });
  
      img.addEventListener('mouseup', function () {
        clearTimeout(timer);
      });
  
      img.addEventListener('mouseleave', function () {
        clearTimeout(timer);
      });
    });
  
    // Carregar os nomes e estados da borda das imagens do localStorage
    document.querySelectorAll('.motoboy-info span').forEach(span => {
      let savedName = localStorage.getItem(span.id);
      if (savedName) {
        span.textContent = savedName;
      }
    });
  
    document.querySelectorAll('.motoboy-info img').forEach(img => {
      let isRed = localStorage.getItem(img.id + '-red') === 'true';
      if (isRed) {
        img.classList.add('red');
      }
    });
  });
  