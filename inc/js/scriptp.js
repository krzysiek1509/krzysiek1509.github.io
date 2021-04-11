const tablicaObraz = [
    {
        src : "1",
        ht : "50",
        cs : "50",
        javscr : "0",
        ops : "Tabelka oraz komunikat infomujący o ciasteczkach wykonane z pomocą Bootstrap",
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


obraz1.onmouseover = () => {zmianaKolumny(0)}; 
obraz2.onmouseover = () => {zmianaKolumny(1)}; 
obraz3.onmouseover = () => {zmianaKolumny(2)}; 
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