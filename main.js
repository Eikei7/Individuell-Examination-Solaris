//Variabler som innehåller API-URL och API-nyckel
const apiUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
const authToken = 'solaris-2ngXkR6S02ijFrTP';

//En Fetch API med metoden GET som ordnar ihop URL:en tillsammans 
//med API-nyckeln som angivits
fetch(apiUrl, {
  method:"GET", 
  headers: {"x-zocom":authToken}
})
.then(response => {

  //OM något problem uppstår längs vägen, visas detta meddelande
  if (!response.ok) {
    throw new Error('Fel vid nätverkssvar');
  }
  return response.json();
})
//Här hanteras all info från bodies-arrayen som återfanns i API:et
.then(data => {
  const bodies = data.bodies;

  //En variabel skapas där alla positioner i arrayen får ett namn istället för nummer
  const planetIds = ['sun','merc', 'venus', 'earth', 'mars', 'jup', 'sat', 'uran', 'nep'];

  //En Foreach-loop som itererar över arrayen av planeter
  planetIds.forEach((id, index) => {

    //Inuti slingan hämtar den planetobjektet som motsvarar 
    //det aktuella indexet från "bodies"-arrayen och tilldelar det till body-variabeln.
    const body = bodies[index];
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
        <li><strong><a href="index.html">Tillbaka till planetsök</a><strong></li>
      </ul>
    `;
    //Raden nedanför sätter innerHTML-egenskaperna av HTML-elementet med ID:et 
    //info-${id} till den dynamiskt generade HTML-strängen som lagrats i HTML-variabeln
    document.getElementById(`info-${id}`).innerHTML = html;
  });
  //Loggar funnen data ur API:et till konsollen för att visa vad den innehåller
  console.log(data);
 })
//Ett felmeddelande visas i konsollen om problem uppstår när fetch ska användas
.catch(error => {
  console.error('Ett problem uppstod när "Fetch" skulle hämtas:', error);
});
