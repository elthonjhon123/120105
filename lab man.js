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
        { subject: "2nd Clinical Lab Science", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/2ND CLINICAL LAB SCIENCE .pdf' },
        { subject: "Basic Cell Biology", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/MODULE-2-BASIC-CELL-BIOLOGY.pdf' },
        { subject: "Health Laboratory Management and Quality Assurance", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/HEATH LABORATORY MANAGEMENT AND QUALITY ASSURANCE.pdf' },
        { subject: "Internal Quality Assurance in Laboratory", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/INTERNAL QUALITY ASSURANCE IN LABORATORY .pdf' },
        { subject: "Introduction to Genetics", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/MODULE-1-INTRODUCTION-TO-GENETICS.pdf' },
        { subject: "Lab Management Intro", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/Lab.-management-intro.pdf' },
        { subject: "Lab Management Notes Term", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/LAB MANAGEMENT NOTES TERM .pdf' },
        { subject: "Laboratory Management", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/LABORATORY MANAGEMENT.pdf' },
        { subject: "Laboratory Management 1", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/LABRORATORY MANAGEMENT 1.pdf' },
        { subject: "Laboratory Management 2", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/LABBORATORY MANAGEMENT 2.pdf' },
        { subject: "Laboratory Management Operation Module 4", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/LABORATORY MANAGEMENT OPERATION MODULE 4.pdf' },
        { subject: "Planning", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/4.-PLANNING.pdf' },
        { subject: "Quality Control Procedure One Lab", image: 'images/25.png', pdf: 'MED TECH/2ND YEAR MEDTECH/1ST SEM/LABORATORY MANAGEMENT/QUALITY CONTROL PROCEDURE ONE LAB .pdf' }
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
