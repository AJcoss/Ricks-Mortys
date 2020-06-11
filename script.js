let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked

searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let userInput = document.querySelector("#input").value;
  
  let response = await fetch(`
https://rickandmortyapi.com/api/character/?name=${userInput}`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData (data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  //this one line of code below was the key to fixing - siegel
  let results = data.results
  document.querySelector("#content").innerHTML = 
    
    `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://coverfiles.alphacoders.com/875/thumb-87540.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/Arnqxhg.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08839083-23e0-4b7a-9925-1c044ef8a6bd/d99il9g-b8fd3f05-1614-4078-b6c9-4dc211527d11.png/v1/fill/w_1024,h_552,q_80,strp/i_m_mr__meeseeks__existence_is_pain_by_mathavious_d99il9g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NTIiLCJwYXRoIjoiXC9mXC8wODgzOTA4My0yM2UwLTRiN2EtOTkyNS0xYzA0NGVmOGE2YmRcL2Q5OWlsOWctYjhmZDNmMDUtMTYxNC00MDc4LWI2YzktNGRjMjExNTI3ZDExLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.RCiJPbsKItvyeTfV2gl5eTR7bjgm3biYHXPBRgjPPZg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="card offset-1 col-md-8 bg-dark mb-3" id="0" style="max-width: 540px;">
  <img src="${results[0].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title oh">${results[0].name}</h5>
<p class="card-text mee">ID: ${results[0].id}</p>
<p class="card-text mee"> Location: ${results[0].location.name}</p>
    <p class="card-text mee">Origin: ${results[0].origin.name}</p>
<p class="card-text mee"> Species: ${results[0].species}</p>
<p class="card-text mee"> Status: ${results[0].status}</p>

  </div>
</div>

<div class="card offset-1 col-md-8 bg-success mb-3" id="1" style="max-width: 540px;">
  <img src="${results[1].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title yeah">${results[1].name}</h5>
<p class="card-text mr">ID: ${results[1].id}</p>
<p class="card-text mr"> Location: ${results[1].location.name}</p>
    <p class="card-text mr">Origin: ${results[1].origin.name}</p>
<p class="card-text mr"> Species: ${results[1].species}</p>
<p class="card-text mr"> Status: ${results[1].status}</p>

  </div>
</div>

<div class="card offset-1 col-md-8 bg-dark mb-3" id="2" style="max-width: 540px;">
  <img src="${results[2].image}" class="card-img-top" alt="...">
  <div class="card-body ">
    <h5 class="card-title oh">${results[2].name}</h5>
<p class="card-text mee">ID: ${results[2].id}</p>
<p class="card-text mee"> Location: ${results[2].location.name}</p>
    <p class="card-text mee">Origin: ${results[2].origin.name}</p>
<p class="card-text mee"> Species: ${results[2].species}</p>
<p class="card-text mee"> Status: ${results[2].status}</p>
  </div>
</div>

<div class="card offset-1 col-md-8 bg-success mb-3" id="3" style="max-width: 540px;">
  <img src="${results[3].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title yeah">${results[3].name}</h5>
<p class="card-text mr">ID: ${results[3].id}</p>
<p class="card-text mr"> Location: ${results[3].location.name}</p>
    <p class="card-text mr">Origin: ${results[3].origin.name}</p>
<p class="card-text mr"> Species: ${results[3].species}</p>
<p class="card-text mr"> Status: ${results[3].status}</p>
  </div>
</div>

<div class="card offset-1 col-md-8 bg-dark mb-3" id="4" style="max-width: 540px;">
  <img src="${results[4].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title oh">${results[4].name}</h5>
<p class="card-text mee">ID: ${results[4].id}</p>
<p class="card-text mee"> Location: ${results[4].location.name}</p>
    <p class="card-text mee">Origin: ${results[4].origin.name}</p>
<p class="card-text mee"> Species: ${results[4].species}</p>
<p class="card-text mee"> Status: ${results[4].status}</p>
  </div>
</div>

<div class="card offset-1 col-md-8 bg-success mb-3" id="4" style="max-width: 540px;">
  <img src="${results[5].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title yeah">${results[5].name}</h5>
<p class="card-text mr">ID: ${results[5].id}</p>
<p class="card-text mr"> Location: ${results[5].location.name}</p>
    <p class="card-text mr">Origin: ${results[5].origin.name}</p>
<p class="card-text mr"> Species: ${results[5].species}</p>
<p class="card-text mr"> Status: ${results[5].status}</p>
  </div>
</div>`;
 }
 
