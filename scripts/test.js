const button = document.querySelector('button');
let submitValue;
let products;

button.addEventListener('click', (e) => {
    let childNodes = e.target.parentElement.childNodes;
    submitValue = childNodes[11].lastElementChild.value;
    // let country = submitValue;
    displayPeopleKilled = document.querySelector('.displayPeopleKilled').checked;
    displayPeopleInjured = document.querySelector('.displayPeopleInjured').checked;
    displayNumberOfStrikes = document.querySelector('.displayNumberOfStrikes').checked;
    // from = document.querySelector('.from').value;
    // to = document.querySelector('.to').value;
    country = document.querySelector('.country').value;

    // console.log('displayPeopleKilled: ', displayPeopleKilled);
    // console.log('displayPeopleInjured: ', displayPeopleInjured);
    // console.log('displayNumberOfStrikes: ', displayNumberOfStrikes);
    // console.log('from date: ', from);
    // console.log('to date: ', to);
    // console.log('selected country: ', country)

    if (country === 'yemen') {
        fetch(`strikes/yemenStrikes.json`).then(function(response) {
            return response.json();
          })
          .then(function(json) {
            let products = json.yemen;
            let labels=[];
            let yearCount =0;
            let data = [];
            for (let i=0; i<products.length; i++) {
            let date = products[i].Date.slice(6,10);
            // if (date >= from && date <= to ) {
            //     if (labels.includes(date)) {
            //         console.log('repeat');
            //     } else {
            //         labels.push(date);
            //     }
            // }
            }
            console.log('Labels: ', labels);
            let minimumStrikes = 0;
            let maximumStrikes = 0;
            if (displayNumberOfStrikes) {
                
                for (let i=0; i<products.length; i++) {
                    minimumStrikes += parseInt(products[i]['Minimum number of strikes']);
                    maximumStrikes += parseInt(products[i]['Maximum number of strikes']);
                }
                document.querySelector('.chartInformation').style.display = 'flex';
                document.querySelector('.chartH2').innerHTML = 'Drone Strikes in Yemen';
                var ctx = document.getElementById('firstChart');
                let myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
                        datasets: [{
                            label: 'Number of Drone Strikes',
                            data: [1, 0, 0,0, 0, 0, 0, 0, 0, 3, 2, 41, 20, 32, 21, 40, 130, 37],
                            backgroundColor: [
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                                '#CE2D4F',
                            ],
                            borderWidth: 5
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
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
            }
            let minimumPeopleKilled = 0;
            let maximumPeopleKilled = 0;
            if (displayPeopleKilled) {
                
                for(let i=0; i<products.length; i++) {
                    minimumPeopleKilled += parseInt(products[i]['Minimum people killed']);
                    maximumPeopleKilled += parseInt(products[i]['Maximum people killed']);
                }
                new Chart(document.getElementById("secondChart"), {
                    type: 'pie',
                    data: {
                      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                      datasets: [{
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [2478,5267,734,784,433]
                      }]
                    },
                    options: {
                      title: {
                        display: true,
                        text: 'Predicted world population (millions) in 2050'
                      }
                    }
                });
            } 
          })
        //   .catch(function(err) {
        //     console.log('Fetch problem: ' + err.message);
        //   });

    }
    
});


// fetch(`strikes/${country}Strikes.json`).then(function(response) {
//         return response.json();
//       })
//       .then(function(json) {
//         products = json[country];
//         console.log(`${country} strikes`, products);
//         // initialize()
//       })
//       .catch(function(err) {
//         console.log('Fetch problem: ' + err.message);
//       });
