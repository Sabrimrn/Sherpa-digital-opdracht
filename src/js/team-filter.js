export function initializeTeamFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const teamCards = document.querySelectorAll('.team-member-card');

    if (!filterButtons.length) return; // Stop als er geen knoppen zijn

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Update de actieve knop
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Filter de kaarten
            const filter = button.dataset.filter;
            filterCards(filter);
        });
    });

    function filterCards(filter) {
        teamCards.forEach(card => {
            const departments = card.dataset.department.split(' ');
            
            const matchesFilter = filter === 'all' || departments.includes(filter);

            if (matchesFilter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
}