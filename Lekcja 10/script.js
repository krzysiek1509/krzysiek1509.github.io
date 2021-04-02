const chopekInfo =[
    {
        src : "1.gif",
        opis : "Gada",
    },
    {
        src : "2.gif",
        opis : "Intro",
    },
    {
        src : "3.gif",
        opis : "Majta nogami",
    },
    {
        src : "4.gif",
        opis : "Odwrót wprost",
    },
    {
        src : "5.gif",
        opis : "Siada",
    },
    {
        src : "6.gif",
        opis : "Wstaje",
    }
];
let index = 1;

function wstawObrazek (numer){
    const obrazek = document.querySelector(".displayGif");
    obrazek.innerHTML = "";

    const zdjecie = document.createElement("img");
    zdjecie.src = "img/" + chopekInfo[numer].src ;
    obrazek.append(zdjecie);

    const opisObrazka = document.querySelector(".descGif");
    opisObrazka.innerHTML = chopekInfo[numer].opis ;
}

wstawObrazek(index);

const klikObrazek = document.querySelector(".displayGif");
klikObrazek.onclick = () => { zmianaObrazka ("klik")};

function zmianaObrazka(x){
    if( x  == "klik"){
        index++;
        if( index > chopekInfo.length - 1){ index=1;}
    }
wstawObrazek(index);
};



