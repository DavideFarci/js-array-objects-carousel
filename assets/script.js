/*
Quando l'utente preme uno dei bottoni, la classe active passa da un'immagine all'altra 
*/
const arrImages = [
    `assets/img/01.jpg`,
    `assets/img/02.jpg`,
    `assets/img/03.jpg`,
    `assets/img/04.jpg`,
    `assets/img/05.jpg`,
];

const containerHighlighted = document.querySelector(".highlighted");
const containerThumbs = document.querySelector(".thumbs")

for (let i = 0; i < arrImages.length; i++) {
    containerHighlighted.innerHTML += `<img src="${arrImages[i]}" alt="" class="${i == 0 ? "active" : ""}">`;

    containerThumbs.innerHTML += `<img src="${arrImages[i]}" alt="" class="${i == 0 ? "active" : ""}">`;
}

// seleziono le immagini nell'html
const listHighlighted = document.querySelectorAll(".highlighted img");

//seleziono le miniature
const listThumbs = document.querySelectorAll(".thumbs img");

//selziono i bottoni
const btnPrev = document.querySelector(".btn-up");
const btnNext = document.querySelector(".btn-down");


// definisco la variabile che rappresenta lo stato attuale del carosello
// cioè l'indice dell'immagine attiva
let activeIndex = 0;

btnNext.addEventListener("click",
    function() {
        listHighlighted[activeIndex].classList.remove("active");
        listThumbs[activeIndex].classList.remove("active");
        activeIndex++;
        if (activeIndex >= listHighlighted.length) {
            activeIndex = 0;
        }
    listHighlighted[activeIndex].classList.add("active");
    listThumbs[activeIndex].classList.add("active");
});

btnPrev.addEventListener("click",
function() {
    listHighlighted[activeIndex].classList.remove("active");
    listThumbs[activeIndex].classList.remove("active");
    activeIndex--;
    if (activeIndex < 0) {
        //il meno uno nella riga 44 serve perchè la lunghezza dell'array è 5 ma l'ultimo elemento ha indice 4, diversamente restituirebbe indefined.
        activeIndex = listHighlighted.length -1;
    }
    listHighlighted[activeIndex].classList.add("active");
    listThumbs[activeIndex].classList.add("active");
});

for (let i = 0; i < listThumbs.length; i++) {
    listThumbs[i].addEventListener("click", 
        function() {
            listHighlighted[activeIndex].classList.remove("active");
            listThumbs[activeIndex].classList.remove("active");
            // console.log("cliccato la miniatura in posizione " + i);
            activeIndex = i;
            listHighlighted[activeIndex].classList.add("active");
            listThumbs[activeIndex].classList.add("active");
        }
    )
};

