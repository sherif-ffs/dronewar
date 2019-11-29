# dronewar
historical data about every reported covert united states drone strike

<img width="1434" alt="Screen Shot 2019-11-29 at 3 51 39 PM" src="https://user-images.githubusercontent.com/46908343/69889779-d54f8280-12c0-11ea-9022-c184f8ce081a.png">

![Screenshot_2019-11-22 The Drone Program](https://user-images.githubusercontent.com/46908343/69889847-1ba4e180-12c1-11ea-8e11-8c271a68c86f.png)

<h1>Example Chart</h1>

window.thirdChart = new Chart(document.getElementById("thirdChart"), {
          type: 'line',
          options: {
            title: {
              display: true,
              text: `injuries by year in ${country}`
            },
            scales: {
              yAxes: [{
                gridLines: {
                  display: true,
                  color: "rgba(255,99,132,0.2)"
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false,
                }
              }]
            },
          },
          data: {
            labels: years,
            datasets: [{ 
              data: maximumInjuries,
              pointRadius: 5,
              pointBackgroundColor: '#CE2D4F',
              pointHoverRadius: 10,
              label: "maximum people injured",
              borderColor: "#CE2D4F",
              fill: true
            }, { 
              data: minimumInjuries,
              label: "minimum people injured",
              pointRadius: 5,
              pointBackgroundColor: '#3E517A',
              pointHoverRadius: 10,
              borderColor: "#3E517A",
              fill: true
            }
          ]
          },
        });
