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
    let html = ``
    const solen = data.bodies[0].name
  console.log(data.bodies[0].type, solen);
  html += `<h1>${solen}</h1>`
  document.getElementById("text2").innerHTML = html;
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});


