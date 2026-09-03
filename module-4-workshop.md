# A weboldalon interakciók kialakítása (effektek, transzformációk, átmenetek kialakítása)

Már csak finomítások maradtak, amelyek a UI/UX élményhez adnak hozzá. Ilyen néhány interakció és effektek alkalmazás, például

- gombok és a linkeknél
- galéria képei, vagy kártyák megtekintésénél

## 1. lépés: Menüpontok finomítása

A Tailwind nem csak theme variánsokat használ, hanem state variánsokat, amelyek például linkek és gombok esetén egy-egy állapotot jelölhet, ilyen például a `hover:`,`active:` és a `focus:` variánsok.

A menüpontok esetén szeretnénk, haváltozna a menüpont betűszíne ha kurzorral fölé megyünk. 
Önálló feladat: Valósítsd meg custom property és Tailwind utility -val.

A Rólam menüpontra alkalmazd a `hover:bg-tura-brown-900 dark:hover:bg-tura-green-700 transition` formázásokat:

```html
<a href="#rolam" class="px-4 py-2 bg-tura-brown-800 dark:bg-green-600 hover:bg-tura-brown-900 dark:hover:bg-tura-green-700 transition text-white rounded-full ">Rólam</a>
```

## 2. lépés: Hero section - CTA gombok

A Fedezz fel útvonalak gomb háttérszínét szeretnénk sötétebbre állítani, ha fölé megyünk kurzorral, csak most az átmenetet szeretnénk ha 300ms alatt hajtódna végre ezért alkalmazd a `hover:bg-tura-green-700 transition duration-300` formázásokat.

```html
<a href="#utvonalak" class="px-10 py-4 bg-tura-green-600 text-white font-semibold rounded-lg text-lg shadow-lg hover:bg-tura-green-700 transition duration-300">
    Fedezz fel útvonalakat
</a>
```
A Mire van szükséged? gombra a megszokott formázásokon kívül még egy blur effektet is szeretnénk alkalmazni, ezt a `backdrop-blur-sm` osztály használatával éred el, hogy az áttetsző háttérszín mögötti háttérkép homályosabban szűrődik át a gombon.

```html
<a href="#felszereles"
    class="px-10 py-4 bg-white/10 text-white border border-white/30 font-semibold rounded-lg text-lg hover:bg-white/20 backdrop-blur-sm transition duration-300">
    Mire van szükséged?
</a>
```

## 3. lépés: Túrázás előnyei kártyák 

A túrázás előnyeihez tartozó kártyáknál szeretnénk egy kis interakciót belecsempészni, ezért mind a három kártya `<div>` elemére alkalmazd a `transform hover:-translate-y-2 transition duration-300` utility osztályokat.

Ennek hatására ha a kártya fölé megyünk kurzorral a kártya felfelé elmozdul és az átmenet 300ms alatt hajtódik végre.

```html
<div class="bg-white dark:bg-tura-green-700/50 p-8 rounded-2xl shadow-xl border border-border text-center transform hover:-translate-y-2 transition duration-300">
```

## 4. lépés: Túraútvonal kártyák

Ezeknél a kártyáknál egy "hover-zoom" effektet szeretnénk készíteni. Ez azt jelenti, hogy ha kurzorral a kártya fölé megyünk, akkor a kép növekedjen meg 5%-kal és az átmenet 300ms alatt hajtódjon végre.

Ehhez két helyen kell módosítanod a kártyákat:
- A kártya külső `<div>` elemére alkalmaznod kell a `group` utility osztályt.
- A kép osztályait bővítsd `transition-transform duration-300 group-hover:scale-105` osztályokkal.

```html
<div class="bg-card-bg rounded-2xl overflow-hidden shadow-lg border border-card-border group">
  <img src="/img/istallosko.jpg" alt="Istállós-kő" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
```

**Hogyan működik a hover-zoom:**

- `group` a külső `<div>`-en — ezt az elemet jelöli meg hover-kiváltóként
- `group-hover:scale-105` a `<img>` elemen — nagyítja a képet, amikor a szülőelemre mutatnak
- `overflow-hidden` a külső `<div>`-en — körülvágja a nagyított képet, hogy ne lógjon ki a kártya keretéből
- `overflow-hidden` nélkül a kép a kártyán *kívülre* méretezne és töröttnek látszana

A mentés után vidd az egeret a kártya fölé, hogy lásd a fotó zoomolását.

## 5. lépés: Felszerelés szekció - blur effekt

A felszerelések kártyáira alkalmazd a `backdrop-blur-sm` osztályt. 
Miért jó ez nekünk? A szekció hátterében két design elemet helyeztünk el, amelyek egyes eszközökön a kártyák mögé pozícionálódnak és a blur effekt használatával a képek mögött a háromszög határoló élei elmosódva jelennek meg. Így egy kicsit izgalmasabb megjelenést eredményezünk.

```html
<div class="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
```

## 6. lépés: Rólam szekció - gomb

A Lépj kapcsolatba gombnál hasonló formázásokat szeretnénk alkalmazni, mint a Rólam gombnál csak zöld színnel valósítjuk meg. Alkalmazd a `hover:bg-tura-green-700 dark:hover:bg-tura-brown-600/60 transition duration-300` utility osztályokat.

```html
<a href="mailto:info@vadonszava.hu" class="px-8 py-3 bg-tura-green-600 dark:bg-tura-brown-600 text-white font-semibold rounded-lg hover:bg-tura-green-700 dark:hover:bg-tura-brown-600/60 transition duration-300">
  Lépj kapcsolatba
</a>
```

## 7. lépés: Képgaléria

A galéria képeinek megtekintésénél szeretnénk alkalmazni a sepia effektet, ami "régi" képhatást eredményez. De ha rámegyünk egy képre kurzorral, akkor szeretnénk, ha ez a sepia effekt eltűnne a képről és a kép mérete 5%-kal legyen nagyobb. Az átmenet 1 másodperc alatt történjen meg.

Minden képre alkalmaznod kell a `sepia-100 scale-100 hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000` utility osztályokat. 
- A `sepia-100` és a `scale-100` jelenti a kép kiindulási állapotát.
- A `hover:sepia-0`, `hover:scale-105`, éa `hover:z-10` jelenti a kép hover állapotát. A legutolsó osztályt azért kell használnod, hogy a nagyított kép legyen legfelül ha esetleg összeérne vagy fedné valamelyik szomszédos képpel. Ami 5%-nál nem biztos hogy előfordul, de próbáld ki, hogy mi történik például `hover:scale-105` helyett `hover:scale-150` írnál.

```html
<img src="/images/gallery/gallery01.jpg" class="border border-white dark:border-tura-green-700 object-cover h-full sepia-100 scale-100 hover:sepia-0 hover:scale-105 hover:z-10 transition-all duration-1000" alt="Túrafotó 1"/>
```

## 8. lépés: Hírlevél szekció - input, button

Az input elem ha fókusz állapotba kerül a böngésző alapértelmezetten szokta jelezni egy külső kerettel mi ezt szeretnénk módosítani. De ezt a Tailwind árnyékkal valósítja meg és nem outline formázással. Helyezd el a következő osztályokat az input elemre: `focus:ring-2 focus:ring-tura-green-600 dark:focus:ring-tura-brown-200 outline-none`

```html
<input type="email" placeholder="Az e-mail címed" class=" bg-white grow px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-tura-green-600 dark:focus:ring-tura-brown-200 outline-none">
```

A Feliratkozó gomb háttérszíne hover állapotban legyen sötétebb (`hover:bg-tura-brown-900`), valamint a cursor alakja legyen a mutató ujj (`cursor-pointer`)

```html
<button type="submit" class="px-8 py-4 bg-tura-brown-800 hover:bg-tura-brown-900 text-white font-semibold rounded-full transition">
  Feliratkozom
</button>
```

## 9. lépés: Lábléc - Linkek, téma gombok

A linkek esetén a menüpontokhoz hasonlóan szeretnénk elérni.

Elkészültünk a weboldallal. Gratulálunk az eredményedhez!

