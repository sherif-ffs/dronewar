let xmlhttps = new XMLHttpRequest();
let yemenStrikesForTable;
let rows = [];
let tds = [];
let tableContainer = document.querySelector('.tableContainer');
const yemen = document.querySelector('.yemen');
const afghanistan = document.querySelector('.afghanistan');
const pakistan = document.querySelector('.pakistan');
const somalia = document.querySelector('.somalia')

const clearTable = document.querySelector('.clearTable');

clearTable.addEventListener('click', () => {
  window.scrollBy(0, -600);
  setTimeout(function(){ 
  tableContainer.style.display = 'none';   
   }, 500);
  clearTable.style.display = 'none';
});
let table;
yemen.addEventListener('click', () => {
  tableContainer.style.display = 'block';
  xmlhttps.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      yemenStrikesForTable = JSON.parse(this.responseText);
      let droneStrikesData = yemenStrikesForTable.yemen;
      for (let i=0; i  <droneStrikesData.length; i++) {

        let currentObject = droneStrikesData[i];
        table = document.querySelector('.table');
        const newRow = document.createElement('tr');
        newRow.classList = 'newRow';
        table.appendChild(newRow);
        tr = table.querySelectorAll(".newRow");

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3=  newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        // console.log(tdItems)
        cell1.innerHTML = i+1;
        cell2.innerHTML = currentObject.Province.toString();
        cell3.innerHTML = currentObject["Type of attack"].toString()
        cell4.innerHTML = currentObject["Minimum people killed"].toString()
        cell5.innerHTML = currentObject.Date;
        const tdItems = [cell1, cell2, cell3, cell4, cell5];
        window.scrollBy(0, 700);
        clearTable.style.display = 'block';
      }
         }
  };
  xmlhttps.open("GET", "strikes/yemenStrikes.json", true);
  xmlhttps.send();
})
 
afghanistan.addEventListener('click', () => {
  tableContainer.style.display = 'block';
  xmlhttps.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      afghanistanStrikesForTable = JSON.parse(this.responseText);
      let droneStrikesData = afghanistanStrikesForTable.afghanistan;
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
        cell4.innerHTML = currentObject["Minimum total people killed"].toString()
        cell5.innerHTML = currentObject.Date;
        window.scrollBy(0, 600);
        clearTable.style.display = 'block';
      }
    }
  };
  xmlhttps.open("GET", "strikes/afghanistanStrikes.json", true);
  xmlhttps.send();
})

pakistan.addEventListener('click', () => {
  tableContainer.style.display = 'block';
  xmlhttps.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      pakistanStrikesForTable = JSON.parse(this.responseText);
      let droneStrikesData = pakistanStrikesForTable.pakistan;
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
        cell2.innerHTML = currentObject.Area.toString();
        cell3.innerHTML = 'Drone Strike'
        cell4.innerHTML = currentObject["Minimum total people killed"].toString()
        cell5.innerHTML = currentObject.Date;
        window.scrollBy(0, 600);
        clearTable.style.display = 'block';
      }
    }
  };
  xmlhttps.open("GET", "strikes/pakistanStrikes.json", true);
  xmlhttps.send();
})

somalia.addEventListener('click', () => {
  tableContainer.style.display = 'block';
  xmlhttps.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      somaliaStrikesForTable = JSON.parse(this.responseText);
      let droneStrikesData = somaliaStrikesForTable.somalia;
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
        cell2.innerHTML = currentObject.Location.toString();
        cell3.innerHTML = 'Strike type'
        cell4.innerHTML = currentObject["Minimum people killed"].toString()
        cell5.innerHTML = currentObject.Date;
        window.scrollBy(0, 600);
        clearTable.style.display = 'block';
      }
    }
  };
  xmlhttps.open("GET", "strikes/somaliaStrikes.json", true);
  xmlhttps.send();
})
$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();