// Arquivo reservado para futuras interações ou animações
// Por exemplo: animação de digitação ou efeito de transição

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página 'Sobre Mim' carregada com sucesso!");
});
// ======= EFEITO DE DIGITAÇÃO - PÁGINA DESING =======
document.addEventListener("DOMContentLoaded", () => {
  const textoEl = document.getElementById('typingText');
  if (!textoEl) return; // Evita erro em outras páginas

  const habilidades = [
    'Desenvolvedor focado em automação e presença digital.',
    'Experiência com Python, HTML, CSS e JavaScript.',
    'Domínio em C# e desenvolvimento web.',
    'Editor de vídeos e criador de conteúdo digital.'
  ];

  let index = 0;
  let charIndex = 0;
  let apagando = false;

  function digitar() {
    const textoAtual = habilidades[index];

    if (!apagando) {
      textoEl.textContent = textoAtual.substring(0, charIndex++);
      if (charIndex > textoAtual.length) {
        apagando = true;
        setTimeout(digitar, 500);
        return;
      }
    } else {
      textoEl.textContent = textoAtual.substring(0, charIndex--);
      if (charIndex < 0) {
        apagando = false;
        index = (index + 1) % habilidades.length;
      }
    }

    setTimeout(digitar, apagando ? 15 : 30);
  }

  digitar();
});



// ===== MÁSCARA DE TELEFONE =====
document.getElementById("telefone").addEventListener("input", function (e) {
  let input = e.target.value.replace(/\D/g, "");
  if (input.length > 11) input = input.substring(0, 11);

  if (input.length > 10) {
    input = input.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (input.length > 6) {
    input = input.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  } else if (input.length > 2) {
    input = input.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else {
    input = input.replace(/^(\d*)$/, "($1");
  }

  e.target.value = input;
});

// ===== VALIDAÇÃO DE EMAIL =====
document.getElementById("email").addEventListener("input", function (e) {
  const email = e.target.value;
  if (email.includes("@") && email.includes(".")) {
    e.target.style.borderColor = "#27c93f";
  } else {
    e.target.style.borderColor = "#ff5f56";
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const telefoneInput = document.getElementById('telefone');
    const emailInput = document.getElementById('email');
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    // Máscara de telefone
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            e.target.value = value;
        }
    });

    // Validação de e-mail em tempo real
    emailInput.addEventListener('input', function() {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
        }
    });

    // Envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validações básicas
        const nome = document.getElementById('nome').value.trim();
        const telefone = telefoneInput.value.trim();
        const email = emailInput.value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        if (!nome || !telefone || !email || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Simulação de envio 
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        // Limpar formulário
        form.reset();
        emailInput.classList.remove('valid', 'invalid');
    });
});