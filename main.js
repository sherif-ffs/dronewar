var xmlhttp = new XMLHttpRequest();
let myObj;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    console.log(myObj.AllUSactions[0]["Type of attack"]); // Drone Strike
  }

};
xmlhttp.open("GET", "strikes.txt", true);
xmlhttp.send();

