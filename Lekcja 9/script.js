const views = [
    {
        src : "1.jpg",
        title : "Zachód pod palmami",
    },
    {
        src : "2.jpg",
        title : "Widok z lotu ptaka",
    },
    {
        src : "3.jpg",
        title : "Mordor wersja Polska",
    }
];
let liczSlajd = 0; //zmienna którą wykorzystamy do zmiany obrazków

function showslide (numer) {
const titleField = document.querySelector(".tymczasowy");
titleField.innerHTML = views[numer].title;

const obrazek = document.querySelector(".content");
obrazek.innerHTML = "";    //Czyści poprzedni obrazek, ważne !!
const zdjecie = document.createElement("img");
zdjecie.src = "img/" + views[numer].src;
obrazek.append(zdjecie);
};

showslide(liczSlajd);
//Kliknięcie w lewą strzałkę
const leftArr = document.querySelector(".left");
leftArr.onclick = () => {zmianaSlajdu("lewa")};

//Kliknięcie w prawą strzałkę
const rightArr = document.querySelector(".right");
rightArr.onclick = () => {zmianaSlajdu("prawa"), zmianaTla(liczSlajd)};

//funkcja do zmiany obrazku
function zmianaSlajdu ( kierunek){
    if( kierunek == "lewa"){
        liczSlajd-- ; 
        if(liczSlajd<0) { liczSlajd = views.length-1;}}
    if(kierunek == "prawa"){
            liczSlajd++; 
        if(liczSlajd > views.length-1) { liczSlajd = 0; }
            }
        
     console.log(liczSlajd);
     showslide(liczSlajd);
        };

function zmianaTla (index){
    if(liczSlajd == 1){
        document.body.style.backgroundColor = "red";
    }
    else{ 
        if(liczSlajd == 2){
            document.body.style.backgroundColor = "yellow"; 
        }

        else{
            document.body.style.backgroundColor = "pink"; }
        }
}


