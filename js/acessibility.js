document.addEventListener('DOMContentLoaded', function() {
    // Add accessibility enhancements
    
    // Make floating reserve button more accessible
    const floatingReserveBtn = document.getElementById('floatingReserveBtn');
    if (floatingReserveBtn) {
        floatingReserveBtn.setAttribute('aria-label', 'Abrir formulário de reserva');
        floatingReserveBtn.setAttribute('role', 'button');
    }
    
    // Add keyboard navigation to close buttons
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.setAttribute('aria-label', 'Fechar modal');
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');
        
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Make suite cards more accessible
    const suiteButtons = document.querySelectorAll('.btn-more');
    suiteButtons.forEach(button => {
        const suiteName = button.closest('.suite-info').querySelector('h3').textContent;
        button.setAttribute('aria-label', `Saiba mais sobre ${suiteName}`);
    });
    
    // Improve navigation accessibility
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.setAttribute('role', 'menuitem');
    });
    
    // Make hamburger menu accessible
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.setAttribute('aria-label', 'Menu de navegação');
        hamburger.setAttribute('role', 'button');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('tabindex', '0');
        
        hamburger.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
        });
        
        hamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
});