let xmlhttps = new XMLHttpRequest();
let yemenStrikesForTable;
let rows = [];
let tds = [];
let tableContainer = document.querySelector('.tableContainer');
let yemen = document.querySelector('.yemen');
yemen.addEventListener('click', () => {
  tableContainer.style.display = 'block';
  xmlhttps.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      yemenStrikesForTable = JSON.parse(this.responseText);
      let droneStrikesData = yemenStrikesForTable.yemen;
      for (let i=0; i  <droneStrikesData.length; i++) {
        let currentObject = droneStrikesData[i];
        const table = document.querySelector('.table')
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3=  row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = i+1;
        cell2.innerHTML = currentObject.Province.toString();
        cell3.innerHTML = currentObject["Type of attack"].toString()
        cell4.innerHTML = currentObject["Minimum people killed"].toString()
        cell5.innerHTML = currentObject.Date;
        window.scrollBy(0, 600);
      }
    }
  };
  xmlhttps.open("GET", "strikes/yemenStrikes.json", true);
  xmlhttps.send();
})
  
$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();