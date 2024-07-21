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
        { subject: "ABC of Clinical Hematology-3rd Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/ABC of Clinical Hematology-3rd Ed.pdf' },
        { subject: "Atlas of Clinical Hematology, 6th ed (2004)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Atlas of Clinical Hematology, 6th ed (2004).pdf' },
        { subject: "Atlas of Hematology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Atlas of Hematology.pdf' },
        { subject: "Clinical Hematology - Theory and Practice 6E turgeon", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Clinical Hematology - Theory and Practice 6E turgeon.pdf' },
        { subject: "Clinical Hematology - Theory and Procedures (5th Ed)(gnv64)Turgeon", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Clinical Hematology - Theory and Procedures (5th Ed)(gnv64)Turgeon.pdf' },
        { subject: "Clinical Hematology - Steininger", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Clinical Hematology - Steininger.pdf' },
        { subject: "Clinical Hematology Atlas 5e", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Clinical Hematology Atlas 5e.pdf' },
        { subject: "Clinical Hematology Theory and Procedures by Mary Lou Turgeon", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Clinical Hematology Theory and Procedures by Mary Lou Turgeon.pdf' },
        { subject: "Clinical Hematology Theory and Procedures-5th Ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Clinical Hematology Theory and Procedures-5th Ed.pdf' },
        { subject: "Hema Barbara Brown 6th", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Hema Barbara Brown 6th.pdf' },
        { subject: "HEMA mini Atlas", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/HEMA mini Atlas.pdf' },
        { subject: "Hematology - Basic Principles & Practice - Hoffman 6th ed, 2013", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Hematology - Basic Principles _ Practice - Hoffman 6th ed, 2013.pdf' },
        { subject: "hematology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/hematology .pdf' },
        { subject: "Hematology Atlas Rodak 5th Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Hematology Atlas Rodak 5th Edition.pdf' },
        { subject: "Hematology Clinical Principles and Applications - Rodak (4th Ed.)", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Hematology Clinical Principles and Applications - Rodak (4th Ed.).pdf' },
        { subject: "Hematology Clinical Principles and Applications 4th [PDF][tahir99] VRG", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Hematology Clinical Principles and Applications 4th [PDF][tahir99] VRG.pdf' },
        { subject: "HEMATOLOGY FORMULAS", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/HEMATOLOGY FORMULAS.pdf' },
        { subject: "Hematology in Clinical Practice 5th Ed (LANGE)(Warning_Masbagay to sa Medicine mismo)pdf", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Hematology in Clinical Practice 5th Ed (LANGE)(Warning_Masbagay to sa Medicine mismo)pdf.pdf' },
        { subject: "hematology pictures", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/hematology pictures.pdf' },
        { subject: "Hematology Rodak 5th Edition", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Hematology Rodak 5th Edition.pdf' },
        { subject: "hematology summary", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/hematology summary.pptx' },
        { subject: "Hematology Turgeon", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Hematology Turgeon.pdf' },
        { subject: "HEMATOLOGY", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/HEMATOLOGY.pdf' },
        { subject: "medtech-reviewer", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/medtech-reviewer.docx' },
        { subject: "MTK Hematology", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/MTK Hematology.pdf' },
        { subject: "Phlebotomy Essentials by Ruth E. McCall", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Phlebotomy Essentials by Ruth E. McCall.pdf' },
        { subject: "Rapid Review of Hematology.1E.2014", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Rapid Review of Hematology.1E.2014.pdf' },
        { subject: "RBC ANOMALIES AND INCLUSIONS with their Associated Diseases", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/RBC ANOMALIES AND INCLUSIONS with their Associated Diseases.pdf' },
        { subject: "Rodak - Hematology Clinical Principles and Applications, 5th ed", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Rodak - Hematology Clinical Principles and Applications, 5th ed.pdf' },
        { subject: "RODAK_S 6TH EDITION", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/RODAK_S 6TH EDITION.pdf' },
        { subject: "Structure and Function of the Hematologic System", image: 'images/25.png', pdf: 'MED TECH/3RD YEAR MEDTECH/1ST SEM/HEMATOLOGY 1/Structure and Function of the Hematologic System.pdf' }
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
