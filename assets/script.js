const toggle = document.querySelector('.theme-toggle');
const saved = localStorage.getItem('tejas-theme-v2');
const initialTheme = saved || 'light';

if (initialTheme === 'light') document.body.classList.add('light');

if (toggle) {
  toggle.setAttribute('aria-label', initialTheme === 'light' ? 'Toggle dark mode' : 'Toggle light mode');
  toggle.textContent = initialTheme === 'light' ? '◐' : '☼';
}

toggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('tejas-theme-v2', isLight ? 'light' : 'dark');
  toggle.setAttribute('aria-label', isLight ? 'Toggle dark mode' : 'Toggle light mode');
  toggle.textContent = isLight ? '◐' : '☼';
});

document.getElementById('year').textContent = new Date().getFullYear();
