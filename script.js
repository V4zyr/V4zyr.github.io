// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=>{ navLinks.classList.toggle('show'); });

// Current Time Display
function updateTime(){
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {month:'short', day:'numeric', year:'numeric', hour:'numeric', minute:'2-digit', second:'2-digit'});
    document.getElementById('current-time').textContent = timeString;
}
updateTime();
