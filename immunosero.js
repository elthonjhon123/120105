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
        { subject: "Elements of the Immune System and their Roles in Defense", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/Transes/Elements of the Immune System and their Roles in Defense.pdf' },
        { subject: "Immune System Sample", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/Transes/Immune_System_Sample.pdf' },
        { subject: "MTK Immunohematology Blood Banking", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/Transes/MTK Immunohematology Blood Banking.pdf' },
        { subject: "PPRE-ImmunoSero (1)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/Transes/PPRE-ImmunoSero (1).pdf' },
        { subject: "Immunoserology by Steven", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/immunoserology  by steven .pdf' },
        { subject: "Basic Immunology - Functions and Disorders of the Immune System - 4th Edition (2012)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Basic Immunology - Functions and Disorders of the Immune System - 4th Edition (2012).pdf' },
        { subject: "Laboratory Immunology and Serology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Bryant, Neville - Laboratory Immunology and Serology  .pdf' },
        { subject: "Cellular and Molecular Immunology 7th Edition - Abbas", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Cellular and Molecular Immunology 7th Edition - Abbas.pdf' },
        { subject: "Clinical Immunology and Serology - A Laboratory Perspective (2017)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Christine Dorresteyn Stevens, Linda E. Miller - Clinical Immunology and Serology - A Laboratory Perspective-F.A. Davis Company (2017).pdf' },
        { subject: "Clinical Immunology and Serology - A Laboratory Perspective (2009)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Christine Dorresteyn Stevens-Clinical Immunology and Serology_ A Laboratory Perspective, Third Edition (2009).pdf' },
        { subject: "Clinical Immunology - Principles and Practice", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Clinical-Immunology-Principles-and-Practice.pdf' },
        { subject: "Essentials of Clinical Immunology, 6E", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Essentials of Clinical Immunology, 6E- Chapel, Haeney, Misbah & Snowden.pdf' },
        { subject: "Fundamental Immunology 5", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Fundamental Immunology 5.pdf' },
        { subject: "Immunology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Immunology .pdf' },
        { subject: "Immunology and Serology by Turgeon 6th Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/IMMUNOLOGY AND SEROLOGY by TURGEON 6th ed.pdf' },
        { subject: "Immunology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/IMMUNOLOGY.pdf' },
        { subject: "Immunology: Self and Non-self", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Immunology_Self-and-Non-self-from-a-Phenomenological-Point-of-View.pdf' },
        { subject: "IS Stevens 3rd Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/IS Stevens 3rd Edition.pdf' },
        { subject: "IS Turgeon 5th Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/IS Turgeon 5th Edition.pdf' },
        { subject: "Kuby Immunology 6th Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/kuby-immunology-6th-edition.pdf' },
        { subject: "LN Immuno Serology Final", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/ln_imm_serology_final.pdf' },
        { subject: "Immunology and Serology in Laboratory Medicine (2013)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Mary Louise Turgeon - Immunology and Serology in Laboratory Medicine (2013, Mosby (Elsevier)).pdf' },
        { subject: "MTK Immunohematology Blood Banking", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/MTK Immunohematology Blood Banking.pdf' },
        { subject: "PPRE-ImmunoSero (1)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/PPRE-ImmunoSero (1).pdf' },
        { subject: "PRE-ImmunoSero", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/PRE-ImmunoSero.pdf' },
        { subject: "STEVENS 4TH ED", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/STEVENS 4TH ED.pdf' },
        { subject: "STEVENS 4th", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/STEVENS 4th.pdf' },
        { subject: "STEVENS 5th", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/STEVENS 5th.pdf' },
        { subject: "Turgeon - Immunology & Serology in Laboratory Medicine, 5th ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/2ND SEM/IMMUNOLOGY & SEROLOGY/IMMUNOLOGY/Turgeon - Immunology _ Serology in Laboratory Medicine, 5th ed.pdf' }
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
