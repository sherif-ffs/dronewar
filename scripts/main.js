const button = document.querySelector('button');

let submitValue;
let products; // contains json data

let firstChartExists = false;
let secondChartExists = false;
let thirdChartExists = false;

const closeButtons = document.querySelectorAll('.close');
const clearButton = document.querySelector('.clear');
const returnToDashboard = document.querySelector('.returnToDashboard');

function findPos(obj) {
  let curtop = 0;
  if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
  return [curtop];
  }
}
const destroyExistingCharts = () => {
  if (secondChartExists) {
    window.secondChart.destroy();
    secondChartExists = false;
  }
  if (thirdChartExists) {
    window.thirdChart.destroy();
    thirdChartExists = false;
  }
  if (firstChartExists) {
    window.firstChart.destroy();
    firstChartExists = false;
  }
}

const getDataFromForm = () => {
  country = document.querySelector('.country').value;
  displayPeopleKilled = document.querySelector('.displayPeopleKilled').checked;
  displayPeopleInjured = document.querySelector('.displayPeopleInjured').checked;
  displayNumberOfStrikes = document.querySelector('.displayNumberOfStrikes').checked;
}

const resetBoard = () => {
  document.querySelector('.chartInformation').style.display = 'none';
  document.querySelector('#thirdChart').style.display = "none";
  document.querySelector('#firstChart').style.display = "none";
  document.querySelector('#secondChart').style.display = "none";
  document.querySelector('.strikesHeader').style.display = "none";
  document.querySelector('.deathsHeader').style.display = "none";
  document.querySelector('.injuriesHeader').style.display = "none";
  window.firstChart.destroy();
  window.secondChart.destroy();
  window.thirdChart.destroy();
  document.querySelector('.sectionHeader').innerHTML =`current statistics overall`;
  document.querySelector('.displayStrikes').innerHTML = `11928`;
  document.querySelector('.displayDeaths').innerHTML = `9331 - 16959`;
  document.querySelector('.displayCivilians').innerHTML = `917 - 1995`;
  document.querySelector('.displayChildren').innerHTML = `286 - 457`;
  window.scroll(0,findPos(document.getElementById("title")));
  firstChartExists = false;
  secondChartExists = false;
  thirdChartExists = false;
}

closeButtons.forEach((button) => {
  button.addEventListener('click', resetBoard);
});

clearButton.addEventListener('click', resetBoard);
returnToDashboard.addEventListener('click', resetBoard);

button.addEventListener('click', (e) => {
    window.scrollBy(0, 800);    
    destroyExistingCharts();
    getDataFromForm();
    if (country === 'yemen') {
        fetch(`json/yemenStrikes.json`).then(function(response) {
            return response.json();
          })
          .then(function(json) {
            let products = json.yemen;
            let displayMaximumStrikes = 0;
            let displayMaximumDeaths = 0;
            let displayMinimumDeaths = 0;
            let displayMaximumCivilians = 0;
            let displayMinimumCivilians = 0;
            let displayMaximumChildren = 0;
            let displayMinimumChildren = 0;
            for (let i=0; i<products.length; i++) { 
              displayMaximumStrikes += parseInt(products[i]['Maximum number of strikes']);
              displayMaximumDeaths += parseInt(products[i]["Maximum people killed"]);
              displayMinimumDeaths += parseInt(products[i]["Minimum people killed"]);
              displayMaximumCivilians += parseInt(products[i]["Maximum civilians reported killed"]);
              displayMinimumCivilians += parseInt(products[i]["Minimum civilians reported killed"]);
              displayMaximumChildren += parseInt(products[i]["Maximum children reported killed"]);
              displayMinimumChildren += parseInt(products[i]["Minimum children reported killed"]);
            }
            document.querySelector('.sectionHeader').innerHTML =`current statistics in ${country}`;
            document.querySelector('.displayStrikes').innerHTML = `${displayMaximumStrikes}`;
            document.querySelector('.displayDeaths').innerHTML = `${displayMinimumDeaths} - ${displayMaximumDeaths}`;
            document.querySelector('.displayCivilians').innerHTML = `${displayMinimumCivilians} - ${displayMaximumCivilians}`;
            document.querySelector('.displayChildren').innerHTML = `${displayMinimumChildren} - ${displayMaximumChildren}`
            let minimumStrikes = 0;
            let maximumStrikes = 0;

            let year2002Deaths = 0;
                let year2002Civilians = 0;
                let year2002Children = 0;
                let year2002MinInjuries = 0;
                let year2002MaxInjuries = 0;

                let year2009Deaths = 0;
                let year2009Civilians = 0;
                let year2009Children = 0;
                let year2009MinInjuries = 0;
                let year2009MaxInjuries = 0;

                let year2010Deaths = 0;
                let year2010Civilians = 0;
                let year2010Children = 0;
                let year2010MinInjuries = 0;
                let year2010MaxInjuries = 0;

                let year2011Deaths = 0;
                let year2011Civilians = 0;
                let year2011Children = 0;
                let year2011MinInjuries = 0;
                let year2011MaxInjuries = 0;

                let year2012Deaths = 0;
                let year2012Civilians = 0;
                let year2012Children = 0;
                let year2012MinInjuries = 0;
                let year2012MaxInjuries = 0;

                let year2013Deaths = 0;
                let year2013Civilians = 0;
                let year2013Children = 0;
                let year2013MinInjuries = 0;
                let year2013MaxInjuries = 0;

                let year2014Deaths = 0;
                let year2014Civilians = 0;
                let year2014Children = 0;
                let year2014MinInjuries = 0;
                let year2014MaxInjuries = 0;

                let year2015Deaths = 0;
                let year2015Civilians = 0;
                let year2015Children = 0;
                let year2015MinInjuries = 0;
                let year2015MaxInjuries = 0;

                let year2016Deaths = 0;
                let year2016Civilians = 0;
                let year2016Children = 0;
                let year2016MinInjuries = 0;
                let year2016MaxInjuries = 0;

                let year2017Deaths = 0;
                let year2017Civilians = 0;
                let year2017Children = 0;
                let year2017MinInjuries = 0;
                let year2017MaxInjuries = 0;

                let year2018Deaths = 0;
                let year2018Civilians = 0;
                let year2018Children = 0;
                let year2018MinInjuries = 0;
                let year2018MaxInjuries = 0;

                let year2019Deaths = 0;
                let year2019Civilians = 0;
                let year2019Children = 0;
                let year2019MinInjuries = 0;
                let year2019MaxInjuries = 0;

        let years = [];
        for (let i=0; i<products.length; i++) {
            let currentStrikeDate = products[i].Date;
            let year = currentStrikeDate.slice(6,10);
            if (!years.includes(year)) {
                years.push(year);
            }
            if (year === '2002') {
                year2002Deaths += parseInt(products[i]["Maximum people killed"]);
                year2002Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2002Children += parseInt(products[i]["Maximum children reported killed"]);
                year2002MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2002MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2009') {
                year2009Deaths += parseInt(products[i]["Maximum people killed"]);
                year2009Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2009Children += parseInt(products[i]["Maximum children reported killed"]);
                year2009MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2009MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2010') {
                year2010Deaths += parseInt(products[i]["Maximum people killed"]);
                year2010Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2010Children += parseInt(products[i]["Maximum children reported killed"]);
                year2010MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2010MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2011') {
                year2011Deaths += parseInt(products[i]["Maximum people killed"]);
                year2011Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2011Children += parseInt(products[i]["Maximum children reported killed"]);
                year2011MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2011MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2012') {
                year2012Deaths += parseInt(products[i]["Maximum people killed"]);
                year2012Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2012Children += parseInt(products[i]["Maximum children reported killed"]);
                year2012MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2012MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2013') {
                year2013Deaths += parseInt(products[i]["Maximum people killed"]);
                year2013Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2013Children += parseInt(products[i]["Maximum children reported killed"]);
                year2013MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2013MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2014') {
                year2014Deaths += parseInt(products[i]["Maximum people killed"]);
                year2014Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2014Children += parseInt(products[i]["Maximum children reported killed"]);
                year2014MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2014MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2015') {
                year2015Deaths += parseInt(products[i]["Maximum people killed"]);
                year2015Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2015Children += parseInt(products[i]["Maximum children reported killed"]);
                year2015MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2015MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2016') {
                year2016Deaths += parseInt(products[i]["Maximum people killed"]);
                year2016Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2016Children += parseInt(products[i]["Maximum children reported killed"]);
                year2016MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2016MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2017') {
                year2017Deaths += parseInt(products[i]["Maximum people killed"]);
                year2017Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2017Children += parseInt(products[i]["Maximum children reported killed"]);
                year2017MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2017MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2018') {
                year2018Deaths += parseInt(products[i]["Maximum people killed"]);
                year2018Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2018Children += parseInt(products[i]["Maximum children reported killed"]);
                year2018MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2018MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
            if (year === '2019') {
                year2019Deaths += parseInt(products[i]["Maximum people killed"]);
                year2019Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2019Children += parseInt(products[i]["Maximum children reported killed"]);
                year2019MinInjuries += parseInt(products[i]["Minimum people injured"]);
                year2019MaxInjuries += parseInt(products[i]["Maximum people injured"]);
            }
        }
        let deaths = [year2002Deaths, year2009Deaths, year2010Deaths, year2011Deaths, year2012Deaths, year2013Deaths, year2014Deaths, year2015Deaths, year2016Deaths, year2017Deaths,year2018Deaths, year2019Deaths];
        let civilians = [year2002Civilians, year2009Civilians, year2010Civilians, year2011Civilians, year2012Civilians, year2013Civilians, year2014Civilians, year2015Civilians, year2016Civilians, year2017Civilians,year2018Civilians, year2019Civilians];
        let children = [year2002Children,year2009Children, year2010Children, year2011Children, year2012Children, year2013Children, year2014Children, year2015Children, year2016Children, year2017Children,year2018Children, year2019Children];
        let minimumInjuries = [year2002MinInjuries,year2009MinInjuries,year2010MinInjuries, year2011MinInjuries,year2012MinInjuries,
          year2013MinInjuries,year2014MinInjuries,year2015MinInjuries,
          year2016MinInjuries,year2017MinInjuries,year2018MinInjuries,year2019MinInjuries];

        let maximumInjuries = [year2002MaxInjuries,year2009MaxInjuries,year2010MaxInjuries, year2011MaxInjuries,year2012MaxInjuries,
          year2013MaxInjuries,year2014MaxInjuries,year2015MaxInjuries,
          year2016MaxInjuries,year2017MaxInjuries,year2018MaxInjuries,year2019MaxInjuries];

          console.log('years: ', years)
            if (displayNumberOfStrikes) { // checks if the display strikes checkbox is checked
                
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
                    document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
                    document.querySelector('.strikesHeader').style.display = 'block';
                    document.querySelector('.strikesHeader').innerHTML = `confirmed strikes: ${minimumStrikes} - ${maximumStrikes}`;

                    window.firstChart = new Chart(document.getElementById("firstChart"), {
                    type: 'line',
                    options: {
                      scales: {
                        yAxes: [{
                          stacked: true,
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
                      labels: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
                      // labels: years,
                      datasets: [{ 
                          data: [1, 0, 0,0, 0, 0, 0, 0, 0, 3, 2, 41, 20, 32, 21, 40, 130, 37],
                          label: "Drone Strikes by Year",
                          borderColor: "#CE2D4F",
                          fill: true,
                          pointHoverBackgroundColor: '#CE2D4F',
                          pointRadius: 5,
                          pointBackgroundColor: '#CE2D4F',
                          pointHoverRadius: 10

                        }
                      ]
                    },
                  });
                  firstChartExists = true;

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
                } else {
                    document.querySelector('#firstChart').style.display = "none";
                    document.querySelector('.strikesHeader').style.display = "none";             
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
                document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;


                window.thirdChart = new Chart(document.getElementById("thirdChart"), {
                  type: 'line',
                  options: {
                    title: {
                      display: true,
                      text: `Casualties in ${country}`
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
                // window.thirdChart = new Chart(document.getElementById("thirdChart"), {
                //     type: 'bar',
                //     options: {
                //       scales: {
                //         yAxes: [{
                //           gridLines: {
                //             display: true,
                //             color: "rgba(255,99,132,0.2)"
                //           }
                //         }],
                //         xAxes: [{
                //           gridLines: {
                //             display: false,
                //           }
                //         }]
                //       },
                //     },
                //     data: {
                //       labels: ["Peopled Injured"],
                //       datasets: [
                //         {
                //           label: "Minimum",
                //           backgroundColor: "#CE2D4F",
                //           data: [minimumPeopleInjured]
                //         }, {
                //           label: "Maximum",
                //           backgroundColor: "#AB1132",
                //           data: [maximumPeopleInjured]
                //         }
                //       ]
                //     }
                // });
                thirdChartExists = true;
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
                document.querySelector('.deathsHeader').innerHTML = `casualties: ${minimumPeopleKilled} - ${maximumPeopleKilled}`;
                document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
                
                
        console.log('years:', years);
        console.log('minimumInjures yemen: ',minimumInjuries);
        console.log('maximumInjures yemen: ',maximumInjuries);

        console.log('deaths: ', deaths);
        console.log('civilians: ', civilians);
        console.log('children: ', children);

        window.secondChart = new Chart(document.getElementById("secondChart"), {
          type: 'line',
          options: {
            title: {
              display: true,
              text: `Casualties in ${country}`
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
              data: deaths,
              pointRadius: 5,
              pointBackgroundColor: '#CE2D4F',
              pointHoverRadius: 10,
              label: "total people killed",
              borderColor: "#CE2D4F",
              fill: true
            }, { 
              data: civilians,
              label: "civilians killed",
              pointRadius: 5,
              pointBackgroundColor: '#3E517A',
              pointHoverRadius: 10,
              borderColor: "#3E517A",
              fill: true
            }, { 
              data: children,
              pointRadius: 5,
              pointBackgroundColor: '#BBDEF0',
              pointHoverRadius: 10,
              label: "children killed",
              borderColor: "#BBDEF0",
              fill: true
            }
          ]
          },
        });
    }
    
              //   window.secondChart = new Chart(document.getElementById("secondChart"), {
              //     type: 'doughnut',
              //     data: {
              //       datasets: [{
              //         backgroundColor: ["#CE2D4F",'#9C1933', '#4E0D1A'],
              //         borderColor: "#CE2D4F",
              //         borderWidth: '0',
              //         data: [minimumPeopleKilled - minimumCiviliansKilled - minimumChildrenKilled,minimumCiviliansKilled,minimumChildrenKilled]
              //       }],
              //       labels: ["Combatents", "Civilians", "Children"],
              //       config: {
              //         animateRotate: true,
              //       }
              //   },
              // });
              
              secondChartExists = true;
              if (!displayNumberOfStrikes && !displayPeopleInjured && !displayPeopleKilled) {
                resetBoard()
              }
              }

          )}
    if (country === 'somalia') {
        fetch(`json/somaliaStrikes.json`).then(function(response) {
            return response.json();
          })
          .then(function(json) {
            let products = json.somalia;
            let displayMaximumStrikes = 0;
            let displayMaximumDeaths = 0;
            let displayMinimumDeaths = 0;
            let displayMaximumCivilians = 0;
            let displayMinimumCivilians = 0;
            let displayMaximumChildren = 0;
            let displayMinimumChildren = 0;
            for (let i=0; i<products.length; i++) {
              displayMaximumStrikes += parseInt(products[i]['Maximum strikes']);
              displayMaximumDeaths += parseInt(products[i]["Maximum people killed"]);
              displayMinimumDeaths += parseInt(products[i]["Minimum people killed"]);
              displayMaximumCivilians += parseInt(products[i]["Maximum civilians killed"]);
              displayMinimumCivilians += parseInt(products[i]["Minimum civilians killed"]);
              displayMaximumChildren += parseInt(products[i]["Maximum children killed"]);
              displayMinimumChildren += parseInt(products[i]["Minimum children killed"]);
            }
            document.querySelector('.sectionHeader').innerHTML =`current statistics in ${country}`;
            document.querySelector('.displayStrikes').innerHTML = `${displayMaximumStrikes}`;
            document.querySelector('.displayDeaths').innerHTML = `${displayMinimumDeaths} - ${displayMaximumDeaths}`;
            document.querySelector('.displayCivilians').innerHTML = `${displayMinimumCivilians} - ${displayMaximumCivilians}`;
            document.querySelector('.displayChildren').innerHTML = `${displayMinimumChildren} - ${displayMaximumChildren}`
            let minimumStrikes = 0;
            let maximumStrikes = 0;

          if (displayNumberOfStrikes) {
              
              for (let i=0; i<products.length; i++) {
                  minimumStrikes += parseInt(products[i]['Minimum number of strikes']);
                  maximumStrikes += parseInt(products[i]['Maximum strikes']);
              }
              if (displayPeopleKilled) {
                  document.querySelector('#secondChart').style.display = "flex";
              } else {
                  document.querySelector('#secondChart').style.display = "none";
                  secondChart.destroy();
                  document.querySelector('.deathsHeader').style.display = "none"
              }
              if (displayPeopleInjured) {
                  document.querySelector('#thirdChart').style.display = "flex";
              } else {
                  document.querySelector('.injuriesHeader').style.display = "none";
                  document.querySelector('#thirdChart').style.display = "none";
                  thirdChart.destroy()
              }
                  document.querySelector('.chartInformation').style.display = 'flex';
                  document.querySelector('#firstChart').style.display = "flex";
                  document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
                  document.querySelector('.strikesHeader').style.display = 'block';
                  document.querySelector('.strikesHeader').innerHTML = `Confirmed Strikes: ${maximumStrikes}`;
                  window.firstChart = new Chart(document.getElementById("firstChart"), {
                  type: 'line',
                  options: {
                    scales: {
                      yAxes: [{
                        stacked: true,
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
                    labels: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
                    datasets: [{ 
                        data: [5,3,1,0,5,3,2,1,3,11,14,35,45,52],
                        label: "Drone Strikes by Year",
                        borderColor: "#CE2D4F",
                        fill: true,
                        pointHoverBackgroundColor: '#CE2D4F',
                        pointRadius: 5,
                        pointBackgroundColor: '#CE2D4F',
                        pointHoverRadius: 10
                      }
                    ]
                  },
                });
                firstChartExists = true;
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
              } else {
                  document.querySelector('#firstChart').style.display = "none";
                  document.querySelector('.strikesHeader').style.display = "none";             
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
              document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
              window.thirdChart = new Chart(document.getElementById("thirdChart"), {
                  type: 'bar',
                  options: {
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
                    labels: ["People Injured"],
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
              thirdChartExists = true;

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
                  minimumCiviliansKilled += parseInt(products[i]['Minimum civilians killed']);
                  maximumCiviliansKilled += parseInt(products[i]['Maximum civilians killed']);
                  minimumChildrenKilled += parseInt(products[i]['Minimum children killed']);
                  maximumChildrenKilled += parseInt(products[i]['Maximum children killed']);
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
              document.querySelector('.deathsHeader').innerHTML = `casualties: ${minimumPeopleKilled} - ${maximumPeopleKilled}`;
              document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;

                let year2007Deaths = 0;
                let year2007Civilians = 0;
                let year2007Children = 0;

                let year2008Deaths = 0;
                let year2008Civilians = 0;
                let year2008Children = 0;

                let year2009Deaths = 0;
                let year2009Civilians = 0;
                let year2009Children = 0;

                let year2010Deaths = 0;
                let year2010Civilians = 0;
                let year2010Children = 0;

                let year2011Deaths = 0;
                let year2011Civilians = 0;
                let year2011Children = 0;

                let year2012Deaths = 0;
                let year2012Civilians = 0;
                let year2012Children = 0;

                let year2013Deaths = 0;
                let year2013Civilians = 0;
                let year2013Children = 0;

                let year2014Deaths = 0;
                let year2014Civilians = 0;
                let year2014Children = 0;

                let year2015Deaths = 0;
                let year2015Civilians = 0;
                let year2015Children = 0;

                let year2016Deaths = 0;
                let year2016Civilians = 0;
                let year2016Children = 0;

                let year2017Deaths = 0;
                let year2017Civilians = 0;
                let year2017Children = 0;

                let year2018Deaths = 0;
                let year2018Civilians = 0;
                let year2018Children = 0;

                let year2019Deaths = 0;
                let year2019Civilians = 0;
                let year2019Children = 0;


        // let products = json.yemen;
        let years = [];
        for (let i=0; i<products.length; i++) {
            let currentStrikeDate = products[i].Date;
            let year = currentStrikeDate.slice(6,10);
            if (!years.includes(year)) {
                years.push(year);
            }
            if (year === '2007') {
                year2007Deaths += parseInt(products[i]["Maximum people killed"]);
                year2007Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2007Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2008') {
              year2008Deaths += parseInt(products[i]["Maximum people killed"]);
              year2008Civilians += parseInt(products[i]["Maximum civilians killed"]);
              year2008Children += parseInt(products[i]["Maximum children killed"]);
          }
            if (year === '2009') {
                year2009Deaths += parseInt(products[i]["Maximum people killed"]);
                year2009Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2009Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2010') {
                year2010Deaths += parseInt(products[i]["Maximum people killed"]);
                year2010Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2010Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2011') {
                year2011Deaths += parseInt(products[i]["Maximum people killed"]);
                year2011Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2011Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2012') {
                year2012Deaths += parseInt(products[i]["Maximum people killed"]);
                year2012Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2012Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2013') {
                year2013Deaths += parseInt(products[i]["Maximum people killed"]);
                year2013Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2013Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2014') {
                year2014Deaths += parseInt(products[i]["Maximum people killed"]);
                year2014Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2014Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2015') {
                year2015Deaths += parseInt(products[i]["Maximum people killed"]);
                year2015Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2015Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2016') {
                year2016Deaths += parseInt(products[i]["Maximum people killed"]);
                year2016Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2016Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2017') {
                year2017Deaths += parseInt(products[i]["Maximum people killed"]);
                year2017Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2017Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2018') {
                year2018Deaths += parseInt(products[i]["Maximum people killed"]);
                year2018Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2018Children += parseInt(products[i]["Maximum children killed"]);
            }
            if (year === '2019') {
                year2019Deaths += parseInt(products[i]["Maximum people killed"]);
                year2019Civilians += parseInt(products[i]["Maximum civilians killed"]);
                year2019Children += parseInt(products[i]["Maximum children killed"]);
            }
        }
        let deaths = [year2007Deaths,year2008Deaths, year2009Deaths, year2010Deaths, year2011Deaths, year2012Deaths, year2013Deaths, year2014Deaths, year2015Deaths, year2016Deaths, year2017Deaths,year2018Deaths, year2019Deaths];
        let civilians = [year2007Civilians,year2008Deaths, year2009Civilians, year2010Civilians, year2011Civilians, year2012Civilians, year2013Civilians, year2014Civilians, year2015Civilians, year2016Civilians, year2017Civilians,year2018Civilians, year2019Civilians];
        let children = [year2007Children,year2008Deaths,year2009Children, year2010Children, year2011Children, year2012Children, year2013Children, year2014Children, year2015Children, year2016Children, year2017Children,year2018Children, year2019Children];

        console.log('somalia years:', years)
        console.log('deaths: ', deaths);
        console.log('civilians: ', civilians);
        console.log('children: ', children);

        window.secondChart = new Chart(document.getElementById("secondChart"), {
          type: 'line',
          options: {
            title: {
              display: true,
              text: `Casualties in ${country}`
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
                data: deaths,
                label: "total people killed",
                pointRadius: 5,
                pointBackgroundColor: '#CE2D4F',
                pointHoverRadius: 10,
                borderColor: "#CE2D4F",
                fill: true
              }, { 
                data: civilians,
                label: "civilians killed",
                pointRadius: 5,
                pointBackgroundColor: '#3E517A',
                pointHoverRadius: 10,
                borderColor: "#3E517A",
                fill: true
              }, { 
                data: children,
                label: "children killed",
                pointRadius: 5,
                pointBackgroundColor: '#BBDEF0',
                pointHoverRadius: 10,
                borderColor: "#BBDEF0",
                fill: true
              }
            ]
          },
        });

            //   window.secondChart = new Chart(document.getElementById("secondChart"), {
            //     type: 'doughnut',
            //     data: {
            //       datasets: [{
            //         backgroundColor: ["#CE2D4F",'#9C1933', '#4E0D1A'],
            //         borderColor: "#CE2D4F",
            //         borderWidth: '0',
            //         data: [maximumPeopleKilled - maximumCiviliansKilled - maximumChildrenKilled,maximumCiviliansKilled,maximumChildrenKilled]
            //       }],
            //       labels: ["Combatents", "Civilians", "Children"],
            //       config: {
            //         animateRotate: true,
            //       }
            //   },
            // });
          secondChartExists = true;
          } 
          if (!displayNumberOfStrikes && !displayPeopleInjured && !displayPeopleKilled) {
            resetBoard()
          }
        })
        // .catch(function(err) {
        //   console.log('Fetch problem: ' + err.message);
        // });
  }
  if (country === 'afghanistan') {
    fetch(`json/afghanistanStrikes.json`).then(function(response) {
        return response.json();
      })
      .then(function(json) {
        let products = json.afghanistan;
        let labels=[];
        let displayMaximumStrikes = 0;
        let displayMaximumDeaths = 0;
        let displayMinimumDeaths = 0;
        let displayMaximumCivilians = 0;
        let displayMinimumCivilians = 0;
        let displayMaximumChildren = 0;
        let displayMinimumChildren = 0;
        for (let i=0; i<products.length; i++) {
          displayMaximumStrikes += parseInt(products[i]['Maximum strikes']);
          displayMaximumDeaths += parseInt(products[i]["Maximum total people killed"]);
          displayMinimumDeaths += parseInt(products[i]["Minimum total people killed"]);
          displayMaximumCivilians += parseInt(products[i]["Maximum civilians reported killed"]);
          displayMinimumCivilians += parseInt(products[i]["Minimum civilians reported killed"]);
          displayMaximumChildren += parseInt(products[i]["Maximum children reported killed"]);
          displayMinimumChildren += parseInt(products[i]["Minimum children reported killed"]);
        }
        document.querySelector('.sectionHeader').innerHTML =`current statistics in ${country}`;
        document.querySelector('.displayStrikes').innerHTML = `${displayMaximumStrikes}`;
        document.querySelector('.displayDeaths').innerHTML = `${displayMinimumDeaths} - ${displayMaximumDeaths}`;
        document.querySelector('.displayCivilians').innerHTML = `${displayMinimumCivilians} - ${displayMaximumCivilians}`;
        document.querySelector('.displayChildren').innerHTML = `${displayMinimumChildren} - ${displayMaximumChildren}`
        let minimumStrikes = 0;
        let maximumStrikes = 0;

      
      if (displayNumberOfStrikes) {
          
          for (let i=0; i<products.length; i++) {
              minimumStrikes += parseInt(products[i]['Minimum strikes']);
              maximumStrikes += parseInt(products[i]['Maximum strikes']);
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
              document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
              document.querySelector('.strikesHeader').style.display = 'block';
              document.querySelector('.strikesHeader').innerHTML = `confirmed strikes: ${minimumStrikes}`;
              window.firstChart = new Chart(document.getElementById("firstChart"), {
              type: 'line',
              options: {
                scales: {
                  yAxes: [{
                    stacked: true,
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
                labels: ['Jan 2015','Feb 2015', 'Mar 2015', 'April 2015', 'May 2015','Jun 2015',
                 'Jul 2015', 'Aug 2015', 'Sep 2015', 'Oct 2015', 'Nov 2015', 'Dec 2015',
                 'Jan 2016','Feb 2016', 'Mar 2016', 'April 2016', 'May 2016','Jun 2016',
                 'Jul 2016', 'Aug 2016', 'Sep 2016', 'Oct 2016', 'Nov 2016', 'Dec 2016',
                 'Jan 2017','Feb 2017', 'Mar 2017', 'April 2017', 'May 2017','Jun 2017',
                 'Jul 2017', 'Aug 2017', 'Sep 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017',
                 'Jan 2018','Feb 2018', 'Mar 2018', 'April 2018', 'May 2018','Jun 2018',
                 'Jul 2018', 'Aug 2018', 'Sep 2018', 'Oct 2018', 'Nov 2018', 'Dec 2018',
                 'Jan 2019','Feb 2019', 'Mar 2019', 'April 2019', 'May 2019','Jun 2019',
                 'Jul 2019', 'Aug 2019', 'Sep 2019',],
                datasets: [{ 
                    data: [10,4,9,2,14,21,22,32,18,82,9,12,41,17,
                    5,9,18,22,92,80,140,175,11,461,111,161,176,450,
                    398,307,358,387,212,10,25,14,9,9,14,18,20,105,8,
                    39,465,392,495,411,368,265,301,683,719,568,
                    537,810,1113],
                    label: "Drone Strikes by Year",
                    borderColor: "#CE2D4F",
                    pointHoverBackgroundColor: '#CE2D4F',
                    pointRadius: 5,
                    pointBackgroundColor: '#CE2D4F',
                    pointHoverRadius: 10,
                    fill: true,
                    fillColor: "rgba(255,99,132,0.9)"
                  }
                ]
              },
            });
            firstChartExists = true;
      }
      let minimumPeopleInjured = 0;
      let maximumPeopleInjured = 0;
      if (displayPeopleInjured) {
          for(let i=0; i<products.length; i++) {
              minimumPeopleInjured += parseInt(products[i]['Minimum reported injured']);
              maximumPeopleInjured += parseInt(products[i]['Maximum reported injured']);
          }
          if (displayNumberOfStrikes) {
              document.querySelector('#firstChart').style.display = "flex";
          } else {
              document.querySelector('#firstChart').style.display = "none";
              document.querySelector('.strikesHeader').style.display = "none";             
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
          document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
          window.thirdChart = new Chart(document.getElementById("thirdChart"), {
              type: 'bar',
              options: {
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
                labels: ["People Injured"],
                datasets: [
                  {
                    label: "Minimum",
                    backgroundColor: "#CE2D4F",
                    data: [562]
                  }, {
                    label: "Maximum",
                    backgroundColor: "#AB1132",
                    data: [844]
                  }
                ]
              }
          });
          thirdChartExists = true;
      }
      let minimumPeopleKilled = 0;
      let maximumPeopleKilled = 0;
      let minimumCiviliansKilled = 0;
      let maximumCiviliansKilled = 0;
      let minimumChildrenKilled = 0;
      let maximumChildrenKilled = 0;
      if (displayPeopleKilled) {  
          for(let i=0; i<products.length; i++) {
              minimumPeopleKilled += parseInt(products[i]['Minimum total people killed']);
              maximumPeopleKilled += parseInt(products[i]['Maximum total people killed']);
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
          document.querySelector('.deathsHeader').innerHTML = `casualties: ${minimumPeopleKilled} - ${maximumPeopleKilled}`;
          document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;

                let year2015Deaths = 0;
                let year2015Civilians = 0;
                let year2015Children = 0;

                let year2016Deaths = 0;
                let year2016Civilians = 0;
                let year2016Children = 0;

                let year2017Deaths = 0;
                let year2017Civilians = 0;
                let year2017Children = 0;

                let year2018Deaths = 0;
                let year2018Civilians = 0;
                let year2018Children = 0;

                let year2019Deaths = 0;
                let year2019Civilians = 0;
                let year2019Children = 0;

        let years = [];
        for (let i=0; i<products.length; i++) {
            let currentStrikeDate = products[i].Date;
            let year = currentStrikeDate.slice(6,10);
            if (!years.includes(year)) {
                years.push(year);
            }
            if (year === '2015') {
                year2015Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2015Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2015Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2016') {
                year2016Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2016Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2016Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2017') {
                year2017Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2017Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2017Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2018') {
                year2018Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2018Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2018Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2019') {
                year2019Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2019Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2019Children += parseInt(products[i]["Maximum children reported killed"]);
            }
        }
        let deaths = [year2015Deaths, year2016Deaths, year2017Deaths,year2018Deaths, year2019Deaths];
        let civilians = [year2015Civilians, year2016Civilians, year2017Civilians,year2018Civilians, year2019Civilians];
        let children =  [year2015Children, year2016Children, year2017Children,year2018Children, year2019Children];

        console.log('afghanistan years:', years)
        console.log('deaths: ', deaths);
        console.log('civilians: ', civilians);
        console.log('children: ', children);

        window.secondChart = new Chart(document.getElementById("secondChart"), {
          type: 'line',
          options: {
            title: {
              display: true,
              text: `Casualties in ${country}`
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
              data: deaths,
              label: "total people killed",
              pointRadius: 5,
              pointBackgroundColor: '#CE2D4F',
              pointHoverRadius: 10,
              borderColor: "#CE2D4F",
              fill: true
            }, { 
              data: civilians,
              label: "civilians killed",
              pointRadius: 5,
              pointBackgroundColor: '#3E517A',
              pointHoverRadius: 10,
              borderColor: "#3E517A",
              fill: true
            }, { 
              data: children,
              label: "children killed",
              pointRadius: 5,
              pointBackgroundColor: '#BBDEF0',
              pointHoverRadius: 10,
              borderColor: "#BBDEF0",
              fill: true
            }
          ]
          },
        });
        //   window.secondChart = new Chart(document.getElementById("secondChart"), {
        //     type: 'doughnut',
        //     data: {
        //       datasets: [{
        //         backgroundColor: ["#CE2D4F",'#9C1933', '#4E0D1A'],
        //         borderColor: "#CE2D4F",
        //         borderWidth: '0',
        //         data: [minimumPeopleKilled - minimumCiviliansKilled - minimumChildrenKilled,minimumCiviliansKilled,minimumChildrenKilled]
        //       }],
        //       labels: ["Combatents", "Civilians", "Children"],
        //       config: {
        //         animateRotate: true,
        //       }
        //   },
        // });
        secondChartExists = true;
      } 
      if (!displayNumberOfStrikes && !displayPeopleInjured && !displayPeopleKilled) {
        resetBoard()
      }
    })
    .catch(function(err) {
      console.log('Fetch problem: ' + err.message);
    });

}
if (country === 'pakistan') {
  fetch(`json/pakistanStrikes.json`).then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let products = json.pakistan;
      let labels=[];
      let displayMaximumStrikes = 0;
      let displayMaximumDeaths = 0;
      let displayMinimumDeaths = 0;
      let displayMaximumCivilians = 0;
      let displayMinimumCivilians = 0;
      let displayMaximumChildren = 0;
      let displayMinimumChildren = 0;
      for (let i=0; i<products.length; i++) {
        displayMaximumStrikes = products[products.length - 1].Index;
        displayMaximumDeaths += parseInt(products[i]["Maximum total people killed"]);
        displayMinimumDeaths += parseInt(products[i]["Minimum total people killed"]);
        displayMaximumCivilians += parseInt(products[i]["Maximum civilians reported killed"]);
        displayMinimumCivilians += parseInt(products[i]["Minimum civilians reported killed"]);
        displayMaximumChildren += parseInt(products[i]["Maximum children reported killed"]);
        displayMinimumChildren += parseInt(products[i]["Minimum children reported killed"]);
      }
      document.querySelector('.sectionHeader').innerHTML =`current statistics in ${country}`;
      document.querySelector('.displayStrikes').innerHTML = `${displayMaximumStrikes}`;
      document.querySelector('.displayDeaths').innerHTML = `${displayMinimumDeaths} - ${displayMaximumDeaths}`;
      document.querySelector('.displayCivilians').innerHTML = `${displayMinimumCivilians} - ${displayMaximumCivilians}`;
      document.querySelector('.displayChildren').innerHTML = `${displayMinimumChildren} - ${displayMaximumChildren}`
      let minimumStrikes = 0;
      let maximumStrikes = 0;

    
    if (displayNumberOfStrikes) {
        
        for (let i=0; i<products.length; i++) {
            minimumStrikes += parseInt(products[i]['Minimum strikes']);
            maximumStrikes += parseInt(products[i]['Maximum strikes']);
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
            document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
            document.querySelector('.strikesHeader').style.display = 'block';
            document.querySelector('.strikesHeader').innerHTML = `Confirmed Strikes: ${products.length}`;
        window.firstChart = new Chart(document.getElementById("firstChart"), {
            type: 'line',
            options: {
              scales: {
                yAxes: [{
                  stacked: true,
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
              labels: [2004,2005,2006,2007,2008, 2009, 2010,2011,2012,2013,2014,2015,2016,2017,2018],
              datasets: [{ 
                  data: [1,3,2,5,38,54,128,75,50,27,25,13,3,5,1],
                  label: "Drone Strikes by Year",
                  borderColor: "#CE2D4F",
                  fill: true,
                  pointHoverBackgroundColor: '#CE2D4F',
                  pointRadius: 5,
                  pointBackgroundColor: '#CE2D4F',
                  pointHoverRadius: 10
                }
              ]
            },
          });
          firstChartExists = true;
    }
    let minimumPeopleInjured = 0;
    let maximumPeopleInjured = 0;
    if (displayPeopleInjured) {
        for(let i=0; i<products.length; i++) {
            minimumPeopleInjured += parseInt(products[i]['Minimum reported injured']);
            maximumPeopleInjured += parseInt(products[i]['Maximum reported injured']);
        }
        if (displayNumberOfStrikes) {
            document.querySelector('#firstChart').style.display = "flex";
        } else {
            document.querySelector('#firstChart').style.display = "none";
            document.querySelector('.strikesHeader').style.display = "none";             
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
        document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
        window.thirdChart = new Chart(document.getElementById("thirdChart"), {
            type: 'bar',
            options: {
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
              labels: ["People Injured"],
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
        thirdChartExists = true;
    }
    let minimumPeopleKilled = 0;
    let maximumPeopleKilled = 0;
    let minimumCiviliansKilled = 0;
    let maximumCiviliansKilled = 0;
    let minimumChildrenKilled = 0;
    let maximumChildrenKilled = 0;
    if (displayPeopleKilled) {  
        for(let i=0; i<products.length; i++) {
            minimumPeopleKilled += parseInt(products[i]['Minimum total people killed']);
            maximumPeopleKilled += parseInt(products[i]['Maximum total people killed']);
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
        document.querySelector('.deathsHeader').innerHTML = `casualties: ${minimumPeopleKilled} - ${maximumPeopleKilled}`;
        document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;

                let year2004Deaths = 0;
                let year2004Civilians = 0;
                let year2004Children = 0;

                let year2005Deaths = 0;
                let year2005Civilians = 0;
                let year2005Children = 0;

                let year2006Deaths = 0;
                let year2006Civilians = 0;
                let year2006Children = 0;

                let year2007Deaths = 0;
                let year2007Civilians = 0;
                let year2007Children = 0;

                let year2008Deaths = 0;
                let year2008Civilians = 0;
                let year2008Children = 0;

                let year2009Deaths = 0;
                let year2009Civilians = 0;
                let year2009Children = 0;

                let year2010Deaths = 0;
                let year2010Civilians = 0;
                let year2010Children = 0;

                let year2011Deaths = 0;
                let year2011Civilians = 0;
                let year2011Children = 0;

                let year2012Deaths = 0;
                let year2012Civilians = 0;
                let year2012Children = 0;

                let year2013Deaths = 0;
                let year2013Civilians = 0;
                let year2013Children = 0;

                let year2014Deaths = 0;
                let year2014Civilians = 0;
                let year2014Children = 0;

                let year2015Deaths = 0;
                let year2015Civilians = 0;
                let year2015Children = 0;

                let year2016Deaths = 0;
                let year2016Civilians = 0;
                let year2016Children = 0;

                let year2017Deaths = 0;
                let year2017Civilians = 0;
                let year2017Children = 0;

                let year2018Deaths = 0;
                let year2018Civilians = 0;
                let year2018Children = 0;

                let year2019Deaths = 0;
                let year2019Civilians = 0;
                let year2019Children = 0;

        let years = [];
        for (let i=0; i<products.length; i++) {
            let currentStrikeDate = products[i].Date;
            let year = currentStrikeDate.slice(6,10);
            if (!years.includes(year)) {
                years.push(year);
            }
            if (year === '2004') {
                year2004Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2004Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2004Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2005') {
                year2005Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2005Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2005Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2006') {
              year2006Deaths += parseInt(products[i]["Maximum total people killed"]);
              year2006Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
              year2006Children += parseInt(products[i]["Maximum children reported killed"]);
          }
          if (year === '2007') {
            year2007Deaths += parseInt(products[i]["Maximum total people killed"]);
            year2007Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
            year2007Children += parseInt(products[i]["Maximum children reported killed"]);
           }  
           if (year === '2008') {
            year2008Deaths += parseInt(products[i]["Maximum total people killed"]);
            year2008Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
            year2008Children += parseInt(products[i]["Maximum children reported killed"]);
           }  
            if (year === '2009') {
                year2009Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2009Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2009Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2010') {
                year2010Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2010Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2010Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2011') {
                year2011Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2011Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2011Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2012') {
                year2012Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2012Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2012Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2013') {
                year2013Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2013Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2013Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2014') {
                year2014Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2014Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2014Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2015') {
                year2015Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2015Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2015Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2016') {
                year2016Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2016Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2016Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2017') {
                year2017Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2017Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2017Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2018') {
                year2018Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2018Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2018Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2019') {
                year2019Deaths += parseInt(products[i]["Maximum total people killed"]);
                year2019Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2019Children += parseInt(products[i]["Maximum children reported killed"]);
            }
        }
        let deaths = [year2004Deaths, year2005Deaths, year2006Deaths, year2007Deaths, year2008Deaths, year2009Deaths, year2010Deaths, year2011Deaths, year2012Deaths, year2013Deaths, year2014Deaths, year2015Deaths, year2016Deaths, year2017Deaths,year2018Deaths, year2019Deaths];
        let civilians = [year2004Civilians, year2005Civilians, year2006Civilians, year2007Civilians, year2008Civilians, year2009Civilians, year2010Civilians, year2011Civilians, year2012Civilians, year2013Civilians, year2014Civilians, year2015Civilians, year2016Civilians, year2017Civilians,year2018Civilians, year2019Civilians];
        let children = [year2004Children, year2005Children, year2006Children, year2007Children, year2008Children,year2009Children, year2010Children, year2011Children, year2012Children, year2013Children, year2014Children, year2015Children, year2016Children, year2017Children,year2018Children, year2019Children];

        console.log('pakistan years:', years)
        console.log('deaths: ', deaths);
        console.log('civilians: ', civilians);
        console.log('children: ', children);

        window.secondChart = new Chart(document.getElementById("secondChart"), {
          type: 'line',
          options: {
            title: {
              display: true,
              text: `Casualties in ${country}`
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
              data: deaths,
              label: "total people killed",
              pointRadius: 5,
              pointBackgroundColor: '#CE2D4F',
              pointHoverRadius: 10,
              borderColor: "#CE2D4F",
              fill: true
            }, { 
              data: civilians,
              label: "civilians killed",
              pointRadius: 5,
              pointBackgroundColor: '#3E517A',
              pointHoverRadius: 10,
              borderColor: "#3E517A",
              fill: true
            }, { 
              data: children,
              label: "children killed",
              pointRadius: 5,
              pointBackgroundColor: '#BBDEF0',
              pointHoverRadius: 10,
              borderColor: "#BBDEF0",
              fill: true
            }
          ]
          },
        });
      //   window.secondChart = new Chart(document.getElementById("secondChart"), {
      //     type: 'doughnut',
      //     data: {
      //       datasets: [{
      //         backgroundColor: ["#CE2D4F",'#9C1933', '#4E0D1A'],
      //         borderColor: "#CE2D4F",
      //         borderWidth: '0',
      //         data: [minimumPeopleKilled - minimumChildrenKilled - minimumCiviliansKilled,minimumCiviliansKilled,minimumChildrenKilled]
      //       }],
      //       labels: ["Combatents", "Civilians", "Children"]
      //   },
      // });
      secondChartExists = true;
    } 
    if (!displayNumberOfStrikes && !displayPeopleInjured && !displayPeopleKilled) {
      resetBoard()
    }
  })
  .catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });

}
  
  // else {
  //     console.log('country: ', country)
  //   }
});
