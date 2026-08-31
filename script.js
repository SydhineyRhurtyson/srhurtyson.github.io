// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const aberto = navLinks.classList.toggle('aberto');
    navToggle.setAttribute('aria-expanded', String(aberto));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('aberto');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Navbar com fundo mais sólido ao rolar a página
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('rolado', window.scrollY > 20);
  });
}

// Animação de entrada suave para as seções ao rolar
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visivel');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  // Sem suporte a IntersectionObserver: mostra tudo direto
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visivel'));
}
