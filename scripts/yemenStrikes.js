var xmlhttp = new XMLHttpRequest();
let yemenStrikes;
let yemenChildrenDeaths = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      yemenStrikes = JSON.parse(this.responseText);
      let droneStrikes = yemenStrikes.yemen;
      for (let i=0; i< droneStrikes.length; i++) {
        let currentObject = droneStrikes[i];
        let year = droneStrikes[i].Date.slice(6, 10);
        let yearTotals = 0;
        let total = [];
        for (let j=0; j<currentObject.length; j++) {
        console.log(year);
          if (year === 2002) {
            yearTotals += 1;
          }
        }
        console.log('yearTotals: ', yearTotals);
      }
    }
  };
  xmlhttp.open("GET", "strikes/yemenStrikes.json", true);
  xmlhttp.send();




// document.querySelector('.yemen').addEventListener('mouseenter', () => {
//     document.querySelector('.yemen').classList.add('active')
//     document.querySelector('.yemen').src = 'assets/yemenAfter.svg';
//   });
//   document.querySelector('.yemen').addEventListener('mouseleave', () => {
//     document.querySelector('.yemen').src = 'assets/yemen.svg';
//   });
