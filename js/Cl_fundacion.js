export default class Cl_fundacion {
    constructor(cD, cB, tS) {
        this.cantD = cD;
        this.cantBs = cB;
        this.tasaC = tS;
        this.mayor = 0.0;
        this.auxNom = "";
    }
    get cantD() {
        return this._cantD;
    }
    set cantD(cD) {
        this._cantD = cD;
    }
    get cantBs() {
        return this._cantBs;
    }
    set cantBs(cB) {
        this._cantBs = cB;
    }
    get tasaC() {
        return this._tasaC;
    }
    set tasaC(tS) {
        this._tasaC = tS;
    }
    procesarDonantes(don){
        this.cantD += don.pagoD;
        this.cantBs += don.pagoBs;  
        if(don.pagoTD() > this.mayor){
            this.auxNom = don.nom;
            this.mayor = don.pagoTD();
        }
    }
    totalF(){
        return (this.cantD * this.tasaC) + this.cantBs;
    }
    totalFd(){
        return this.totalF() / this.tasaC;
    }
    mostarMayor(){
        return this.auxNom;
    }
}