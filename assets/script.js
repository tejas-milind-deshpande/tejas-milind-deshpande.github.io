const toggle = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('tejas-theme');

if (saved === 'light') document.body.classList.add('light');

toggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('tejas-theme', isLight ? 'light' : 'dark');
  toggle.setAttribute('aria-label', isLight ? 'Toggle dark mode' : 'Toggle light mode');
  toggle.textContent = isLight ? '◐' : '☼';
});

document.getElementById('year').textContent = new Date().getFullYear();
