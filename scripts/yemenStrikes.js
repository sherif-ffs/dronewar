var xmlhttp = new XMLHttpRequest();
let yemenStrikes;
let yemenChildrenDeaths = 0;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      yemenStrikes = JSON.parse(this.responseText);
      let droneStrikes = yemenStrikes.yemen;
      for (let i=0; i  <droneStrikes.length; i++) {
        let currentObject = droneStrikes[i];
        let table = document.querySelector('.myTable');
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3= row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = i+1;
        cell2.innerHTML = currentObject.Province.toString();
        cell3.innerHTML = currentObject["Type of attack"].toString()
        cell4.innerHTML = currentObject["Minimum people killed"].toString()
        cell5.innerHTML = currentObject.Date;
      }
    }
  };



  xmlhttp.open("GET", "strikes/yemenStrikes.json", true);
  xmlhttp.send();

// document.querySelector('.yemen').addEventListener('mouseenter', () => {
//     document.querySelector('.yemen').classList.add('active')
//     document.querySelector('.yemen').src = 'assets/yemenAfter.svg';
//   });
//   document.querySelector('.yemen').addEventListener('mouseleave', () => {
//     document.querySelector('.yemen').src = 'assets/yemen.svg';
//   });
