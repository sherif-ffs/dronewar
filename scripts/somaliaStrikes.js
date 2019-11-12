var xmlhttp = new XMLHttpRequest();
let somaliaStrikes;
let somaliaChildrenDeaths = 0;

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      somaliaStrikes = JSON.parse(this.responseText);
      let droneStrikes = somaliaStrikes.AllUSactions;
      let somaliaDeaths = 0;
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          somaliaChildrenDeaths += parseInt(currentObject["Maximum people injured"]);
      }
      console.log('count: ', somaliaChildrenDeaths)
    }
  };
  
  xmlhttp.open("GET", "strikes/somaliaStrikes.json", true);
  xmlhttp.send();

