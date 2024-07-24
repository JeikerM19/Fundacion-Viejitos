import Cl_donantes from "./Cl_donantes.js";
import Cl_fundacion from "./Cl_fundacion.js";

let fun = new Cl_fundacion(0, 0, 40);
let don1 = new Cl_donantes("Sofia", 10, 80, fun.tasaC);
let don2 = new Cl_donantes("Mateo", 0, 600, fun.tasaC);
let don3 = new Cl_donantes("Elena", 50, 0, fun.tasaC);
let don4 = new Cl_donantes("David", 20, 100, fun.tasaC);

fun.procesarDonantes(don1);
fun.procesarDonantes(don2);
fun.procesarDonantes(don3);
fun.procesarDonantes(don4);

let salida = document.getElementById("Salida");
salida.innerHTML +=  don1.nom + " aporta " + don1.pagoTD() + " (" + don1.pagoTBs() + ")" + "<br>" + don2.nom + " aporta " + don2.pagoTD() + "(" + don2.pagoTBs() + ")" + "<br>" + don3.nom + " aporta " + don3.pagoTD() + "(" + don3.pagoTBs() + ")" + "<br>" + don4.nom + " aporta " + don4.pagoTD() + "(" + don4.pagoTBs() + ")";
salida.innerHTML += "<br><br> En total se recaudaron " + fun.totalF() + "(" + fun.totalFd() + ")" + "<br> El mejor donador fue: " + fun.mostarMayor();