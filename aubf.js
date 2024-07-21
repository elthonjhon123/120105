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
        { subject: "AUBF", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/AUBF.pdf' },
        { subject: "AUBF Clinical Microbiology Made Ridiculously Simple 3rd Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/Clinical_Microbiology_Made_Ridiculously_Simple_3rdEd.pdf' },
        { subject: "AUBF CM Strasinger 5th edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/CM Strasinger 5th edition.pdf' },
        { subject: "AUBF CM Strasinger 6th Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/CM Strasinger 6th Edition.pdf' },
        { subject: "AUBF Graffs Textbook of Urinalysis", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/Graffs Textbook of Urinalysis.pdf' },
        { subject: "AUBF HENRY'S CLINICAL DIAGNOSIS AND MANAGEMENT BY LABORATORY METHODS 22nd ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/HENRY_S CLINICAL DIAGNOSIS AND MANAGEMENT BY LABORATORY METHODS 22nd ed.pdf' },
        { subject: "AUBF Strasinger (6th Ed.) Urinalysis and Body Fluids", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/Urinalysis and Body Fluids - Strasinger (6th Ed.).pdf' },
        { subject: "AUBF Urinalysis - The Carter Center", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/Urinalysis - The Carter Center.pdf' },
        { subject: "AUBF ", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/urinalysisandbodyfluids-susanking-120820094542-phpapp02.pdf' },
        { subject: "AUBF Within you is power", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/Within you is power.pdf' },
        { subject: "AUBF S.K. Strasinger 6th ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/AUBF/AUBF, S.K. Strasinger 6th ed.pdf' }
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
