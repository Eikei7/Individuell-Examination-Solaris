// Icke-föränderliga variabler som kopplas till element i HTML med liknande namn
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchButton = document.getElementById('searchButton');

// API-information
const apiUrl = 'https://f8ufn9jq34.execute-api.eu-north-1.amazonaws.com/dev/planets';
const apiKey = 'zWg7HJvZHg2szrmD28yT65Gq1ZOyIWI26lBdeCQh';

// Lägg till soldata eftersom den inte finns i API:et
const sunData = {
  id: 0,
  type: 'star',
  name: 'Solen',
  latinName: 'Sol'
};

// Variabel för att lagra planetdata från API:et
let planetData = [];

// Hämta planetdata från API när sidan laddas
fetchPlanetData();

// Funktion för att hämta planetdata från API:et
function fetchPlanetData() {
  fetch(apiUrl, {
    method: "GET",
    headers: { "x-api-key": apiKey }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Fel vid nätverkssvar: ' + response.status);
      }
      return response.json();
    })
    .then(planets => {
      // Kombinera solen med planeterna
      planetData = [sunData, ...planets];
      console.log('Planetdata laddad:', planetData);
    })
    .catch(error => {
      console.error('Ett problem uppstod när data skulle hämtas:', error);
      // Fallback till statisk lista om API-anropet misslyckas
      planetData = [
        { name: 'Solen' },
        { name: 'Merkurius' },
        { name: 'Venus' },
        { name: 'Jorden' },
        { name: 'Mars' },
        { name: 'Jupiter' },
        { name: 'Saturnus' },
        { name: 'Uranus' },
        { name: 'Neptunus' }
      ];
    });
}

// Sökfunktion
function search(query) {
  // Tömmer föregående sökresultat
  searchResults.innerHTML = '';

  // Filtrerar data baserat på sökterm
  const filteredData = planetData.filter(planet => 
    planet.name.toLowerCase().includes(query.toLowerCase()) || 
    (planet.latinName && planet.latinName.toLowerCase().includes(query.toLowerCase()))
  );

  // Visar filtrerade resultat
  if (filteredData.length > 0) {
    filteredData.forEach(planet => {
      const div = document.createElement('div');
      const link = document.createElement('a');
      
      // Konvertera planetnamn till ID för URL
      const planetId = planet.name.toLowerCase();
      
      link.textContent = ">> " + planet.name + " <<";
      link.href = 'planets.html#' + planetId;
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

// Event listener som "lyssnar" efter klick och sätter igång funktionen
// "handleSearch" vid klick
searchButton.addEventListener('click', handleSearch);

// Event listener som "lyssnar" efter tryck på ENTER och sätter igång funktionen
// "handleSearch" vid tangenttryck
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});