var xmlhttp = new XMLHttpRequest();
let afghanistanStrikes;
let afghanistanChildrenDeaths = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      afghanistanStrikes = JSON.parse(this.responseText);
      let droneStrikes = afghanistanStrikes.AllUSactions;
      let totalAfghanDeaths = 0;
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          afghanistanChildrenDeaths += parseInt(currentObject["Maximum children reported killed"]);
      } 
      console.log('count: ', afghanistanChildrenDeaths);
    }
  };
  
  xmlhttp.open("GET", "strikes/afghanistanStrikes.json", true);
  xmlhttp.send();

