'use strict'

var pike = {
  ulID: 'pike',
  minCustPH: 23,
  maxCustPH: 65,
  avgCookieSalePD: 6.3,
  totalCookiesSold: 0,

  randCustPH: function(){
    var random = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH + 1) + this.minCustPH);
    return random;
  },

  cookiesSoldHourlyData: [],
  avgSoldPH: function(){
    for(var i = 0; i < 15; i++){
      var temp = Math.floor(this.randCustPH() * this.avgCookieSalePD);
      this.cookiesSoldHourlyData.push(temp);
      this.totalCookiesSold += temp;
    }
  },

  pasteList: function(){
    for(var i = 0; i < 6; i++){
      var liEl1 = document.createElement('li');
      var time = i + 6;
      liEl1.textContent = time + 'am: ' + this.cookiesSoldHourlyData[i] + ' cookies';
      var place1 = document.getElementById(this.ulID);
      place1.appendChild(liEl1);
    }

    var noon = document.createElement('li');
    noon.textContent = '12pm: ' + this.cookiesSoldHourlyData[6] + ' cookies';
    var place2 = document.getElementById(this.ulID);
    place2.appendChild(noon);

    for( i = 1; i < 10; i++){
      var liEl2 = document.createElement('li');
      var temp = i + 6;
      liEl2.textContent = i + 'pm: ' + this.cookiesSoldHourlyData[temp] + ' cookies';
      var place3 = document.getElementById(this.ulID);
      place3.appendChild(liEl2);
    }
    liEl2.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    place3.appendChild(liEl2);
  }
}

pike.avgSoldPH();
pike.pasteList();

var seatac = {
  ulID: 'seatac',
  minCustPH: 3,
  maxCustPH: 24,
  avgCookieSalePD: 1.2,
  totalCookiesSold: 0,

  randCustPH: function(){
    var random = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH + 1) + this.minCustPH);
    return random;
  },

  cookiesSoldHourlyData: [],
  avgSoldPH: function(){
    for(var i = 0; i < 15; i++){
      var temp = Math.floor(this.randCustPH() * this.avgCookieSalePD);
      this.cookiesSoldHourlyData.push(temp);
      this.totalCookiesSold += temp;
    }
  },

  pasteList: function(){
    for(var i = 0; i < 6; i++){
      var liEl1 = document.createElement('li');
      var time = i + 6;
      liEl1.textContent = time + 'am: ' + this.cookiesSoldHourlyData[i] + ' cookies';
      var place1 = document.getElementById(this.ulID);
      place1.appendChild(liEl1);
    }

    var noon = document.createElement('li');
    noon.textContent = '12pm: ' + this.cookiesSoldHourlyData[6] + ' cookies';
    var place2 = document.getElementById(this.ulID);
    place2.appendChild(noon);

    for( i = 1; i < 10; i++){
      var liEl2 = document.createElement('li');
      var temp = i + 6;
      liEl2.textContent = i + 'pm: ' + this.cookiesSoldHourlyData[temp] + ' cookies';
      var place3 = document.getElementById(this.ulID);
      place3.appendChild(liEl2);
    }
    liEl2.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    place3.appendChild(liEl2);
  }
}

seatac.avgSoldPH();
seatac.pasteList();

var seattle = {
  ulID: 'seattle',
  minCustPH: 11,
  maxCustPH: 28,
  avgCookieSalePD: 3.7,
  totalCookiesSold: 0,

  randCustPH: function(){
    var random = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH + 1) + this.minCustPH);
    return random;
  },

  cookiesSoldHourlyData: [],
  avgSoldPH: function(){
    for(var i = 0; i < 15; i++){
      var temp = Math.floor(this.randCustPH() * this.avgCookieSalePD);
      this.cookiesSoldHourlyData.push(temp);
      this.totalCookiesSold += temp;
    }
  },

  pasteList: function(){
    for(var i = 0; i < 6; i++){
      var liEl1 = document.createElement('li');
      var time = i + 6;
      liEl1.textContent = time + 'am: ' + this.cookiesSoldHourlyData[i] + ' cookies';
      var place1 = document.getElementById(this.ulID);
      place1.appendChild(liEl1);
    }

    var noon = document.createElement('li');
    noon.textContent = '12pm: ' + this.cookiesSoldHourlyData[6] + ' cookies';
    var place2 = document.getElementById(this.ulID);
    place2.appendChild(noon);

    for( i = 1; i < 10; i++){
      var liEl2 = document.createElement('li');
      var temp = i + 6;
      liEl2.textContent = i + 'pm: ' + this.cookiesSoldHourlyData[temp] + ' cookies';
      var place3 = document.getElementById(this.ulID);
      place3.appendChild(liEl2);
    }
    liEl2.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    place3.appendChild(liEl2);
  }
}

seattle.avgSoldPH();
seattle.pasteList();

var capitol = {
  ulID: 'capitol',
  minCustPH: 20,
  maxCustPH: 38,
  avgCookieSalePD: 2.3,
  totalCookiesSold: 0,

  randCustPH: function(){
    var random = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH + 1) + this.minCustPH);
    return random;
  },

  cookiesSoldHourlyData: [],
  avgSoldPH: function(){
    for(var i = 0; i < 15; i++){
      var temp = Math.floor(this.randCustPH() * this.avgCookieSalePD);
      this.cookiesSoldHourlyData.push(temp);
      this.totalCookiesSold += temp;
    }
  },

  pasteList: function(){
    for(var i = 0; i < 6; i++){
      var liEl1 = document.createElement('li');
      var time = i + 6;
      liEl1.textContent = time + 'am: ' + this.cookiesSoldHourlyData[i] + ' cookies';
      var place1 = document.getElementById(this.ulID);
      place1.appendChild(liEl1);
    }

    var noon = document.createElement('li');
    noon.textContent = '12pm: ' + this.cookiesSoldHourlyData[6] + ' cookies';
    var place2 = document.getElementById(this.ulID);
    place2.appendChild(noon);

    for( i = 1; i < 10; i++){
      var liEl2 = document.createElement('li');
      var temp = i + 6;
      liEl2.textContent = i + 'pm: ' + this.cookiesSoldHourlyData[temp] + ' cookies';
      var place3 = document.getElementById(this.ulID);
      place3.appendChild(liEl2);
    }
    liEl2.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    place3.appendChild(liEl2);
  }
}

capitol.avgSoldPH();
capitol.pasteList();

var alki = {
  ulID: 'alki',
  minCustPH: 2,
  maxCustPH: 16,
  avgCookieSalePD: 4.6,
  totalCookiesSold: 0,

  randCustPH: function(){
    var random = Math.floor(Math.random() * (this.maxCustPH - this.minCustPH + 1) + this.minCustPH);
    return random;
  },

  cookiesSoldHourlyData: [],
  avgSoldPH: function(){
    for(var i = 0; i < 15; i++){
      var temp = Math.floor(this.randCustPH() * this.avgCookieSalePD);
      this.cookiesSoldHourlyData.push(temp);
      this.totalCookiesSold += temp;
    }
  },

  pasteList: function(){
    for(var i = 0; i < 6; i++){
      var liEl1 = document.createElement('li');
      var time = i + 6;
      liEl1.textContent = time + 'am: ' + this.cookiesSoldHourlyData[i] + ' cookies';
      var place1 = document.getElementById(this.ulID);
      place1.appendChild(liEl1);
    }

    var noon = document.createElement('li');
    noon.textContent = '12pm: ' + this.cookiesSoldHourlyData[6] + ' cookies';
    var place2 = document.getElementById(this.ulID);
    place2.appendChild(noon);

    for( i = 1; i < 10; i++){
      var liEl2 = document.createElement('li');
      var temp = i + 6;
      liEl2.textContent = i + 'pm: ' + this.cookiesSoldHourlyData[temp] + ' cookies';
      var place3 = document.getElementById(this.ulID);
      place3.appendChild(liEl2);
    }
    liEl2.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    place3.appendChild(liEl2);
  }
}

alki.avgSoldPH();
alki.pasteList();
