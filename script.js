document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const imageSources = [
       
        'images/1.jpg', 
        'images/25.png',
       
        'images/2.jpg', 
        'images/25.png',
        
        'images/3.jpg', 
        'images/25.png',
        
        'images/4.png', 
        'images/25.png',
      
        'images/5.png', 
        'images/25.png',
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
        


        { subject: "Biochemistry for Med Lab Science", image: 'images/25.png', link: 'biochem.html' },
        { subject: "Principles & Strategies of Teaching in Med Lab Science", image: 'images/25.png', link: 'psthe.html' },
        { subject: "Cytogenetics", image: 'images/25.png', link: 'cyto.html' },
        { subject: "Laboratory Management", image: 'images/25.png', link: 'lab man.html' },
       
        { subject: "Pharmacology", image: 'images/25.png', link: 'pharma.html' },
        { subject: "Community & Public Health for Med Lab Science", image: 'images/25.png', link: 'publichealth.html' },
        { subject: "Biostatistics & Epidemiology", image: 'images/25.png', link: 'biostatepi.html' },
      
        { subject: "Clinical Chemistry ", image: 'images/25.png', link: 'clinicalchem.html' },
        { subject: "Clinical Bacteriology", image: 'images/25.png', link: 'bacte.html' },
        { subject: "Human Histology", image: 'images/25.png', link: 'histology.html' },
        { subject: "Clinical Parasitology", image: 'images/25.png', link: 'parasitology.html' },
        { subject: "Analysis of Urine and Body Fluids", image: 'images/25.png', link: 'aubf.html' },
        { subject: "Hematology ", image: 'images/25.png', link: 'hema.html' },
       
        { subject: "Immunology & Serology", image: 'images/25.png', link: 'immunosero.html' },
        { subject: "Immunohematology", image: 'images/25.png', link: 'bb.html' },
        { subject: "Mycology and Virology", image: 'images/25.png', link: 'mycoviro.html' },
        { subject: "Endocrinology, Toxicology and Drug Testing", image: 'images/25.png', link: 'subject52.html' },
      
        


        { subject: "Human Anatomy & Physiology with Pathophysiology", image: 'images/25.png', link: 'anatomy.html' },

        
      

    ];  

    const cardsGrid = document.querySelector('.cards-grid');

    cardContents.forEach(content => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardLink = document.createElement('a');
        cardLink.href = content.link;

        const cardImage = document.createElement('img');
        cardImage.src = content.image;
        cardImage.alt = content.subject; // Use subject as alt text
        cardLink.appendChild(cardImage);

        const cardTitle = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.textContent = content.subject; // Use subject as title text
        titleLink.href = content.link;
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
