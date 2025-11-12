import { initializeTeamFilter } from './team-filter.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialiseer de scroll-animaties
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const sectionsToAnimate = document.querySelectorAll('.fade-in-section');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // 2. Initialiseer de team-filter functionaliteit
    initializeTeamFilter();

});