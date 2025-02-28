document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const objectives = this.previousElementSibling; // La liste juste avant le bouton
            objectives.classList.toggle("hidden");

            // Changer le texte du bouton en fonction de l'affichage
            if (objectives.classList.contains("hidden")) {
                this.textContent = "Voir plus";
            } else {
                this.textContent = "Voir moins";
            }
        });
    });
});

function toggleDetails(button, className) {
    const details = button.parentElement.parentElement.querySelector('.' + className);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}