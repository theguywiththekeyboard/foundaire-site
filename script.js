
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.style.display === 'block';
    navLinks.style.display = open ? 'none' : 'block';
    menuBtn.setAttribute('aria-expanded', String(!open));
  });
}
