var xmlhttp = new XMLHttpRequest();
let yemenStrikes;
let yemenChildrenDeaths = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      yemenStrikes = JSON.parse(this.responseText);
      let droneStrikes = yemenStrikes.AllUSactions;
      let totalDeaths = 0;
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          yemenChildrenDeaths += parseInt(currentObject["Maximum people injured"]);
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


