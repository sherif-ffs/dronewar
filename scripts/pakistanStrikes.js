var xmlhttp = new XMLHttpRequest();
let pakistanStrikes;
let pakistanChildrenDeaths = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      pakistanStrikes = JSON.parse(this.responseText);
      let droneStrikes = pakistanStrikes.pakistan;
      let totalPakistanDeaths = 0;
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          pakistanChildrenDeaths += parseInt(currentObject["Maximum reported injured"]);
      }
    }
  };
  
  xmlhttp.open("GET", "strikes/pakistanStrikes.json", true);
  xmlhttp.send();

  document.querySelector('.pakistan').addEventListener('mouseenter', () => {
    document.querySelector('.pakistan').src = 'assets/pakistanAfter.svg';
  });
  document.querySelector('.pakistan').addEventListener('mouseleave', () => {
    document.querySelector('.pakistan').src = 'assets/pakistan.svg';
  });