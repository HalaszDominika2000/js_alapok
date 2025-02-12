/* 1. termék:
neve, ára, db, leírás
objektum - kulcs érték párok
{
nev:"Cicagolyó",
ar: 1234,
db: 12,
leiras: " cica számára készült puha labda"
}
10 termék - lista*/

let termekLista=[
{
    nev:"Cicagolyó",
    ar: 1234,
    db: 12,
    leiras: " cica számára készült puha labda"
    },
    {
    nev:"Egérfogó",
    ar: 2346,
    db: 25,
    leiras: " egereket foghatunk vele"
    },
    {
    nev:"Kutyaház",
    ar: 21234,
    db: 123,
    leiras: " Fából készült közepes termetű kutyák számára"
    }
]

console.log(termekLista[0])
console.log(termekLista[0].nev)
console.log(typeof termekLista[0])

/* Írj függvényeket!
0. Hány féle termék van? -lista hossza 
1. Összesen hány termék van a raktáron? -db értékeket kell összeadni
2. Mennyi a termékek átlagára? -összegzés
3. Mi a legdrágáb termék neve? -maximumkiválasztás
*/

/* 4 függvény visszatérési értékkel!*/

function hanyfeleTermek() {
    return termekLista.length
}
let termekekSzama=hanyfeleTermek()
console.log(`Ennyi féle termék van: ${termekekSzama}`)
