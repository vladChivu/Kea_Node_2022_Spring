console.log("The answers to life universe and everything.");

fetch("/amountoffavoriteanimals")
.then(response => response.json())
.then(result => {
    const favoriteAnimalsParagraph = document.getElementById("favorite-animals-amount");
    favoriteAnimalsParagraph.innerText = result.data;
});