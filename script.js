const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Current Time
function updateTime(){
  const now = new Date();
  const timeString = now.toLocaleString('en-US', {
    month:'short', day:'numeric', year:'numeric',
    hour:'numeric', minute:'2-digit', second:'2-digit'
  });
  document.getElementById('current-time').textContent = timeString;
}
updateTime();
