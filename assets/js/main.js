// mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// smooth focus after hash nav (a11y)
if ('onhashchange' in window) {
  window.addEventListener('hashchange', () => {
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.setAttribute('tabindex', '-1'), el.focus();
  });
}

