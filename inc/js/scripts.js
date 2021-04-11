const obrazek1 = document.querySelector(".ikona1");
obrazek1.onclick = () => {kolumna1(1)};

function kolumna1 (numer){
    const kl1 = document.querySelector(".s1");
    kl1.style.opacity = numer;
};
const obrazek2 = document.querySelector(".ikona2");
obrazek2.onclick = () => {kolumna2(1)};

function kolumna2 (numer){
    const kl2 = document.querySelector(".s2");
    kl2.style.opacity = numer;
};
const obrazek3 = document.querySelector(".ikona3");
obrazek3.onclick = () => {kolumna3(1)};

function kolumna3 (numer){
    const kl3 = document.querySelector(".s3");
    kl3.style.opacity = numer;
};