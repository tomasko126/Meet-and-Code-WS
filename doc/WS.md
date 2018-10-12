# Základy Javascriptu

# Vlastnosti Javascriptu

- skriptovací jazyk
- najmä client-side
- objektovo orientovaný
- dynamicky typovaný
- automatická konverzia

# Syntax

- príkazy sú oddelené ;


## Premenné

- sú case-sensitive
- povolené znaky sú okrem čísla na začiatku znaky z Unicode

Deklarácia:

- tri typy premenných
- var, let, const
- defaultná hodnota je typu "undefined" - vysvetlíme neskôr

### var

- nastavenie hodnoty premennej je voliteľné
- function scope - scope k najbližšej deklarácii funkcie

```javascript
function cook() {

    if (true) {
        var foo;
    }

    -- premenná "foo" je tu dostupná
}
```

### let

- nastavenie hodnoty premennej je voliteľné
- redeklarácia => SyntaxError
- block scope

```javascript
function cook() {

    if (true) {
        let foo;
    }

    -- premenná "foo" NIE je dostupná/definovaná v tomto scope
}
```

### const

- nastavenie hodnoty premennej je povinné
- redeklarácia => SyntaxError
- priradenie inej hodnoty po prvom priradení => TypeError

```javascript
const PI = 3.141592;
}
```

- avšak zmena atribútov konštantého objektu je povolená

```javascript
const object = { key: "value"};
object.key = 1;

console.log(object.key); // 1
```

## Dátové typy

Primitívne:
boolean, null, undefined, number, string, symbol

Taktiež existujú objekty obalujúce primitívne dátové typy:
Boolean, Number, String, ...

### boolean

hodnoty: true, false

### null

- reprezentuje absenciu hodnoty
- use case: vrátenie null namiesto prázdneho pola/objektu vo funkcii

### undefined

- defaultná hodnota premennej, ktorej nebola priradená hodnota

### number 

```javascript
let desiatkoveCislo = 25;
let dvojkoveCislo = 0b01;
let sestnastkoveCislo = 0xC0;
let desatinneCislo = 89.256ô
desatinneCislo = 2.8e10;
```

### string

```javascript
const pozdrav = "Ahoj"; // mozne pouzivat aj single-quotes

console.log(`${pozdrav}`);
```

- je možné konvertovať string na číslo pomocou:
parseInt, parseFloat

```javascript
    let cislo = parseInt("34"); // 34
    cislo = parseInt("ab"); // NaN - Not a Number
```

- "" === false


# Dátové štruktúry

### Pole 

- `Array`
- deklarácia pola: `const pole = ["jablko", "hruška", "melón"]`
- prístup k i-temu prvku: `pole[0]` - vráti prvok "jablko"
- niektoré built-in metódy:

```javascript
const pole = ["jablko", "hruška", "melón"]

const upravenePole = pole.filter((ovocie) => ovocie.length > 5); // filter poľa

pole.length // vracia dĺžku pola
pole.push("banán"); // pridá prvok "banán" na koniec pola
pole.pop(); // odoberie z pola posledny prvok
pole.shift(); // odoberie prvý prvok z pola
pole.unshift("broskyňa"); // pridá prvok "broskyňa" na začiatok pola
pole.indexOf("broskyňa"); // vráti index itemu "broskyňa"

pole.splice(position, noOfRemovedItems); // zmaže z pola od indexu "position" počet prvkov vyjadrených ako noOfRemovedItems
```

### objekty

- `Object`
- deklarácia objektu: `const objekt = { key: "value"};`
- prístup k hodnote "key": `objekt.key`
- key/value data structure

```javascript
const objekt = { key: "value", osoba: { meno: "Tomáš", priezvisko: "GDPR" } };
objekt.key = 25;
objekt["key"]; // vráti hodnotu 25
objekt.osoba.meno; // vráti "Tomáš"

objekt.vek = "nepodstatný";
```

- niektoré built-in metódy:
```javascript
const osoba = { meno: "Tomáš", bydlisko: "Strahov" };

Object.keys(osoba); // ["meno", "bydlisko"]
Object.values(osoba); // ["Tomáš", "Strahov"]
Object.entries(osoba); // [ ["meno", "Tomáš"], ["bydlisko", "Strahov"]]

```

Object.prototype metódy:
Takéto metódy dedí každý objekt, možnosť override, resp. pridanie vlastnej prototype metódy

## Komentáre

```javascript
/* Jeden riadok
   Druhý riadok
*/
// Jednoriadkový komentár 
```

# Debug

- console.log(...) - vypíše do konzoly
- metóda info, warning ...

## Operátory

Porovnávacie: ==, !=, ===, !==, >, >= …
Aritmetické: +, -, /, *, **, ++, —, %
Logické: &&, ||, !
Bitové: &, |, ^, ~ f
Relačné: instanceof, in
Spread: ...
Ternárny: a ? b : c;

"== !== ===":

== - porovnávanie s konverziou

`9 == "9" // true`

=== - striktné porovnávanie, bez konverzie

`9 === "9" // false`

## Riadiace štruktúry

- if, if/else, if/else if/else
- switch
- do while, while do
- for, for in, for of
- try/catch

Riadenie cyklu:
- continue, break


# Funkcie

```javascript
function vynasob(x, y) {
    return x * y;
}

const vysledok = vynasob(2, 3); // 6 
```

- primitívne typy sa predávajú hodnotou
- objekty sa predávajú referenciou
- viď ukážku

- argumenty funkcie - uložené v "arguments" property

# Objekty pre dátové typy
- JS obsahuje built-in metódy a konštakty pre prácu s rôznymi objektami

## Date

```javascript
const now = Date.now(); // vráti počet ms od epochy (1.1.1970 00:00:00 UTC)

const today = new Date(); // volanie konštruktoru objektu (triedy) Date
today.getHours();
     .getMinutes();
     ...
```

## Math 

- obsahuje rôzne matematické metódy a konštanty

```javascript
Math.PI
Math.E 

Math.abs(), random(), round(x), floor(x), ceil(x)

```

## String

- obsahuje nasledujúce metódy instancie:

```javascript
replace(), split(), indexOf(), startsWith(), endsWith(), toLowerCase(), ...
```

## Map

- asociatívne pole: key/value
- `Object` vs Map:
    - v `Object`e môže byť kľúč iba String alebo symbol
    - built-in atribúty a metódy: size, get(key), has(key), clear(), keys(), values(), entries() ...
    - Mapa je iterable: for of

## Set 
- množina
- unikátnosť prvkov, bez duplicít (Array vs Set)
- obsahuje atribúty a metódy objektu Map

# JSON

- JavaScript Object Notation
- jednoduchý formát dát pre prenos dát
- jednoduchý na čítanie na zápis ako pre človeka, tak pre stroj
- open-source
- náhrada za XML

- využitie: prenos dát client-server, serializácia

- syntax:
    - podobná JS objektu
    - key: string
    - values: string, number, boolean, array, object, null

- built-in v JS!
- static metódy: parse a stringify

Sample:
```javascript
const jsObject = { meno: "Tomáš", oblubeneOvocie: "jablko" };

const jsonObject = JSON.stringify(jsObject); // "{\"meno\":\"Tomáš\",\"oblubeneOvocie\":\"jablko\"}"

const jsObjectOnceAgain = JSON.parse(jsonObject); // { meno: "Tomáš", oblubeneOvocie: "jablko" }
```

# Výnimky

- používa sa keyword "throw" a objekt `Error`
- chyby môžu byť rôzneho typu: SyntaxError, TypeError ...
- odchytávanie pomocou try/catch bloku

```javascript
function vydel(x, y) {
    if (y === 0) {
        throw new Error("Dividing by zero is not allowed!");
    }

    return x/y;
}

let vysledok;

try {
    vysledok = vydel(1/0);
} catch(e) {
    console.log(e.message);
}

```


# Triedy 
- JS je prototype-based
- avšak od ES2015 - syntactic sugar
- class, extends, super, get, set, constructor, static

```javascript
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new TypeError("Unable to create a direct instance of the Animal class!");
        }

        this.setName(name);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        if (!name) {
            throw new SyntaxError("Invalid name of the animal has been given!");
        }
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log("HAF");
    }

    static hasTwoEyes() {
        return true;
    }
}

const dog = new Dog("Dunčo");
dog.getName();
dog.makeSound();

Dog.hasTwoEyes();
```

## DOM
- rozhranie pre prácu s dokumentom (webstránka, HTML)
- hierarchická reprezentácia
- umožňuje čítanie a úpravu obsahu stránky
- objekt `window` a `document`
- časti webstránky sú potomkovia objektu `document`

- triedy `Node`, `Element` a `HTMLElement`

### Node
- atribúty:
childNodes, {first/last}Child
parent[Node/Element}
nodeName, nodeType
{previous/next}Sibling

- metódy:
{append/remove/replace}Child
insertBefore

### Element
- atribúty:
id, name, class{Name/List}, tagName
innerHTML, outerHTML

- metódy:
getElementById, getElementsByTagName, getElementsByClassName
hasAttribut{e/es}
{get/set/remove}Attribute
{add/remove}EventListener

## Events
- používajú sa hlavne pre spustenie rôznych akcíí, väčšinou na základe používateľského vstupu
- objekt `Event`
- atribúty: target, timeStamp, type, ...
- metódy: preventDefault ...

- Príklad:
```javascript
document.addEventListener("click", (event) => {
    console.log("Event: ", event);
    const colors = ["red", "blue", "green"];

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random()) * (max - min) + min;
    }

    document.body.style.backgroundColor = colors[getRandomArbitrary(0, 2)];
});

```


Vlastný event:
```javascript
const myEvent = new Event("myCustomEvent");
//const myEvent = new CustomEvent("myCustomEvent", { data: "something" })

function myEventHandler(event) {
    console.log(event);
}

document.addEventListener("myCustomEvent", myEventHandler);

document.dispatchEvent(myEvent);

```


### Zdroj
Mozilla Developer Network - https://developer.mozilla.org/en-US/docs/Web/JavaScript
JavaScript tutorial/reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript
Programováni v Javascriptě - https://gitlab.com/bi-pjs.1/tutorials