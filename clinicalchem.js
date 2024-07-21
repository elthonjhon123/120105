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
        { subject: "Bishop - Clinical Chemistry - Principles, Techniques, Correlations, 8th ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Bishop - Clinical Chemistry - Principles, Techniques, Correlations, 8th ed.pdf' },
        { subject: "Burtis, et. al., - Tietz Fundamentals of Clinical Chemistry, 6th ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Burtis, et. al., - Tietz Fundamentals of Clinical Chemistry, 6th ed.pdf' },
        { subject: "CC Bishop 6th Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/CC Bishop 6th Edition.pdf' },
        { subject: "CC Bishop 7th Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/CC Bishop 7th Edition.pdf' },
        { subject: "CC Reference Values", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/CC Reference Values.pdf' },
        { subject: "CC Tietz", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/CC Tietz.pdf' },
        { subject: "CLINICAL CHEMISTRY - A LABORATORY PERSPECTIVE by Arneson and Brickell", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/CLINICAL CHEMISTRY - A LABORATORY PERSPECTIVE by Arneson and Brickell.pdf' },
        { subject: "Clinical Chemistry - Principles, Techniques, Correlations, 7E (2013)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Clinical Chemistry - Principles, Techniques, Correlations, 7E (2013).pdf' },
        { subject: "Clinical Chemistry - Rodriguez", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Clinical Chemistry - Rodriguez.pdf' },
        { subject: "clinical chemistry 6th edition bishop", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/clinical chemistry 6th edition bishop.pdf' },
        { subject: "Clinical-Chemistry-Carbohydrates-LEC-AND-LAB", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Clinical-Chemistry-Carbohydrates-LEC-AND-LAB.pdf' },
        { subject: "CLINICAL-CHEMISTRY-COVER-TO-COVER", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/CLINICAL-CHEMISTRY-COVER-TO-COVER.docm' },
        { subject: "Clinical-Chemistry-Lipids-LEC-AND-LAB", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Clinical-Chemistry-Lipids-LEC-AND-LAB.pdf' },
        { subject: "Clinical-Chemistry-Reviewer MTR", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Clinical-Chemistry-Reviewer MTR.pdf' },
        { subject: "Handbook of Instrumental Techniques for Analytical Chemistry", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Handbook of Instrumental Techniques for Analytical Chemistry.pdf' },
        { subject: "PIPER - CLINICAL-CHEMISTRY (1)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/PIPER - CLINICAL-CHEMISTRY (1).pdf' },
        { subject: "Tietz Fundamentals of Clinical Chemistry-6th Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Tietz Fundamentals of Clinical Chemistry-6th Ed.pdf' },
        { subject: "Tumor-Markers", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Tumor-Markers.pdf' },
        { subject: "Transes/CC Reference Values", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Transes/CC Reference Values.pdf' },
        { subject: "Transes/Clinical Chemistry - Rodriguez", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Transes/Clinical Chemistry - Rodriguez.pdf' },
        { subject: "Transes/Clinical-Chemistry-Carbohydrates-LEC-AND-LAB", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Transes/Clinical-Chemistry-Carbohydrates-LEC-AND-LAB.pdf' },
        { subject: "Transes/CLINICAL-CHEMISTRY-COVER-TO-COVER", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Transes/CLINICAL-CHEMISTRY-COVER-TO-COVER.docm' },
        { subject: "Transes/Clinical-Chemistry-Lipids-LEC-AND-LAB", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Transes/Clinical-Chemistry-Lipids-LEC-AND-LAB.pdf' },
        { subject: "Transes/Clinical-Chemistry-Reviewer MTR", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Transes/Clinical-Chemistry-Reviewer MTR.pdf' },
        { subject: "Transes/PIPER - CLINICAL-CHEMISTRY (1)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Transes/PIPER - CLINICAL-CHEMISTRY (1).pdf' },
        { subject: "Transes/Tumor-Markers", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/CLINICAL CHEMISTRY/Transes/Tumor-Markers.pdf' },
        { subject: "GENERAL CHEMISTRY/Chemistry-LR", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/GENERAL CHEMISTRY/Chemistry-LR.pdf' },
        { subject: "GENERAL CHEMISTRY/General Chemistry Principles, Patterns, and Applications (1)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/GENERAL CHEMISTRY/General Chemistry Principles, Patterns, and Applications (1).pdf' },
        { subject: "GENERAL CHEMISTRY/General Chemistry Principles, Patterns, and Applications", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL CHEMISTRY 1/GENERAL CHEMISTRY/General Chemistry Principles, Patterns, and Applications.pdf' }
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
