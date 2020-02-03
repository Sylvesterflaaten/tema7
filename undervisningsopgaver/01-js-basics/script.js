let længde = 3;
let bredde = 5;
let areal = længde * bredde;

let resultat;


/*
let resultat = `Længden er ${længde} meter og bredden er ${bredde} meter. Arealet er ${areal}`;
console.log(resultat);*/


if (areal < 100) {
    resultat = "Arealet er for lille";
}

if (areal >= 100 && areal < 200) {
    resultat = "Arealet er okay";
}

if (areal >= 200) {
    resultat = "Arealet er for stort";
}

console.log(resultat);
