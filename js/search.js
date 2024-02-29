//Icke-föränderliga variabler som kopplas till element i HTML med liknande namn
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchButton = document.getElementById('searchButton');

//En icke-föränderlig variabel innehållandes en array med sökbara namn på planeter
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
//Sökfunktion
function search(query) {
    // Tömmer föregående sökresultat
    searchResults.innerHTML = '';

    // Filtrerar data baserat på sökterm
    const filteredData = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    // Visar filtrerade resultat
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const div = document.createElement('div');
            const link = document.createElement('a');
            link.textContent = ">> " + item + " <<";
            link.href = 'planets.html#' + item.toLowerCase();
            div.appendChild(link);
            searchResults.appendChild(div);
        });
    } else {
        // Visar ett meddelande om sökningen inte matchar någon himlakropp
        const message = document.createElement('div');
        message.textContent = 'Ingen himlakropp funnen!';
        message.style.color = 'white';
        message.style.marginTop = '10px';
        message.style.fontSize = '30px';
        searchResults.appendChild(message);
    }
}
// Funktion för att hantera sökningar
function handleSearch() {
    const query = searchInput.value.trim();
    if (query.length > 0) {
        search(query);
    } else {
        // Tömmer sökresultat om det inte finns någon sökterm
        searchResults.innerHTML = '';
    }
}
//Event listener som "lyssnar" efter klick och sätter igång funktionen
//"handleSearch" vid klick
searchButton.addEventListener('click', handleSearch);

//Event listener som "lyssnar" efter tryck på ENTER och sätter igång funktionen
//"handleSearch" vid tangenttryck
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});