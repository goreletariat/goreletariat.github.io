const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
    
    const theme = themeToggle.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
    const galleries = document.querySelectorAll(".gallery");

    galleries.forEach(gallery => {
        gallery.style.display = "flex";
    });
});
