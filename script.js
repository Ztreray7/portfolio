document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por entrar em contato! Em breve retornarei.');
    this.reset();
  });
  