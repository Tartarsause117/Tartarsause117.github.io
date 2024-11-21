document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        const href = e.target.getAttribute('href');
        
        // Check if the link is pointing to an internal section (e.g., #about) or an external page (e.g., index.html)
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // If the link points to an external page, let it navigate normally
            window.location.href = href;
        }
    });
});
