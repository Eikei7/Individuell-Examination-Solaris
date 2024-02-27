const apiUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';
const authToken = 'solaris-2ngXkR6S02ijFrTP';

fetch(apiUrl, {
  method:"GET", 
    headers: {"x-zocom":authToken}
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  const sun = data.bodies[0];
  const mercury = data.bodies[1];
  const venus = data.bodies[2];
  const earth = data.bodies[3];
  const mars = data.bodies[4];
  const jupiter = data.bodies[5];
  const saturn = data.bodies[6];
  const uranus = data.bodies[7];
  const neptune = data.bodies[8];

  let mercHtml = `
    <h1>${mercury.name}</h1>
    
      <p>${mercury.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${mercury.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${mercury.rotation}</li>
        <li><strong>Avstånd från solen:</strong> ${mercury.distance} km</li>
        <li><strong>Omkrets:</strong> ${mercury.circumference} km</li>
      </ul>
    
  `;
  document.getElementById("info-merc").innerHTML = mercHtml;

  let venusHtml = `
    <h1>${venus.name}</h1>
    <div>
      <p>${venus.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${venus.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${venus.rotation}</li>
        <li><strong>Avstånd från solen:</strong> ${venus.distance} km</li>
        <li><strong>Omkrets:</strong> ${venus.circumference} km</li>
      </ul>
    </div>
  `;
  document.getElementById("info-venus").innerHTML = venusHtml;

  let earthHtml = `
    <h1>${earth.name}</h1>
    <div>
      <p>${earth.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${earth.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${earth.rotation}</li>
        <li><strong>Avstånd från solen:</strong> ${earth.distance} km</li>
        <li><strong>Omkrets:</strong> ${earth.circumference} km</li>
      </ul>
    </div>
  `;
  document.getElementById("info-earth").innerHTML = earthHtml;

  let marsHtml = `
    <h1>${mars.name}</h1>
    <div>
      <p>${mars.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${mars.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${mars.rotation}</li>
        <li><strong>Avstånd från solen:</strong> ${mars.distance} km</li>
        <li><strong>Omkrets:</strong> ${mars.circumference} km</li>
      </ul>
    </div>
  `;
  document.getElementById("info-mars").innerHTML = marsHtml;

  let jupiterHtml = `
    <h1>${jupiter.name}</h1>
    <div>
      <p>${jupiter.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${jupiter.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${jupiter.rotation}</li>
        <li><strong>Avstånd från solen:</strong> ${jupiter.distance} km</li>
        <li><strong>Omkrets:</strong> ${jupiter.circumference} km</li>
      </ul>
    </div>
  `;
  document.getElementById("info-jup").innerHTML = jupiterHtml;

  let saturnHtml = `
    <h1>${saturn.name}</h1>
    <div>
      <p>${saturn.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${saturn.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${saturn.rotation}</li>
        <li><strong>Avstånd från solen:</strong> ${saturn.distance} km</li>
        <li><strong>Omkrets:</strong> ${saturn.circumference} km</li>
      </ul>
    </div>
  `;
  document.getElementById("info-sat").innerHTML = saturnHtml;

  let uranusHtml = `
    <h1>${uranus.name}</h1>
    <div>
      <p>${uranus.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${uranus.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${uranus.rotation}</li>
        <li><strong>Avstånd från solen:</strong> ${uranus.distance} km</li>
        <li><strong>Omkrets:</strong> ${uranus.circumference} km</li>
      </ul>
    </div>
  `;
  document.getElementById("info-uran").innerHTML = uranusHtml;

  let neptuneHtml = `
    <h1>${neptune.name}</h1>
    <div>
      <p>${neptune.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${neptune.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${neptune.rotation}</li>
        <li><strong>Avstånd från solen:</strong> ${neptune.distance} km</li>
        <li><strong>Omkrets:</strong> ${neptune.circumference} km</li>
      </ul>
    </div>
  `;
  document.getElementById("info-nep").innerHTML = neptuneHtml;

  let sunHtml = `
    <h1>${sun.name}</h1>
      <p>${sun.desc}</p>
      <ul>
        <li><strong>Namn på Latin:</strong> ${sun.latinName}</li>
        <li><strong>Dygn runt egen axel:</strong> ${sun.rotation}</li>
        <li><strong>Omkrets:</strong> ${sun.circumference} km</li>
      </ul>
  `;
  document.getElementById("info-sun").innerHTML = sunHtml;

  console.log(data);
})

.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});


