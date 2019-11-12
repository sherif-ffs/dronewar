var xmlhttp = new XMLHttpRequest();
let pakistanStrikes;
let totalPakistanDroneStrikes = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      pakistanStrikes = JSON.parse(this.responseText);
      let droneStrikes = pakistanStrikes.AllUSactions;
      let totalDeaths = 0;
      let totalCivilianDeaths = 0;
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          totalPakistanDroneStrikes =430;
      }
      console.log('pakistan strikes: ', totalPakistanDroneStrikes)
  
    }
  };
  
  xmlhttp.open("GET", "strikes/pakistanStrikes.json", true);
  xmlhttp.send();

