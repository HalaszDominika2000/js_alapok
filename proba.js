console.log("hello")

/*adatszerkezetek*/
/*Vezérlő szerkezetek*/

/*változók deklarálása*/

var szoveg = "Virág" /*változók, meg lehet változtatni az értékük*/
let szoveg2 = "Madár" /*változók, meg lehet változtatni az értékük*/
const SZOVEG3 = "Élet értelme" /*nem lehet megváltoztatni az értékét*/
const SZAM = 42

szoveg2 = "repül"
/*hatókörben vannak különbségek láthatóságot jelölik*/

szoveg = "2"
console.log(typeof szoveg) /*megmondja milyen típus typeof*/
console.log(Number(szoveg) + 2) /*EZZEL ÍROK KI A KONZOLRA, Number kényszerítés*/
console.log(szoveg * 2)
szoveg2 = 12
console.log(typeof szoveg2)
let igeze = true
console.log(typeof igaze)

/*Összetett típusok az az lista*/
let lista = [] /*így deklarálom*/
console.log(typeof lista)
lista = [12, 23, 45]
console.log(lista.length, lista[0]) /*lista hosszát kiírom, hivatkozás[0]*/

/*Elágazás , első eleme páros e?*/
if (lista[0] % 2 === 0) { /*=== nem csak az értéket hanem a típust is összehasonlítja*/
    console.log("Páros")
} else {
    console.log("Páratlan")
}

if ("2" === 2) {
    console.log("Egyenlő")
} else {
    console.log("Nem egyenlő")
}

let hetnapja = 2
switch (hetnapja) {
    case 1:
        console.log("Hétfő")
        break;
    case 2:
        console.log("Kedd")
        break;
    case 3:
        console.log("Szerda")
        break;
    case 4:
        console.log("Csütörtök")
         break;

    default:
        console.log("Nem nap érték")
        break;
}

if (hetnapja === 1) {
    console.log("Hétfő")
} else if (hetnapja === 2) {
    console.log("Kedd") 
} else {
    console.log("Nem nap")
}

/* ciklusok*/
/*while előltesztelős*/

let i=0
whilw (i < lista.length) {
    /*console.log(i + ". elem " + lista[i])*/
    console.log(`${i+1}. elem ${lista[i]}`) /*altgr7*/
    i++
}

/*for ciklus*/

for (let index = 0; index < array.length; index++) {
    console.log(`${index+1}. elem ${lista[index]}`)
    
}

/* Eljárások és függvények az az metódusok*/

function listaBejarasFor() {

    for (let index = 0; index < array.length; index++) {
        console.log(`${index+1}. elem ${lista[index]}`)
        
    }
}

listaBejarasFor()

function hetNapja1(hetnapja) {
    let nap=""
    switch (hetnapja) {
        case 1:
            nap="Hétfő"
            break;
        case 2:
            nap="Kedd"
            break;
        case 3:
            nap="Szerda"
            break;
        case 4:
            nap="Csütörtök"
             break;
    
        default:
            nap="Nem nap érték"
            break;
    }
    return nap
}
let nap = hetNapja1(hetnapja)
console.log(`A hét ${hetnapja}. napja: ${nap}`) 