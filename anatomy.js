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
        { subject: "ANAPHY", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/ANAPHY.pdf' },
        { subject: "ANAPHY NERVOUS SYSTEM", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/ANAPHY NERVOUS SYSTEM.pdf' },
        { subject: "Anatomy 1 - Quick Study (Others)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/others/Anatomy 1 - Quick Study.pdf' },
        { subject: "Anatomy 2 - Quick Study (Others)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/others/Anatomy 2 - Quick Study.pdf' },
        { subject: "Blood", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/9 Blood.pdf' },
        { subject: "Blood Vessels (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/BLOOD VESSELS.docx' },
        { subject: "Blood Vessels and Circulation (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/13-Blood-Vessels-and-Circulation.pdf' },
        { subject: "Cell Structures and Their Functions (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/2-Cell-Structures-and-Their-Functions-Powerpoint.pdf' },
        { subject: "Cell Structures and Their Functions (Prelims)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/prelims/2-Cell-Structures-and-Their-Functions-Powerpoint.pdf' },
        { subject: "Chapter 2 Cell (Prelims)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/prelims/chapter 2 cell.pdf' },
        { subject: "Dental Anatomy - Quick Study (Others)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/others/Dental Anatomy - Quick Study.pdf' },
        { subject: "Endocrine System", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/8 Endocrine System .pdf' },
        { subject: "Heart (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/HEART.docx' },
        { subject: "Human Anatomy and Physiology with Pathology (Others)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/others/Human Anatomy and Physiology with Pathology.pdf' },
        { subject: "Mascular (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/MASCULAR.docx' },
        { subject: "Muscular System (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/7-Muscular-System-Powerpoint.pdf' },
        { subject: "Nervous-System", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/Nervous-System.ppt' },
        { subject: "Nervous System", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/6 Nervous System.pdf' },
        { subject: "Principles of Anatomy and Physiology (Others)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/others/Principles_of_Anatomy_and_Physiology_14th_Edition_Tortora.pdf' },
        { subject: "REPRODUCTIVE SYSTEM REPORT BSMT 1A", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/REPRODUCTIVE SYSTEM REPORT BSMT 1A.pdf' },
        { subject: "Respiratory System (Group 3)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/Respiratory System (Group 3).pdf' },
        { subject: "Senses (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/Senses.docx' },
        { subject: "Senses (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/9-Senses.pdf' },
        { subject: "Skeletal System Bones and Joints (Midterms)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/midterms/6-Skeletal-System-Bones-and-Joints-Powerpoint.pdf' },
        { subject: "Surface Anatomy - Quick Study (Others)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/others/Surface Anatomy - Quick Study.pdf' },
        { subject: "Tissue Activity (Prelims)", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/prelims/ACTIVITY TISSUE.pdf' },
        { subject: "Urinary System and Fluid Balance", image: 'images/25.png', pdf: 'MED TECH/1ST YEAR MEDTECH/1ST SEM/ANATOMY/finals/14 Urinary System and Fluid Balance .pdf' }
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
