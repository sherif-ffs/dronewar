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
    from = document.querySelector('.from').value;
    to = document.querySelector('.to').value;
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
            if (date >= from && date <= to ) {
                if (labels.includes(date)) {
                    console.log('repeat');
                } else {
                    labels.push(date);
                }
            }
            }
            console.log('Labels: ', labels);
            let minimumStrikes = 0;
            let maximumStrikes = 0;
            if (displayNumberOfStrikes) {
                
                for (let i=0; i<products.length; i++) {
                    minimumStrikes += parseInt(products[i]['Minimum number of strikes']);
                    maximumStrikes += parseInt(products[i]['Maximum number of strikes']);
                }
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
            }
            document.querySelector('.chartInformation').style.display = 'flex';
            var ctx = document.getElementById('firstChart');
            let myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# Strikes',
                        data: [37, 123, 32, 52, 213, 32],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
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
            document.querySelector('.chartH2').innerHTML = 'Strikes in Yemen';
          })
          .catch(function(err) {
            console.log('Fetch problem: ' + err.message);
          });

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
