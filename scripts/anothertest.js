// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .

var xmlhttp = new XMLHttpRequest();
let yemenStrikes;
let yemenChildrenDeaths = 0;
let rows = [];
let tds = [];
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      yemenStrikes = JSON.parse(this.responseText);
      let droneStrikes = yemenStrikes.yemen;
      for (let i=0; i  <droneStrikes.length; i++) {
        let currentObject = droneStrikes[i];
        let table = document.querySelector('.table');
        var row = table.insertRow(i);
        rows.push(row)
        var cell1 = row.insertCell(0);
        tds.push(cell1);
        var cell2 = row.insertCell(1);
        tds.push(cell2);
        var cell3=  row.insertCell(2);
        tds.push(cell3);
        var cell4 = row.insertCell(3);
        tds.push(cell4);
        var cell5 = row.insertCell(4);
        tds.push(cell5);

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



$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();