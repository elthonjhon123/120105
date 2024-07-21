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
        { subject: "B & S Diagnostic Micro", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/B_&_S_Diagnostic_Micro.pdf' },
        { subject: "Bacteria Pictures", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Bacteria Pictures.pdf' },
        { subject: "Bailey and Scott's Diagnostic Microbiology - 12th Ed", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Bailey and Scott_s Diagnostic Microbiology-12th Ed.pdf' },
        { subject: "Bailey and Scott's Microbiology 13th Edition", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Bailey and Scott_s Microbiology 13th Edition.pdf' },
        { subject: "Bailey Scott Diagnostic Microbiology 15th edition", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Bailey Scott Diagnostic Microbiology 15th edition.pdf' },
        { subject: "Bailey Scott's Diagnostic Microbiology 13th Ed", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Bailey Scott_s Diagnostic Microbiolog13th Ed.pdf' },
        { subject: "Bailey Scott's Diagnostic Microbiology 14th Ed", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Bailey Scott_s Diagnostic Microbiolog14th Ed.pdf' },
        { subject: "Bailey & Scott's Diagnostic Microbiology 15th edition", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Bailey_&_Scott_s_Diagnostic_Microbiology_15th_edition.pdf' },
        { subject: "Basic Laboratory Procedures in Clinical Bacteriology, 2nd ed", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Basic Laboratory Procedures in Clinical Bacteriology, 2nd ed.pdf' },
        { subject: "Clinical Microbiology Made Ridiculously Simple", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Clinical Microbiology Made Ridiculously Simple.pdf' },
        { subject: "delost", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/delost.pdf' },
        { subject: "Diagnostic Microbiology Mahon 5th Edition", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Diagnostic  Microbiology Mahon 5th Edition.pdf' },
        { subject: "Illustrated Dictionary in Microbiology", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Illustrated Dictionary in Microbiology.pdf' },
        { subject: "Jawetz, Melnick & Adelberg's Medical Microbiology 26th Ed. (2013)", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Jawetz, Melnick _ Adelberg_s Medical Microbiology 26th Ed. (2013).pdf' },
        { subject: "Jawetz's Medical Microbiology Twenty-Fifth Edition LANGE Basic Science", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Jawetz_s_Medical_Microbiology__Twenty_Fifth_Edition__LANGE_Basic_Science_.pdf' },
        { subject: "Laboratory Training and Procedures - Bacteriological Techniques (sputum smear)", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Laboratory Training and Procedures - Bacteriological Techniques (sputum smear).pdf' },
        { subject: "Medical Bacteriology", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Medical Bacteriology.pdf' },
        { subject: "Medical Microbiology Twenty-Fifth Edition LANGE Basic Science", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Medical_Microbiology__Twenty_Fifth_Edition__LANGE_Basic_Science.pdf' },
        { subject: "medicalbacteriology", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/medicalbacteriology.pdf' },
        { subject: "Micro handouts 2023 additional", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Micro handouts 2023 additional.pdf' },
        { subject: "Microbiology Prescott", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Microbiology Prescott.pdf' },
        { subject: "Microbiology-Bacteriolog-Lab-Practicals-1", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Microbiology-Bacteriolog-Lab-Practicals-1 .pdf' },
        { subject: "Micro-day1", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Micro-day1.pdf' },
        { subject: "Micro-day2", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Micro-day2.pdf' },
        { subject: "Pathogenic Bacteria", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Pathogenic Bacteria.pdf' },
        { subject: "PPRE MICRO HANDOUTS", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/PPRE MICRO HANDOUTS.pdf' },
        { subject: "Pre Micro Handouts", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Pre Micro Handouts.pdf' },
        { subject: "Sketchy Micro Flashcards", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Sketchy Micro Flashcards.pdf' },
        { subject: "SketchyMicroPharmPathBreakdown", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/SketchyMicroPharmPathBreakdown.xlsx' },
        { subject: "Textbook of Diagnostic Microbiology - Mahon (4th Ed.)", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Textbook of Diagnostic Microbiology - Mahon (4th Ed.).pdf' },
        { subject: "Textbook of Diagnostic Microbiology 6th Ed (Mahon, Lehman)", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Textbook of Diagnostic Microbiology 6th Ed (Mahon, Lehman).pdf' },
        { subject: "Textbook of Microbiology & Immunology", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Textbook of Microbiology _ Immunology .pdf' },
        { subject: "Textbook of Diagnostic Microbiology Mahon 5th Edition 2014", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Textbook of Diagnostic Microbiology Mahon 5th Edition 2014.pdf' },
        { subject: "Diagnostic Microbiology Mahon 5th Edition", image: 'images/25.png', pdf: 'MED TECH/MED TECH/3RD YEAR MEDTECH/1ST SEM/CLINICAL BACTERIOLOGY/Diagnostic_Microbiology_Mahon_5th_Edition.pdf' }
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
