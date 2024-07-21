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
        { subject: "AABB Technical Manual 15th Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/AABB TECHNICAL MANUAL 15th ed.pdf' },
        { subject: "AABB Technical Manual 18th Ed 2014", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/AABB Technical Manual 18th Ed 2014.pdf' },
        { subject: "Basic Applied Concepts of Blood Banking and Transfusion Practices by Paula R Howard", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/Basic Applied Concepts of Blood Banking and Transfusion Practices by Paula R Howard.pdf' },
        { subject: "BB Harmening 6th Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/BB Harmmening 6th Edition.pdf' },
        { subject: "Blood Banking and Transfusion Medicine - Basic Principles and Practice 2nd Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/Blood Banking and Transfusion Medicine - Basic Principles and Practice 2nd ed - C. Hillyer, et al., (Churchill-Livingstone, 2007) BBS.pdf' },
        { subject: "Blood Banking Questions", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/Blood-Banking-Questions.pdf' },
        { subject: "Guidelines on Assessing Donor Suitability for Blood Donation", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/Guidelines on Assessing Donor Suitability for Blood Donation Textbook.pdf' },
        { subject: "Harmening - Modern Blood Banking and Transfusion 7th Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/Harmening - Modern Blood Banking and Transfusion 7th Ed.pdf' },
        { subject: "Harmening 5th Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/Harmening 5th.pdf' },
        { subject: "Harmening 6th Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/HARMENING 6TH.pdf' },
        { subject: "Harmening 7th Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/HARMENING 7TH.pdf' },
        { subject: "Immunization", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/immunization .pdf' },
        { subject: "Immunology and Serology in Laboratory Medicine 5e", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/immunology-serology-in-laboratory-medicine-5e.pdf' },
        { subject: "Modern Blood Banking and Transfusion", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/modern blood banking and transfusion .pdf' },
        { subject: "Modern Blood Banking Transfusion Practices - Harmening", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/Modern Blood Banking Transfusion Practices - Harmening, Denise M..pdf' },
        { subject: "Must Know Immunohematology Blood Banking", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOHEMATOLOGY/Must2Know  Immunohematology Blood Banking.pdf' }
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
