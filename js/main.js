// Variabler för det nya API:et
const apiUrl = 'https://f8ufn9jq34.execute-api.eu-north-1.amazonaws.com/dev/planets';
const apiKey = 'zWg7HJvZHg2szrmD28yT65Gq1ZOyIWI26lBdeCQh';

// Soldata (eftersom den inte finns i API:et)
const sunData = {
  id: 0,
  type: 'star',
  name: 'Solen',
  latinName: 'Sol',
  rotation: 27,
  circumference: 4379000,
  temp: {
    day: 5778,
    night: 5778
  },
  distance: 0,
  orbitalPeriod: 0,
  desc: 'Solen är stjärnan i centrum av vårt solsystem. Den är en nästan perfekt sfär av het plasma och genererar ett magnetfält genom sin dynamoprocess. Solen utgör cirka 99,86% av solsystemets massa.',
  moons: []
};

// Hämta planetdata från API:et
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
    // Förbereda data med solen och planeter
    const bodies = [sunData, ...planets];
    
    // Mappning mellan svenska namn och element-ID
    const planetMapping = {
      'Merkurius': 'merc',
      'Venus': 'venus',
      'Jorden': 'earth',
      'Mars': 'mars',
      'Jupiter': 'jup',
      'Saturnus': 'sat',
      'Uranus': 'uran',
      'Neptunus': 'nep',
      'Solen': 'sun'
    };

    // Uppdatera UI för alla himlakroppar
    bodies.forEach(body => {
      // Hitta rätt element-ID baserat på kroppsnamn
      const elementId = planetMapping[body.name];
      
      if (elementId) {
        // Skapa HTML-innehåll för himlakroppen
        let html = `
          <h1 class="title" style="text-transform: uppercase;">${body.name}</h1>
          <h3>${body.latinName}</h3>
          <p>${body.desc}</p>
          <ul>
            <li><strong>Dygn runt egen axel:</strong> ${body.rotation}</li>
            <li><strong>Avstånd från solen:</strong> ${body.distance} km</li>
            <li><strong>Omkrets:</strong> ${body.circumference} km</li>
            <li><strong>Temperatur dag:</strong> ${body.temp.day} grader</li>
            <li><strong>Temperatur natt:</strong> ${body.temp.night} grader</li>
        `;
        
        // Lägg till information om månar om det finns
        if (body.moons && body.moons.length > 0) {
          html += `<li><strong>Antal månar:</strong> ${body.moons.length}</li>`;
          html += `<li><strong>Månar:</strong> ${body.moons.map(moon => moon.name).join(', ')}</li>`;
        }
        
        html += `  <li><strong><a href="index.html">Tillbaka till planetsök</a><strong></li>
          </ul>
        `;
        
        // Uppdatera elementet med informationen
        document.getElementById(`info-${elementId}`).innerHTML = html;
      }
    });

    // Hantera anchor-länk om någon planet är specificerad i URL:en
    handleAnchorLink(bodies, planetMapping);
    
    // Logga data för felsökning
    console.log('Planetdata laddad:', bodies);
  })
  .catch(error => {
    console.error('Ett problem uppstod när data skulle hämtas:', error);
    // Visa ett enkelt felmeddelande på sidan
    document.body.innerHTML += `
      <div style="color: red; background: #300; padding: 20px; margin: 20px; border-radius: 5px;">
        <h2>Ett fel uppstod</h2>
        <p>${error.message}</p>
      </div>
    `;
  });

// Funktion för att hantera anchor-länkar i URL:en (#merkurius, #venus, etc.)
function handleAnchorLink(bodies, mapping) {
  // Kontrollera om det finns en anchor i URL:en
  if (window.location.hash) {
    // Ta bort # från anchor-namnet
    const planetName = window.location.hash.substring(1);
    
    // Om det är ett giltigt planetnamn, skrolla till det elementet
    const planetElement = document.getElementById(planetName);
    if (planetElement) {
      // Skrolla till elementet med lite fördröjning för att säkerställa att sidans innehåll är laddat
      setTimeout(() => {
        planetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}