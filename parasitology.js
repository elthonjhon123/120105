document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const imageSources = [
        // Add image sources here
    ];

    const cellCount = imageSources.length; // Number of images
    const theta = 360 / cellCount;
    const radius = Math.round((200 / 2) / Math.tan(Math.PI / cellCount));

    // Generate carousel cells
    imageSources.forEach((src, i) => {
        const cell = document.createElement('div');
        cell.classList.add('carousel__cell');
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${i + 1}`;
        cell.appendChild(img);

        const angle = theta * i;
        cell.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        carousel.appendChild(cell);
    });

    const cardContents = [
        { subject: "Atlas of Medical Helminthology and Protozoology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/ATLAS OF MEDICAL HELMINTHOLOGY AND PROTOZOOLOGY.pdf' },
        { subject: "Belizario, de Leon - Medical Parasitology in the Philippines 3rd ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Belizario, de Leon - Medical Parasitology in the Philippines 3rd ed.pdf' },
        { subject: "Clinical Parasitology A Practical Approach by Elizabeth Zeibig", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Clinical Parasitology A Practical Approach by Elizabeth Zeibig (z-lib.org).pdf' },
        { subject: "Clinical Parasitology A Practical Approach, 2E", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Clinical Parasitology A Practical Approach, 2E.pdf' },
        { subject: "Color Atlas of Parasitology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Color Atlas of Parasitology.pdf' },
        { subject: "Markell and Voges Medical Parasitology (9th Ed.)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Markell and Voges Medical Parasitology (9th Ed.).pdf' },
        { subject: "Medical Parasitology Atlas", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/MEDICAL PARASITOLOGY ATLAS.pdf' },
        { subject: "Medical Parasitology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/MEDICAL PARASITOLOGY.pdf' },
        { subject: "Mega-Micro-Para-Table-1", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Mega-Micro-Para-Table-1.pdf' },
        { subject: "Parasitology_Laboratory_NEMATODES_Ascaris_Lumbricoides", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Parasitology_Laboratory_NEMATODES_Ascaris_Lumbricoides.pdf' },
        { subject: "Parasitology_Laboratory_NEMATODES_Trichinella_Spiralis", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Parasitology_Laboratory_NEMATODES_Trichinella_Spiralis.pdf' },
        { subject: "Parasitology-Laboratory-NEMATODES-Filarial-Worms", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Parasitology-Laboratory-NEMATODES-Filarial-Worms.pdf' },
        { subject: "Parasitology-Laboratory-Trematodes", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Parasitology-Laboratory-Trematodes.pdf' },
        { subject: "Parasitology-Laboratory-Trichuris-Trichiura", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Parasitology-Laboratory-Trichuris-Trichiura.pdf' },
        { subject: "Parasitology-Review", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Parasitology-Review.pdf' },
        { subject: "Parasitology-Table-Review-3", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Parasitology-Table-Review-3.pdf' },
        { subject: "Principles and Practice of Clinical Parasitology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Principles and Practice of Clinical Parasitology.pdf' },
        { subject: "Ridley - Parasitology for Medical and Clinical Laboratory Professional", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL PARASITOLOGY/Ridley - Parasitology for Medical and Clinical Laboratory Professional.pdf' }
    ];
    
    
    const cardsGrid = document.querySelector('.cards-grid');

    cardContents.forEach(content => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardLink = document.createElement('a');
        cardLink.href = content.pdf;
        cardLink.target = '_blank'; // Opens in a new tab

        const cardImage = document.createElement('img');
        cardImage.src = content.image;
        cardImage.alt = content.subject; // Use subject as alt text
        cardLink.appendChild(cardImage);

        const cardTitle = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.textContent = content.subject; // Use subject as title text
        titleLink.href = content.pdf;
        titleLink.target = '_blank'; // Opens in a new tab
        cardTitle.appendChild(titleLink);

        card.appendChild(cardLink);
        card.appendChild(cardTitle);
        cardsGrid.appendChild(card);
    });

    const searchInput = document.querySelector('.search-bar input');
    const cards = document.querySelectorAll('.card');
    const noResultsMessage = document.createElement('div');
    noResultsMessage.classList.add('no-results-message');
    noResultsMessage.textContent = 'NO RESULT FOUND.';
    cardsGrid.appendChild(noResultsMessage);

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let noResults = true;

        cards.forEach(card => {
            const cardTitle = card.querySelector('h3 a').textContent.toLowerCase();
            const cardImageAlt = card.querySelector('img').alt.toLowerCase();

            if (cardTitle.includes(searchTerm) || cardImageAlt.includes(searchTerm)) {
                card.style.display = 'block';
                noResults = false;
            } else {
                card.style.display = 'none';
            }
        });

        noResultsMessage.style.display = noResults ? 'block' : 'none';
    }

    searchInput.addEventListener('input', handleSearch);
    handleSearch(); // Initial search call
});

// Function to check if screen width is 2/3 of its original size
function isTwoThirdsWidth() {
    return window.innerWidth <= window.screen.width * (8 / 10);
}

// Function to show full-screen message and hide content
function showFullScreenMessage() {
    document.querySelector('.content').style.display = 'none';
    document.getElementById('full-screen-message').style.display = 'flex';
}

// Function to hide full-screen message and show content
function hideFullScreenMessage() {
    document.querySelector('.content').style.display = 'flex';
    document.getElementById('full-screen-message').style.display = 'none';
}

// Event listener for window resize
window.addEventListener('resize', function() {
    if (isTwoThirdsWidth()) {
        showFullScreenMessage();
    } else {
        hideFullScreenMessage();
    }
});

// Initial check on page load
if (isTwoThirdsWidth()) {
    showFullScreenMessage();
} else {
    hideFullScreenMessage();
}
