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

        var row = table.insertRow(i+1);
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

  $(window).on("load resize ", function() {
    var scrollWidth = $('.tableContent').width() - $('.tableContent').width();
    console.log('hey')  
    $('.tableHeader').css({'padding-right':scrollWidth});
  }).resize();

  xmlhttp.open("GET", "strikes/yemenStrikes.json", true);
  xmlhttp.send();

    
//   let tr;
//   let table = document.querySelector('.table')
//   window.setInterval(function () {
//     tr = table.getElementsByTagName("tr");
//   }, 1000);

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tbl-content");
  if (tr) {
      tr = table.getElementsByTagName("tr");
  } else {
      console.log('not loaded')
  }
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


// document.querySelector('.yemen').addEventListener('mouseenter', () => {
//     document.querySelector('.yemen').classList.add('active')
//     document.querySelector('.yemen').src = 'assets/yemenAfter.svg';
//   });
//   document.querySelector('.yemen').addEventListener('mouseleave', () => {
//     document.querySelector('.yemen').src = 'assets/yemen.svg';
//   });
