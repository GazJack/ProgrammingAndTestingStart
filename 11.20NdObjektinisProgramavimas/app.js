console.log('021/app.js');

// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis);
    }
}

const kibiras1 = new Kibiras1();
kibiras1.prideti1Akmeni();
kibiras1.pridetiDaugAkmenu(5);
kibiras1.prideti1Akmeni();
kibiras1.kiekPririnktaAkmenu();

// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.



class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(pinigas) {
        if (pinigas <= 2) {
            this.metaliniaiPinigai += pinigas;
        } else {
            this.popieriniaiPinigai += pinigas;
        }
    }

    skaiciuoti() {
        console.log('Popieriniu: ' + this.popieriniaiPinigai + ', metaliniu: ' + this.metaliniaiPinigai, 'pinigų suma: ' + (this.popieriniaiPinigai + this.metaliniaiPinigai));
    }
}

const pinigine = new Pinigine();
pinigine.ideti(1);
pinigine.ideti(2);
pinigine.ideti(5);

pinigine.skaiciuoti();

class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius) {
        // const liko = Math.max(this.keleiviuSkaicius - keleiviuSkaicius, 0);
        // this.keleiviuSkaicius = liko;
        if (this.keleiviuSkaicius >= keleiviuSkaicius) {
            this.keleiviuSkaicius -= keleiviuSkaicius;
        } else {
            throw new Error('Gintare, tiek keleivių nėra');
        }
    }

    vaziuoja() {
        console.log('Troleibusu keleiviu skaicius: ' + this.keleiviuSkaicius);
    }

}

// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

const troleibusas = new Troleibusas();
troleibusas.ilipa(5);
troleibusas.ilipa(5);
// troleibusas.islipa(33);

troleibusas.vaziuoja();

console.clear();


class TV {

    static programos = ['TV3', 'LRT', 'TV6', 'TV1', 'Animal planet'];

    static zinute = 'niekas dar nieko nera pasake';

    static pati = this; // self
    
    static rasytiZinute(zinute) {
        this.pati.zinute = zinute;
    }

    static pridetiPrograma(programa) {
        this.programos.push(programa);
    }

    constructor(savininkas) {
        this.savininkas = savininkas;
        this.kanalas = 1;
        this.ijungta = false;
    }

    rasytiZinute(zinute) {
        this.constructor.rasytiZinute(zinute);
        // this.constructor.zinute = zinute;
    }

    skaitytiZinute() {
        console.log(this.constructor.pati.zinute);
    }

    pakeistiKanala(kanalas) {
        if (this.ijungta) {
            this.kanalas = kanalas;
        }
    }

    ijungti() {
        this.ijungta = true;
    }

    isjungti() {
        this.ijungta = false;
    }

    info() {
        console.log('Savininkas: ' + this.savininkas + ', kanalas: ' + this.constructor.programos[this.kanalas - 1]);
    }
}

class TVSony extends TV {

    constructor(savininkas) {
        super(savininkas);
        this.model = 'Sony';
    }

    zaistiZaidima() {
        console.log('Žaidžia žaidimą');
    }

}

class TVSamsung extends TV {

    constructor(savininkas) {
        super(savininkas);
        this.model = 'Samsung';
    }

}




const tv1 = new TVSamsung('Petras');
const tv2 = new TVSony('Marytė');
const tv3 = new TVSony('Bebras');

const naujosProgramos = ['TV3', 'LRT', 'TV6', 'TV1', 'Discovery'];

TV.programos = naujosProgramos;

TV.pridetiPrograma('Child TV');


tv1.ijungti();
tv1.pakeistiKanala(6);
tv1.info();
tv1.rasytiZinute('Labas rytas');

tv2.ijungti();
tv2.pakeistiKanala(5);
tv2.info();
tv2.zaistiZaidima();

tv3.ijungti();
tv3.pakeistiKanala(5);
tv3.info();
tv3.skaitytiZinute();

const tv4 = new TVSamsung('Jonas');


tv4.ijungti();
tv4.pakeistiKanala(5);
tv4.info();
tv4.skaitytiZinute();