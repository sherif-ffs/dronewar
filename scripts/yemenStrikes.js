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
          yemenChildrenDeaths += parseInt(currentObject["Maximum children reported killed"]);
      }
      console.log('count: ', yemenChildrenDeaths);
    }
  };
  
  xmlhttp.open("GET", "strikes/yemenStrikes.json", true);
  xmlhttp.send();




