const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const searchButton = document.getElementById('searchButton');

const data = [
    'Merkurius',
    'Venus',
    'Jorden',
    'Mars',
    'Jupiter',
    'Saturnus',
    'Uranus',
    'Neptunus',
    'Solen'
];
function search(query) {
    // Clear previous results
    searchResults.innerHTML = '';

    // Filter data based on query
    const filteredData = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    // Display filtered results
    filteredData.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item;
        link.href = 'planets.html#' + item.toLowerCase(); // Assuming you want to link to an anchor
        li.appendChild(link);
        searchResults.appendChild(li);
    });

    // Show the search results container
    searchResultsContainer.style.display = 'block';
}

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query.length > 0) {
        search(query);
    } else {
        // Clear search results if query is empty
        searchResults.innerHTML = '';
        // Hide the search results container
        searchResultsContainer.style.display = 'none';
    }
});