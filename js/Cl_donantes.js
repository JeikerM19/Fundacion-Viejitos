export default class Cl_donantes {
    constructor(n, pD, pB, tC) {
        this.nom = n;
        this.pagoD = pD;
        this.pagoBs = pB;
        this.tasaCambio = tC;
    }
    get nom() {
        return this._nom;
    }
    set nom(n) {
        this._nom = n;
    }

    get pagoD() {
        return this._pagoD;
    }
    set pagoD(pD) {
        this._pagoD = pD;
    }

    get pagoBs() {
        return this._pagoBs;
    }
    set pagoBs(pB) {
        this._pagoBs = pB;
    }

    get tasaCambio() {
        return this._tasaCambio;
    }
    set tasaCambio(tC) {
        this._tasaCambio = tC;
    }
    cambioBs(){
        return this.pagoBs/this.tasaCambio;
    }
    cambioD(){
        return this.pagoD * this.tasaCambio;
    }
    pagoTBs(){
        return this.pagoBs + this.cambioD();
    }
    pagoTD(){
        return this.pagoD + this.cambioBs();
    }


}