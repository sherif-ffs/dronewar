var xmlhttp = new XMLHttpRequest();
let yemenStrikes;
let totalYemenDroneStrikes = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      yemenStrikes = JSON.parse(this.responseText);
      let droneStrikes = yemenStrikes.AllUSactions;
      console.log('droneStrikes: ', droneStrikes)
      let totalCivilianDeaths = 0;
    let totalDeaths = 0;
      for (let i=0; i<15; i++) {
          let currentObject = droneStrikes[i];
          totalYemenDroneStrikes += parseInt(currentObject["Maximum number of strikes"]);
          totalDeaths += parseInt(currentObject["Minimum people killed"]);
      }
      console.log('yemen strikes: ', totalYemenDroneStrikes);
      console.log('minimum deaths: ', totalDeaths)
    }
  };
  
  xmlhttp.open("GET", "strikes/yemenStrikes.json", true);
  xmlhttp.send();




