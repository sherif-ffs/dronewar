var xmlhttp = new XMLHttpRequest();
let yemenStrikes;
let yemenChildrenDeaths = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      yemenStrikes = JSON.parse(this.responseText);
      let droneStrikes = yemenStrikes.yemen;
      let totalDeaths = 0;
      for (let i=0; i< droneStrikes.length; i++) {
        let currentObject = droneStrikes[i];
        let year = currentObject.Date.slice(6, 10);
          if (year > 2002) {
          
          }
         
      }
      console.log('count: ', yemenChildrenDeaths);
    }
  };
  
  xmlhttp.open("GET", "strikes/yemenStrikes.json", true);
  xmlhttp.send();


  document.querySelector('.yemen').addEventListener('mouseenter', () => {
    document.querySelector('.yemen').classList.add('active')
    document.querySelector('.yemen').src = 'assets/yemenAfter.svg';
  });
  document.querySelector('.yemen').addEventListener('mouseleave', () => {
    document.querySelector('.yemen').src = 'assets/yemen.svg';
  });

function submitForm(value) {
  console.log('value: ', value)
}



function peopleCasualties(peopleCasualties) {
  var value = peopleCasualties.checked;
  console.log('people deaths: ', value);
}
function peopleInjured(peopleInjured) {
  var value = peopleInjured.checked;
  console.log('people injured: ', value);
}
function numberOfStrikes(numberOfStrikes) {
  var value = numberOfStrikes.checked;
  console.log('strikes: ', value);
}
function doSelectCountry(countrySelect) {
    var value = countrySelect.value;
    console.log('country: ', value);
}
function doSelectFrom(fromDateSelect) {
  var value = fromDateSelect.value;
  console.log('year from: ', value);
}
function doSelectTo(toDateSelect) {
  var value = toDateSelect.value;
  console.log('year to: ', value);
}