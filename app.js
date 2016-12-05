'use strict'

var pike = {
  minCustPH: 23,
  maxCustPH: 65,
  avgCookieSalePH: 6.3,
  randCustPH: function(){
    var random = Math.floor(Math.random() * (pike.maxCustPH - pike.minCustPH) + pike.minCustPH);
    return random;
  }
}
