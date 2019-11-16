const button = document.querySelector('button');
let submitValue;
let products;
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  document.querySelector('.chartInformation').style.display = 'none';
    document.querySelector('#thirdChart').style.display = "none";
    document.querySelector('#firstChart').style.display = "none";
    document.querySelector('#secondChart').style.display = "none";
    document.querySelector('.strikesHeader').style.display = "none";
    document.querySelector('.deathsHeader').style.display = "none";
    document.querySelector('.injuriesHeader').style.display = "none";

})
button.addEventListener('click', (e) => {
    let childNodes = e.target.parentElement.childNodes;
    submitValue = childNodes[11].lastElementChild.value;
    displayPeopleKilled = document.querySelector('.displayPeopleKilled').checked;
    displayPeopleInjured = document.querySelector('.displayPeopleInjured').checked;
    displayNumberOfStrikes = document.querySelector('.displayNumberOfStrikes').checked;
    country = document.querySelector('.country').value;
    
    // console.log('displayPeopleKilled: ', displayPeopleKilled);
    // console.log('displayPeopleInjured: ', displayPeopleInjured);
    // console.log('displayNumberOfStrikes: ', displayNumberOfStrikes);
    // console.log('from date: ', from);
    // console.log('to date: ', to);
    console.log('selected country: ', country)

    if (country === 'yemen') {
        fetch(`strikes/yemenStrikes.json`).then(function(response) {
            return response.json();
          })
          .then(function(json) {
            let products = json.yemen;
            let labels=[];
            for (let i=0; i<products.length; i++) {

            }
            console.log('Labels: ', labels);
            let minimumStrikes = 0;
            let maximumStrikes = 0;
            if (displayNumberOfStrikes) {
                
                for (let i=0; i<products.length; i++) {
                    minimumStrikes += parseInt(products[i]['Minimum number of strikes']);
                    maximumStrikes += parseInt(products[i]['Maximum number of strikes']);
                }
              
                if (displayPeopleKilled) {
                    document.querySelector('#secondChart').style.display = "flex";
                } else {
                    document.querySelector('#secondChart').style.display = "none";
                    document.querySelector('.deathsHeader').style.display = "none"
                }
                if (displayPeopleInjured) {
                    document.querySelector('#thirdChart').style.display = "flex";
                } else {
                    document.querySelector('.injuriesHeader').style.display = "none";
                    document.querySelector('#thirdChart').style.display = "none";
                }

                    document.querySelector('.chartInformation').style.display = 'flex';
                    document.querySelector('#firstChart').style.display = "flex";
                    document.querySelector('.chartH2').innerHTML = 'Drone Strikes in Yemen';
                    document.querySelector('.strikesHeader').style.display = 'block';
                    document.querySelector('.strikesHeader').innerHTML = `Confirmed Strikes: ${maximumStrikes}`;

                    // document.querySelector('#secondChart').style.display = "none";
                new Chart(document.getElementById("firstChart"), {
                    type: 'line',
                    data: {
                      labels: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
                      datasets: [{ 
                          data: [1, 0, 0,0, 0, 0, 0, 0, 0, 3, 2, 41, 20, 32, 21, 40, 130, 37],
                          label: "Number Of Drone Strikes",
                          borderColor: "#CE2D4F",
                          fill: true,
                        }
                      ]
                    },
                  });
            // document.querySelector('.chartInformation').style.display = 'flex';
            }
            let minimumPeopleInjured = 0;
            let maximumPeopleInjured = 0;

            if (displayPeopleInjured) {
                for(let i=0; i<products.length; i++) {
                    minimumPeopleInjured += parseInt(products[i]['Minimum people injured']);
                    maximumPeopleInjured += parseInt(products[i]['Maximum people injured']);
                }
                if (displayNumberOfStrikes) {
                    document.querySelector('#firstChart').style.display = "flex";
                    console.log('firstChart in block:' ,document.querySelector('#firstChart').style.display);
                } else {
                    document.querySelector('#firstChart').style.display = "none";
                    document.querySelector('.strikesHeader').style.display = "none";             
                    console.log('firstChart out of block:' ,document.querySelector('#firstChart').style.display);
                }
                if (displayPeopleKilled) {
                    document.querySelector('#secondChart').style.display = "flex";
                } else {
                    document.querySelector('#secondChart').style.display = "none";
                    document.querySelector('.deathsHeader').style.display = "none";

                }
                document.querySelector('#thirdChart').style.display = "flex";
                document.querySelector('.chartInformation').style.display = 'flex';
                document.querySelector('.injuriesHeader').style.display = "block";
                document.querySelector('.injuriesHeader').innerHTML = `People Injured ${minimumPeopleInjured} - ${maximumPeopleInjured}`;
                document.querySelector('.chartH2').innerHTML = 'Drone Strikes in Yemen';
                new Chart(document.getElementById("thirdChart"), {
                    type: 'horizontalBar',
                    data: {
                      labels: ["Injured"],
                      datasets: [
                        {
                          label: "Minimum",
                          backgroundColor: "#CE2D4F",
                          data: [minimumPeopleInjured]
                        }, {
                          label: "Maximum",
                          backgroundColor: "#AB1132",
                          data: [maximumPeopleInjured]
                        }
                      ]
                    }
                });
            }
            let minimumPeopleKilled = 0;
            let maximumPeopleKilled = 0;
            let minimumCiviliansKilled = 0;
            let maximumCiviliansKilled = 0;
            let minimumChildrenKilled = 0;
            let maximumChildrenKilled = 0;
            if (displayPeopleKilled) {  
                for(let i=0; i<products.length; i++) {
                    minimumPeopleKilled += parseInt(products[i]['Minimum people killed']);
                    maximumPeopleKilled += parseInt(products[i]['Maximum people killed']);
                    minimumCiviliansKilled += parseInt(products[i]['Minimum civilians reported killed']);
                    maximumCiviliansKilled += parseInt(products[i]['Maximum civilians reported killed']);
                    minimumChildrenKilled += parseInt(products[i]['Minimum children reported killed']);
                    maximumChildrenKilled += parseInt(products[i]['Maximum children reported killed']);
                }
                if (displayNumberOfStrikes) {
                    document.querySelector('#firstChart').style.display = "flex";
                } else {
                    document.querySelector('#firstChart').style.display = "none";
                    document.querySelector('.strikesHeader').style.display = "none";
                }
                if (displayPeopleInjured) {
                    document.querySelector('#thirdChart').style.display = "flex";
                } else {
                    document.querySelector('#thirdChart').style.display = "none";
                    document.querySelector('.injuriesHeader').style.display = "none";
                }
                document.querySelector('#secondChart').style.display = "flex";
                document.querySelector('.chartInformation').style.display = 'flex';   
                document.querySelector('.deathsHeader').style.display = 'block';
                document.querySelector('.deathsHeader').innerHTML = `Deaths: ${minimumPeopleKilled} - ${maximumPeopleKilled}`;
                document.querySelector('.chartH2').innerHTML = 'Drone Strikes in Yemen';
                new Chart(document.getElementById("secondChart"), {
                    type: 'bar',
                    data: {
                      labels: ["Total", "Civilians", "Children"],
                      datasets: [
                        {
                          label: "Minimum",
                          backgroundColor: "#CE2D4F",
                          data: [minimumPeopleKilled,minimumCiviliansKilled,minimumChildrenKilled]
                        }, 
                        {
                          label: "Maximum",
                          backgroundColor: "#AB1132",
                          data: [maximumPeopleKilled,maximumCiviliansKilled,maximumChildrenKilled]
                        }
                      ],
                    },
                });
            } 
            if (!displayNumberOfStrikes && !displayPeopleInjured && !displayPeopleKilled) {
              document.querySelector('.chartInformation').style.display = 'none';
              document.querySelector('#thirdChart').style.display = "none";
              document.querySelector('#firstChart').style.display = "none";
              document.querySelector('#secondChart').style.display = "none";
              document.querySelector('.strikesHeader').style.display = "none";
              document.querySelector('.deathsHeader').style.display = "none";
              document.querySelector('.injuriesHeader').style.display = "none";
            }
          })
          .catch(function(err) {
            console.log('Fetch problem: ' + err.message);
          });

    } else {
      console.log('country: ', country)
    }
    
});
