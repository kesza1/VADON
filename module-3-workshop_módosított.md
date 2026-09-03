# 3. modul - Workshop:  Dark mode

## A modul témakörei

**Cél:**

- Az oldal dark mód elkészítése
- A weboldalon interakciók kialakítása (effektek, transzformációk, átmenetek kialakítása)

**Kiindulópont:** A 2. modul workshop-jának megoldása 

---

## 1. feladat: Sötét mód

Ha minden tartalmi egységet sikerült elkészítened, akkor ideje a webodal dark módjával is foglalkoznod.

1. Mondd meg a Tailwindnek, hogyan érzékelje a sötét módot (egy sor a `style.css` fájlban).
2. Írd felül a szemantikus token értékeket, amikor a sötét mód aktív.

Ezután böngésző DevTools segítségével ellenőrizd, hogy működik-e — mielőtt bármilyen JavaScript kódot írnál.

### 5.1. lépés: Az `@custom-variant dark` hozzáadása a `style.css` fájlhoz

Nyisd meg a `src/style.css` fájlt. Add hozzá ezt a sort közvetlenül az `@import "tailwindcss"` után:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Ez a Tailwind CSS v4 deklarációja, amely működővé teszi a `dark:` előtagot. Azt mondja: "alkalmazd ezt a variánst, ha az elem maga, vagy bármelyik őse rendelkezik a `dark` osztállyal."

### 1.2. lépés: A `.dark {}` token felülírások hozzáadása

A `:root {}` blokk (világos mód alapértékei) után add hozzá a sötét mód felülírásokat:

```css
.dark {
  --color-bg:          black;
  --color-bg-tinted:   var(--color-tura-green-900);
  --color-nav-bg:      var(--color-tura-green-900);
  --color-card-bg:     var(--color-tura-brown-900);
  --color-heading:     var(--color-tura-brown-200);
  --color-text:        var(--color-gray-200);
  --color-border:      var(--color-tura-green-600);
  --color-card-border: var(--color-tura-brown-600);
  --color-tag-bg:      var(--color-tura-green-700);
  --color-tag-text:    var(--color-tura-green-100);
}
```

### 1.3. lépés: Tesztelés DevTools segítségével — még nincs szükség JavaScriptre

Nyisd meg a böngésző DevTools-t (F12), menj a **Vizsgáló** (Firefox) vagy **Elements** (Chrome) fülre, és keresd meg a `<html>` elemet. Kattints duplán a `class` attribútumára (jelenleg `scroll-smooth` van rajta) és add hozzá a `dark` értéket:

```html
<html class="scroll-smooth dark">
```

Nyomj Entert. Az oldal azonnal sötét módra vált — sötét háttér, világosabb szöveg, zöldes-sötét navigáció.

**Ez a szemantikus tokenek megtérülése.** A `bg-bg`, `text-heading`, `bg-card-bg` stb. osztályokat használó összes szekció automatikusan frissül. Még egyetlen `dark:` variánst sem írtál.

### 5.4. lépés: `dark:` téma variánsok hozzáadása a primitive tokenek esetén

A szemantikus tokenek az oldal nagy részét kezelik, de néhány elem primitív tokeneket, vagy utility színeket használ, amelyek nem váltanak automatikusan. Menj végig az oldalon szekciónként.

**Navigáció — logó és linkek:**

Keresd meg a navigáció logó linkjét és add hozzá a sötét mód variánsokat:

```html
<a href="#" class="flex items-center gap-2 text-2xl font-bold text-tura-green-700 dark:text-tura-green-100">
```

Keresd meg a "Szava" span elemet:

```html
<span>Vadon<span class="text-tura-brown-800 dark:text-tura-brown-200">Szava</span></span>
```

Keresd meg az asztali navigációs linkeket és add hozzá a `dark:text-gray-100` osztályt:

```html
<a href="#kezdolap" class="text-gray-600 dark:text-gray-100 font-medium">Kezdőlap</a>
```

Tedd ugyanezt az Útvonalak, Felszerelés és Galéria linkeknél is.

Keresd meg a "Rólam" gombot:

```html
<a href="#rolam"
  class="px-4 py-2 bg-tura-brown-800 dark:bg-green-600 text-white rounded-full">Rólam</a>
```

Kapcsold be/ki a `dark` osztályt a DevTools-ban — a navigációnak mindkét módban helyesen kell kinéznie.

**Előnyök kártyák:**

Minden fehér kártyához sötét mód variánsok szükségesek. Bővítsd a kártya külső `<div>` elemét a `dark:bg-tura-green-700/50` osztállyal:

```html
<div class="bg-white dark:bg-tura-green-700/50 p-8 rounded-2xl shadow-xl border border-border text-center">
```

Bővítsd az ikon kör `<div>` elemét a `dark:bg-tura-brown-600` osztállyal:

```html
<div class="w-16 h-16 bg-tura-green-600 dark:bg-tura-brown-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
```

Bővítsd a kártya címét, `<h3>` elemét a `dark:text-tura-brown-100` osztállyal:

```html
<h3 class="text-2xl font-semibold text-tura-brown-900 dark:text-tura-brown-100 mb-3">
```

Alkalmazd ugyanezt a három módosítást másik két kártyán is.

**Útvonalkártyák — nehézségi badge-k:**

A badge-k Tailwind piros/kék színeket használnak. Frissítsd a "Nehéz" badge-ket minden útvonalkártyán a `dark:bg-red-800` és `dark:text-red-200` osztályokkal.

```html
<span class="px-3 py-1 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-full text-xs font-medium">Nehéz</span>
```

Frissítsd a "Könnyű" badge-t a `dark:bg-blue-800` és `dark:text-blue-200` osztályokkal.

```html
<span class="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-xs font-medium">Könnyű</span>
```

**Felszerelés szekció:**

A sötétbarna háttér váltson sötétzöldre (`dark:bg-tura-green-900`):

```html
<section id="felszereles" class="py-24 bg-tura-brown-900 dark:bg-tura-green-900 text-white relative overflow-hidden">
```

**Galéria képek:**

A galéria képeinek fehér szegélye váltson zöldre (`dark:border-tura-green-700`).

Példa az 1. kép módosítására:

```html
<img src="/imgages/gallery/gallery01.jpg"
  class="border border-white dark:border-tura-green-700 object-cover h-full"
  alt="Túrafotó 1">
```

**Rólam szekció:**

"A történetem" feliratot bővítsd a `dark:text-tura-green-100` osztállyal, míg a CTA gombot a `dark:bg-tura-brown-600` osztállyal.

```html
<span class="text-tura-green-600 dark:text-tura-green-100 font-semibold mb-2 block">A történetem</span>
```

```html
<a href="mailto:info@vadonszava.hu"
  class="px-8 py-3 bg-tura-green-600 dark:bg-tura-brown-600 text-white font-semibold rounded-lg">
  Lépj kapcsolatba
</a>
```

**Hírlevél szekció:**

A hírlevél blokk `<div>` tárolóelem háttérszíne legyen fekete (`dark:bg-black`).

```html
<section class="py-20 bg-tura-green-100 dark:bg-black">
```

**Lábléc márkanév:**

A fejlécben található márkanévhez hasonlóan formázd a márkanevet. A linkre alkalmazd a `dark:text-tura-green-100`, valamint a span elemre a `dark:text-tura-brown-200` osztályt.

```html
 <a href="#" class="text-lg font-bold text-tura-green-700 dark:text-tura-green-100">
    <span>Vadon<span class="text-tura-brown-800 dark:text-tura-brown-200">Szava</span></span>
</a>
```

**Lábléc - témagombok háttere:**

A lábléc témagombjainak a háttere is feketére állítsd be.

```html
<button id="themeBtn" class="px-2 py-2 mt-2 rounded-2xl bg-gray-200 dark:bg-black">
```

### 1.5. lépés: A sötét mód CSS teljességének ellenőrzése

A DevTools-ban add hozzá és távolítsd el a `dark` osztályt a `<html>` elemen. Minden szekciót le kell görgetni és mindkét módban helyesen kell kinéznie.

---

## 2. feladat: Sötét mód váltás gombok segítségével (JavaScript)

Kezdetben a hold ikonra tedd rá a **hidden** osztályt.


A `src/main.js` fájl bővítése


```js
import './style.css'

const themeLightBtn = document.querySelector('#themeLightBtn');
const themeDarkBtn = document.querySelector('#themeDarkBtn');

themeDarkBtn.addEventListener("click", () => {
  document.documentElement.classList.add("dark");

  themeDarkBtn.classList.add("hidden");
  themeLightBtn.classList.remove("hidden");
});


themeLightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");

  themeLightBtn.classList.add("hidden");
  themeDarkBtn.classList.remove("hidden");
});
```

---

## 3. Feladat

A projektben a hamburger menü funkcionális működése nem valósult meg, mert az nem a Tailwind formázásokhoz kapcsolódik.
Készíts a `nav` elem után egy ideiglenes menüt:

```html
  <div id="hamburgerMenu" class="hidden md:hidden px-4 pb-4 pt-18 fixed w-full z-40 bg-white dark:bg-tura-green-900 border-b border-tura-brown-100">
    <a href="#kezdolap" class="block py-2 text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 font-medium transition">Kezdőlap</a>
    <a href="#utvonalak" class="block py-2 text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 font-medium transition">Útvonalak</a>
    <a href="#felszereles" class="block py-2 text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 font-medium transition">Felszerelés</a>
    <a href="#galeria" class="block py-2 text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 font-medium transition">Galéria</a>
    <a href="#rolam" class="block py-2 text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 font-medium transition">Rólam</a>
  </div>
```

A linkek formázásait ha szeretnéd oldd meg a navigáció menüpontjai alapján.

A hamburger menü gombjának állítsd be az id-ját `menuBtn`-re.

```html
<button class="text-gray-600 hover:text-tura-green-600 focus:outline-none cursor-pointer" id="menuBtn">
```

Az `src/main.js` fájlba illeszd be a következő kódot:

```js
const menuBtn = document.getElementById("menuBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

menuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hidden");
});
```
