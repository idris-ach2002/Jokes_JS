//https://api.blablagues.net/?rub=blagues


const header = document.querySelector("#header");
const contenu = document.querySelector("#content");


function getJokes() {
fetch("https://api.blablagues.net/?rub=blagues")
.then((response) => response.json())
.then((donnee) => {
    const {content} = donnee.data; //destructuring donnee.data.content 

    header.textContent = content.text_head;

    contenu.textContent =  content.text.length == 0
    ? content.text_hidden : content.text;
});
}

getJokes();
//document.body.addEventListener("click", getJokes);
setInterval(getJokes, 3000);