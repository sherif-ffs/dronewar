let xmlhttps = new XMLHttpRequest();
let yemenStrikesForTable;
let rows = [];
let tds = [];
let tableContainer = document.querySelector('.tableContainer');
const yemen = document.querySelector('.yemen');
const afghanistan = document.querySelector('.afghanistan');
const pakistan = document.querySelector('.pakistan');
const somalia = document.querySelector('.somalia')

let somaliaIsActive = false;
let yemenIsActive = false;
let afghanistanIsActive = false;
let pakistanIsActive = false;

var table
const tableHeader = document.querySelector('.tableHeader');
const clearTables = document.querySelectorAll('.clearTable');


clearTables.forEach((table) => {
  table.addEventListener('click', () => {
    window.scrollBy(0, -600);
  setTimeout(function(){ 
  tableContainer.style.display = 'none';   
   }, 500);
   clearTables.forEach((table) => {
     table.style.display ='none';
    table = document.getElementById('myTable');
    console.log('table: ', table);
    console.log('table: ', table.hasChildNodes)

    while(table.hasChildNodes())
    {
        table.removeChild(table.firstChild);
    }
    console.log('table: ', table.hasChildNodes)
   })
  })
})



yemen.addEventListener('click', () => {
  if (!yemenIsActive) {
    tableContainer.style.display = 'block';
    xmlhttps.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        yemenStrikesForTable = JSON.parse(this.responseText);
        let droneStrikesData = yemenStrikesForTable.yemen;
        table = document.getElementById('myTable');

        console.log('yemenTable: ', table)
        for (let i=0; i  <droneStrikesData.length; i++) {
  
          let currentObject = droneStrikesData[i];
          // const table = document.querySelector('.table')
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
          const tdItems = [cell1, cell2, cell3, cell4, cell5];
          window.scrollBy(0, 700);
          clearTables.forEach((table) => {
            table.style.display = 'block';
          })
          yemenIsActive = true;
        }
           }
    };
    xmlhttps.open("GET", "json/yemenStrikes.json", true);
    xmlhttps.send();
  } else {
    window.scrollBy(0, -600);
      setTimeout(function(){ 
        tableContainer.style.display = 'none';   
        }, 500);
      clearTables.forEach((table) => {
        // var elmtTable = document.getElementById('myTable');
        // elmtTable.innerHTML = "";
        table.style.display ='none';
        
        
        
        // for (var x=rowCount-1; x>0; x--) {
        //    elmtTable.removeChild(tableRows[x]);
        // }
      })
      yemenIsActive = false;
  }
})
 
afghanistan.addEventListener('click', () => {
  if (!afghanistanIsActive) {
    tableContainer.style.display = 'block';
    xmlhttps.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        afghanistanStrikesForTable = JSON.parse(this.responseText);
        let droneStrikesData = afghanistanStrikesForTable.afghanistan;
        for (let i=0; i  <droneStrikesData.length; i++) {
          let currentObject = droneStrikesData[i];
          // const table = document.querySelector('.table')
          table = document.getElementById('myTable');
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
          clearTables.forEach((table) => {
            table.style.display = 'block';
          })
          afghanistanIsActive = true;
        }
      }
    };
    xmlhttps.open("GET", "json/afghanistanStrikes.json", true);
    xmlhttps.send();
  } else {
    window.scrollBy(0, -600);
      setTimeout(function(){ 
        tableContainer.style.display = 'none';   
        }, 500);
      clearTables.forEach((table) => {
        table.style.display ='none'
      })
      afghanistanIsActive = false;
  }
  
})

pakistan.addEventListener('click', () => {
  if (!pakistanIsActive) {
    tableContainer.style.display = 'block';
    xmlhttps.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        pakistanStrikesForTable = JSON.parse(this.responseText);
        let droneStrikesData = pakistanStrikesForTable.pakistan;
        for (let i=0; i  <droneStrikesData.length; i++) {
          let currentObject = droneStrikesData[i];
          // const table = document.querySelector('.table')
          table = document.getElementById('myTable');

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
          clearTables.forEach((table) => {
            table.style.display = 'block';
          })
          pakistanIsActive = true;
        }
      }
    };
    xmlhttps.open("GET", "json/pakistanStrikes.json", true);
    xmlhttps.send();
  } else {
    window.scrollBy(0, -600);
      setTimeout(function(){ 
        tableContainer.style.display = 'none';   
        }, 500);
      clearTables.forEach((table) => {
        table.style.display ='none'
      })
      pakistanIsActive = false;
  }
})

somalia.addEventListener('click', () => {
  if (!somaliaIsActive) {
    tableContainer.style.display = 'block';
      xmlhttps.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          somaliaStrikesForTable = JSON.parse(this.responseText);
          let droneStrikesData = somaliaStrikesForTable.somalia;
          for (let i=0; i  <droneStrikesData.length; i++) {
            let currentObject = droneStrikesData[i];
            // const table = document.querySelector('.table')
            table = document.getElementById('myTable');

            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3=  row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = i+1;
            cell2.innerHTML = currentObject.Location.toString();
            cell3.innerHTML = currentObject["Strike type"].toString()
            cell4.innerHTML = currentObject["Minimum people killed"].toString()
            cell5.innerHTML = currentObject.Date;
            window.scrollBy(0, 600);
            clearTables.forEach((table) => {
              table.style.display = 'block';
            })
            somaliaIsActive = true;
          }
        }
      };
      xmlhttps.open("GET", "json/somaliaStrikes.json", true);
      xmlhttps.send();
  } else {
      window.scrollBy(0, -600);
      setTimeout(function(){ 
        tableContainer.style.display = 'none';   
        }, 500);
      clearTables.forEach((table) => {
        table.style.display ='none'
      })
      somaliaIsActive = false;
  }
})
  
$(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({'padding-right':scrollWidth});
  }).resize();