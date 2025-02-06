document.addEventListener("DOMContentLoaded", () => {
    const galleries = document.querySelectorAll(".gallery");

    galleries.forEach(gallery => {
        gallery.style.display = "flex";
    });
});
