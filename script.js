document.addEventListener('DOMContentLoaded', () => {
    
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                
                entry.target.classList.add('show');
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "0px 0px -100px 0px"
    });

    hiddenElements.forEach(el => observer.observe(el));
});