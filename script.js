function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! We will contact you shortly.');
});
