const autos = require("./autos");

const concesionaria = {
  autos: autos,

  buscarAuto: function (patente) {
    for ( let auto of autos) {
    if(auto.patente == patente){
     return auto}
}
return null
    },

  venderAuto: function (patente) {
    auto = this.buscarAuto(patente);  
      auto.vendido = true;
      
    
  },

autosParaLaVenta: function () {
    const autoParaVender = autos.filter(function (auto) {
      return auto.vendido == false;
    });
    return autoParaVender;
  
},

autos0KM: function () {
    const autoCeroKM = this.autosParaLaVenta().filter( (auto) => {
    return auto.km <= 100})
      
       return autoCeroKM;
    
  },

  listaDeVentas: function () {
    const precios = [];
    autos.forEach(function (auto) {
      if (auto.vendido == true) {
        return precios.push(auto.precio);
      }
    });
    return precios;
  },
  totalDeVentas: function () {
    const sumatoria = this.listaDeVentas().reduce(function (acum, num) {
      return acum + num;
    }, 0);

    return sumatoria;
  },

  puedeComprar: function (auto,persona) {
    return (
      (auto.precio / auto.cuotas) < persona.capacidadDePagoEnCuotas &&
      auto.precio < persona.capacidadDePagoTotal
    );
  },
  autosQuePuedeComprar(persona) {
    autosQPuede = autos.filter((auto) => this.puedeComprar(auto, persona))
   return autosQPuede
}

}