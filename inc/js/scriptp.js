const tablicaObraz = [
    {
        src : "1",
        ht : "50",
        cs : "0",
        javscr : "0",
        ops : "Tabelka oraz komunikat infomujący o ciasteczkach wykonane z pomocą Bootstrap.",
},
{
    src : "2",
    ht : "60",
    cs : "50",
    javscr : "50",
    ops : "Zmiana koloru tła oraz zdjęcia na stronie po kliknięciu w strzałkę w prawo lub strzałkę w lewo, skonstruowana z wykorzystaniem JavaScript.",
},
{
    src : "3",
        ht : "40",
        cs : "30",
        javscr : "40",
        ops : "Zmiana gifa oraz jego opisu po kliknięciu w niego - stworzona przy wykorzystaniu JavaScript.",
},
{
    src : "4",
        ht : "40",
        cs : "50",
        javscr : "0",
        ops : "Strona ze zdjęciami umieszczony z wykorzystaniem display:flex, ponadto wykorzystano fontello do stworzenia ikonek popularnych serwisów.",
},
{
src : "5",
ht : "60",
cs : "60",
javscr : "0",
ops : "Strona z wysuwanym menu z wykorzystaniem position:sticky, odpowiednie znaczniki semantyczne, dodanie komentarza oraz ikonek popularnych serwisów.",
}
]

let index = 0;

function zmianaKolumny (numer){
    const Kolumna1 = document.querySelector("#k1"); 
    Kolumna1.style.height = tablicaObraz[numer].ht + "px";
    const Kolumna2 = document.querySelector("#k2"); 
    Kolumna2.style.height = tablicaObraz[numer].cs + "px";
    const Kolumna3 = document.querySelector("#k3"); 
    Kolumna3.style.height = tablicaObraz[numer].javscr + "px";

    const tekstProjektu = document.querySelector(".tekstpr");
    tekstProjektu.innerHTML = tablicaObraz[numer].ops;
}

const obraz1 = document.querySelector("#projekt1");
const obraz2 = document.querySelector("#projekt2");
const obraz3 = document.querySelector("#projekt3");
const obraz4 = document.querySelector("#projekt4");
const obraz5 = document.querySelector("#projekt5");


obraz1.onmouseover = () => {zmianaKolumny(0)};  
obraz1.onclick = function(){zmianaKolumny(0)};
obraz2.onmouseover = () => {zmianaKolumny(1)}; 
obraz2.onclick = function(){zmianaKolumny(1)};
obraz3.onmouseover = () => {zmianaKolumny(2)}; 
obraz3.onclick = function(){zmianaKolumny(2)};
obraz4.onmouseover = () => {zmianaKolumny(3)}; 
obraz4.onclick = function(){zmianaKolumny(3)};
obraz5.onmouseover = () => {zmianaKolumny(4)};
obraz5.onclick = function(){zmianaKolumny(5)}; 
/*

obraz1.onmouseout = () => { brakWykresu()};

function brakWykresu(){
const Wykres = document.querySelector("aside");
Wykres.style.zIndex="-1";
}
function wiekszyObrazek(rozmiar){
    ["Obraz" + tablicaObraz[rozmiar].src].style.height = 30vh;
    ["Obraz" + tablicaObraz[rozmiar].src].style.width = 30vw;
    }
    */