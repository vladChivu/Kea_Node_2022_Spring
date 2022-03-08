console.log("rrRRRrrrrRRRAaaaaaaAAwwwwWWWWw");

fetch("/calculatecooldinosaurs")
.then(response => response.json())
.then(result => {
    const favoriteDinosaurAmount = document.getElementById("cool-dinosaurs");

    favoriteDinosaurAmount.innerText = result.data;
});
