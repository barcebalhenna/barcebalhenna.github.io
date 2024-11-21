const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('.sidebar a');
const iframe = document.getElementById('content-frame');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

        const target = e.target.getAttribute('data-target');
        if (target === "index.html") {
            window.location.href = target;
        } else {
            iframe.src = target; 
        }
    });
});
