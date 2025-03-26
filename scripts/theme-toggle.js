document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Cargar preferencia del usuario o usar modo oscuro por defecto
    const userTheme = localStorage.getItem('theme');
    if (userTheme === 'light') {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
    }

    // Actualizar íconos según el modo
    const updateIcons = () => {
        const sunIcon = themeToggle.querySelector('.dark\\:block');
        const moonIcon = themeToggle.querySelector('.dark\\:hidden');
        if (html.classList.contains('dark')) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    };

    updateIcons();

    // Alternar entre modos
    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        updateIcons();
    });
});
