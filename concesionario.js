const autos = require("./autos");

const concesionaria = {
  autos: autos,

  buscarAuto: function (patente) {
    for ( let auto of autos) {
    if(auto.patente == patente){
     return auto}
}
return null
 }


}