'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var shopObjects = [];
var locationData = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minData = [23, 3, 11, 20, 2];
var maxData = [65, 24, 38, 38, 16];
var avgData = [6.3, 1.2, 3.7, 2.3, 4.6]; // for all these arrays positions match their data across.
var rowData = [2, 3, 4, 5, 6]
var shopsForm = document.getElementById('shops');
var table = document.getElementById('storeTable');


function Store(shop, min, max, avg, rowId) {
  this.shopName = shop;
  this.minCustPH = min;
  this.maxCustPH = max;
  this.avgCookieSalePD = avg;
  this.totalCookiesSold = 0;
  this.cookiesSoldHourlyData = [];
  this.rowId = rowId;

  this.randCustPH = function(){
    var random = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH + 1) + this.minCustPH);
    return random;
  }

  this.avgSoldPH = function(){ //adds the random data to the array
    for(var i = 0; i < hours.length; i++){
      var temp = Math.ceil(this.randCustPH() * this.avgCookieSalePD);
      this.cookiesSoldHourlyData.push(temp);
      this.totalCookiesSold += temp;
    }
  }

  this.makeRow = function(){  //This is my render method
    this.avgSoldPH();
    rend('tr', '', this.rowId, 'storeTable');
    rend('td', this.shopName, 0, this.rowId);
    for(var i = 0; i < hours.length; i++){
      rend('td', this.cookiesSoldHourlyData[i], 0, this.rowId);
    }
    rend('td', this.totalCookiesSold, 0, this.rowId);
  }
}

function rend(el, text, newId, placeId){ // Render function
  var tempEl = document.createElement(el);
  if(newId !== 0){
    tempEl.setAttribute('id', newId)
  }
  tempEl.textContent = text;
  var place = document.getElementById(placeId);
  place.appendChild(tempEl);
}

function tableCreateHeader(){ // Header function
  rend('th', '', 0, 'storeTable');
  for(var i = 0; i < hours.length; i++){
    rend('th', hours[i], 0, 'storeTable');
  }
  rend('th', 'Total', 0, 'storeTable');
}

function tableCreateFooter(){  //Makes the footer that adds up the total for each object at each hour, and totals the toal counts.
  rend('tr', '', 'footer', 'storeTable');  // This function must be run after arrayShops.
  rend('td', 'Total', 0, 'footer');
  for(var i = 0; i < hours.length; i++){
    var temp = 0;
    for(var j = 0; j < shopObjects.length; j++){
      temp += shopObjects[j].cookiesSoldHourlyData[i];
    }
    rend('td', temp, 0, 'footer');
  }
  var overallTotal = 0;
  for(var k = 0; k < shopObjects.length; k++){
    overallTotal += shopObjects[k].totalCookiesSold;
  }
  rend('td', overallTotal, 0, 'footer')
}

function renderAllShops(){
  table.innerHTML = '';
  tableCreateHeader();
  for(var i = 0; i < locationData.length; i++){
    var temp = new Store(locationData[i], minData[i], maxData[i], avgData[i], rowData[i]);
    shopObjects.push(temp);
  }
  for(var j = 0; j <shopObjects.length; j++){
    shopObjects[j].makeRow();
  }
  tableCreateFooter();
}

function handleShopsSubmit(event){
  event.preventDefault();
  if(!event.target.store.value || !event.target.newMin.value || !event.target.newMax.value || !event.target.newAvg.value){
    return alert('Please input a value into each form');
  }
  if(isNaN(parseInt(event.target.newMin.value)) || isNaN(parseInt(event.target.newMax.value)) || isNaN(parseFloat(event.target.newAvg.value))){
    return alert('Please input a number into minimum, maximum, and average');
  }
  if(parseInt(event.target.newMin.value) > parseInt(event.target.newMax.value)){
    return alert('Please make Maximum a larger number than Minimum');
  }
  shopObjects = [];
  var name = event.target.store.value;
  var min = parseInt(event.target.newMin.value);
  var max = parseInt(event.target.newMax.value);
  var avg = parseFloat(event.target.newAvg.value);
  locationData.push(name);
  minData.push(min);
  maxData.push(max);
  avgData.push(avg);
  rowData[rowData.length] = rowData[(rowData.length - 1)] + 1;
  event.target.store.value = null;
  event.target.newMin.value = null;
  event.target.newMax.value = null;
  event.target.newAvg.value = null;
  renderAllShops();
}

shopsForm.addEventListener('submit', handleShopsSubmit);

renderAllShops();
