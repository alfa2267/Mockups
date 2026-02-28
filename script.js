// Mockup data - replace with your actual mockups
const mockups = [
    {
        id: 1,
        title: "Logo Design Concept",
        type: "2d",
        image: "mockups/2d/logo-concept.jpg",
        description: "Initial logo design concepts for brand identity"
    },
    {
        id: 2,
        title: "Product Packaging",
        type: "2d",
        image: "mockups/2d/packaging-design.jpg",
        description: "Packaging design for eco-friendly products"
    },
    {
        id: 3,
        title: "3D Product Model",
        type: "3d",
        image: "mockups/3d/product-model.jpg",
        description: "3D rendered product visualization"
    },
    {
        id: 4,
        title: "Interior Space Mockup",
        type: "3d",
        image: "mockups/3d/interior-space.jpg",
        description: "3D interior design visualization"
    }
];

// DOM elements
const mockupsGrid = document.getElementById('mockupsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderMockups('all');
    setupFilters();
});

// Render mockups based on filter
function renderMockups(filter) {
    mockupsGrid.innerHTML = '';
    
    const filteredMockups = filter === 'all' 
        ? mockups 
        : mockups.filter(mockup => mockup.type === filter);
    
    if (filteredMockups.length === 0) {
        mockupsGrid.innerHTML = '<div class="no-mockups">No mockups found for this category.</div>';
        return;
    }
    
    filteredMockups.forEach(mockup => {
        const card = createMockupCard(mockup);
        mockupsGrid.appendChild(card);
    });
}

// Create a mockup card element
function createMockupCard(mockup) {
    const card = document.createElement('div');
    card.className = 'mockup-card';
    card.innerHTML = `
        <img src="${mockup.image}" alt="${mockup.title}" class="mockup-image" 
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4='">
        <div class="mockup-info">
            <h3 class="mockup-title">${mockup.title}</h3>
            <span class="mockup-type type-${mockup.type}">${mockup.type.toUpperCase()}</span>
            <p class="mockup-description">${mockup.description}</p>
        </div>
    `;
    
    // Add click event for lightbox or detailed view
    card.addEventListener('click', () => {
        showMockupDetail(mockup);
    });
    
    return card;
}

// Setup filter buttons
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Render mockups with selected filter
            renderMockups(button.dataset.filter);
        });
    });
}

// Show mockup detail (you can expand this to a modal/lightbox)
function showMockupDetail(mockup) {
    console.log('Showing details for:', mockup.title);
    // You can implement a modal here to show larger images or more details
}

// Function to add new mockups dynamically
function addMockup(mockup) {
    mockups.push(mockup);
    renderMockups(document.querySelector('.filter-btn.active').dataset.filter);
}

// Function to load mockups from a JSON file (for future use)
async function loadMockupsFromFile(filePath) {
    try {
        const response = await fetch(filePath);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading mockups:', error);
        return [];
    }
}
