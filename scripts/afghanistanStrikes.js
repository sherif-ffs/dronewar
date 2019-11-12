var xmlhttp = new XMLHttpRequest();
let afghanistanStrikes;
let totalAfghanistanDroneStrikes = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      afghanistanStrikes = JSON.parse(this.responseText);
      let droneStrikes = afghanistanStrikes.AllUSactions;
      let totalDeaths = 0;
      let totalCivilianDeaths = 0;
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          totalAfghanistanDroneStrikes += parseInt(currentObject["Minimum strikes"])
      }  
      console.log('afghanistan strikes: ',totalAfghanistanDroneStrikes )
    }
  };
  
  xmlhttp.open("GET", "strikes/afghanistanStrikes.json", true);
  xmlhttp.send();

