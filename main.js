var xmlhttp = new XMLHttpRequest();
let myObj;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    let droneStrikes = myObj.AllUSactions;
    console.log(droneStrikes);
    let totalDeaths = 0;
    let totalCivilianDeaths = 0;
    for (let i=0; i<droneStrikes.length; i++) {
        let currentObject = droneStrikes[i];
        totalCivilianDeaths += parseInt(currentObject["Maximum civilians reported killed"])
        totalDeaths += parseInt(currentObject["Maximum people killed"]);
    }
    console.log('totalDeaths: ', totalDeaths);
    console.log('totalCivilianDeaths: ', totalCivilianDeaths);

  }
};

xmlhttp.open("GET", "strikes.txt", true);
xmlhttp.send();


