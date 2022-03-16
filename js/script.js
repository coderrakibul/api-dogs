const loadDogs = () => {
    fetch("https://api.thedogapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => displayDogs(data))
}
loadDogs();
const displayDogs = dogs => {
    const dogsOutput = document.getElementById("dogs-output");
    const fiftyDogs = dogs.slice(0, 50);
    for(const dog of fiftyDogs){
       const div = document.createElement("div");
       div.classList.add("col-lg-4");
        div.innerHTML = `
        <div class="card h-100">
          <img width="350px" height="300px" src="${dog.image.url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${dog.name}</h5>
            <p class="card-text">${dog.temperament}</p>
          </div>
        </div>
        `;
        dogsOutput.appendChild(div);
    }
}