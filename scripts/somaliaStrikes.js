var xmlhttp = new XMLHttpRequest();
let somaliaStrikes;
let somaliaChildrenDeaths = 0;

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      somaliaStrikes = JSON.parse(this.responseText);
      let droneStrikes = somaliaStrikes.somalia;
      let somaliaDeaths = 0;
      for (let i=0; i<droneStrikes.length; i++) {
          let currentObject = droneStrikes[i];
          somaliaChildrenDeaths += parseInt(currentObject["Maximum people injured"]);
      }
    }
  };
  
  xmlhttp.open("GET", "strikes/somaliaStrikes.json", true);
  xmlhttp.send();


  document.querySelector('.somalia').addEventListener('mouseenter', () => {
    document.querySelector('.somalia').src = 'assets/somaliaAfter.svg';
  });
  document.querySelector('.somalia').addEventListener('mouseleave', () => {
    document.querySelector('.somalia').src = 'assets/somalia.svg';
  });

