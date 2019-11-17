var xmlhttp = new XMLHttpRequest();
let afghanistanStrikes;
let afghanistanChildrenDeaths = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      afghanistanStrikes = JSON.parse(this.responseText);
      let droneStrikes = afghanistanStrikes.afghanistan;
      let totalStrikes = 0
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          totalStrikes += parseInt(currentObject["Minimum strikes"]);
      } 
      console.log('totalStrikes: ', totalStrikes)
    }
  };
  
  xmlhttp.open("GET", "strikes/afghanistanStrikes.json", true);
  xmlhttp.send();


  document.querySelector('.afghanistan').addEventListener('mouseenter', () => {
    document.querySelector('.afghanistan').src = 'assets/afghanistanAfter.svg';
  });
  document.querySelector('.afghanistan').addEventListener('mouseleave', () => {
    document.querySelector('.afghanistan').src = 'assets/afghanistan.svg';
  });