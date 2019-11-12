var xmlhttp = new XMLHttpRequest();
let somaliaStrikes;
let totalSomaliaDroneStrikes = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      somaliaStrikes = JSON.parse(this.responseText);
      let droneStrikes = somaliaStrikes.AllUSactions;
      let totalDeaths = 0;
      let totalCivilianDeaths = 0;
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          totalSomaliaDroneStrikes += parseInt(currentObject["Minimum strikes"])
          totalCivilianDeaths += parseInt(currentObject["Maximum civilians reported killed"])
      }
      console.log('somalia strikes: ', totalSomaliaDroneStrikes)
    }
  };
  
  xmlhttp.open("GET", "strikes/somaliaStrikes.json", true);
  xmlhttp.send();

