'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var shopObjects = [];
var locationData = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minData = [23, 3, 11, 20, 2];
var maxData = [65, 24, 38, 38, 16];
var avgData = [6.3, 1.2, 3.7, 2.3, 4.6];

function Store(shop, min, max, avg) {
  this.shopName = shop;
  this.minCustPH = min;
  this.maxCustPH = max;
  this.avgCookieSalePD = avg;
  this.totalCookiesSold = 0;
  this.cookiesSoldHourlyData = [];

  this.randCustPH = function(){
    var random = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH + 1) + this.minCustPH);
    return random;
  }

  this.avgSoldPH = function(){
    for(var i = 0; i < hours.length; i++){
      var temp = Math.floor(this.randCustPH() * this.avgCookieSalePD);
      this.cookiesSoldHourlyData.push(temp);
      this.totalCookiesSold += temp;
    }
  }

  this.makeRow = function(){
    this.avgSoldPH();
    var trEl = document.createElement('tr');
    var place = document.getElementById('storeTable')
    place.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.shopName;
    trEl.appendChild(tdEl);
    for(var i = 0; i < hours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldHourlyData[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesSold;
    trEl.appendChild(tdEl);
  }
}


// function tableCreate(){
//   var thEl = document.createElement('th');
//   var place = document.getElementById('storeTable');
//   place.appendChild(thEl);
//   for(var i = 0; i < hours.length; i++){
//     thEl = document.createElement('th');
//     thEl.textContent = hours[i];
//     place.appendChild(thEl);
//   }
// }

function arrayShops(){
  for(var i = 0; i < locationData.length; i++){
    var temp = new Store(locationData[i], minData[i], maxData[i], avgData[i]);
    shopObjects.push(temp);
    temp.makeRow();
  }
}
