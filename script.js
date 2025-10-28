// Hamburger toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hide menu after clicking a link (mobile fix)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// Current Time Display
function updateTime(){
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {month:'short', day:'numeric', year:'numeric', hour:'numeric', minute:'2-digit', second:'2-digit'});
    document.getElementById('current-time').textContent = timeString;
}
updateTime();
