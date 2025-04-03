document.addEventListener('DOMContentLoaded', function() {
    // Social media interaction tracking
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the social network from the aria-label
            const socialNetwork = this.getAttribute('aria-label');
            
            // In a real app, you would track this or open a new window
            console.log(`Clicked on ${socialNetwork} link`);
            
            // Simulated action - in reality would open appropriate URL
            alert(`Você será redirecionado para nossa página no ${socialNetwork}`);
        });
    });
});
