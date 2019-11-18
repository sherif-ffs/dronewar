const button = document.querySelector('button');
let submitValue;
let products;
let firstChartExists = false;
let secondChartExists = false;
let thirdChartExists = false;
const closeButtons = document.querySelectorAll('.close');
const clearButton = document.querySelector('.clear');

function findPos(obj) {
  let curtop = 0;
  if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
  return [curtop];
  }
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
  document.querySelector('.displayStrikes').innerHTML = `11,928`;
  document.querySelector('.displayDeaths').innerHTML = `9,331 - 16,959`;
  document.querySelector('.displayCivilians').innerHTML = `917 - 1,995`;
  document.querySelector('.displayChildren').innerHTML = `286 - 457`;
  window.scroll(0,findPos(document.getElementById("title")));
  firstChartExists = false;
  secondChartExists = false;
  thirdChartExists = false;
}
closeButtons.forEach((button) => {
  button.addEventListener('click', resetBoard);
})
clearButton.addEventListener('click', resetBoard)

button.addEventListener('click', (e) => {
    if (secondChartExists) {
      window.secondChart.destroy();
      console.log('window.secondChart.destroy():',window.secondChart.destroy())
      secondChartExists = false;
    }
    if (thirdChartExists) {
      window.thirdChart.destroy();
      console.log('window.thirdChart.destroy():',window.thirdChart.destroy());
      thirdChartExists = false;
    }
    if (firstChartExists) {
      window.firstChart.destroy();
      console.log('window.firstChart.destroy():',window.firstChart.destroy());      
      firstChartExists = false;
    }
    country = document.querySelector('.country').value;
    displayPeopleKilled = document.querySelector('.displayPeopleKilled').checked;
      displayPeopleInjured = document.querySelector('.displayPeopleInjured').checked;
      displayNumberOfStrikes = document.querySelector('.displayNumberOfStrikes').checked;
    if (country === 'yemen') {
        fetch(`strikes/yemenStrikes.json`).then(function(response) {
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
                  document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
                    document.querySelector('.strikesHeader').style.display = 'block';
                    document.querySelector('.strikesHeader').innerHTML = `Confirmed Strikes: ${maximumStrikes}`;
                    window.firstChart = new Chart(document.getElementById("firstChart"), {
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
                document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
                window.thirdChart = new Chart(document.getElementById("thirdChart"), {
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
                document.querySelector('.deathsHeader').innerHTML = `Deaths: ${minimumPeopleKilled} - ${maximumPeopleKilled}`;
                document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
                window.secondChart = new Chart(document.getElementById("secondChart"), {
                  type: 'doughnut',
                  data: {
                    datasets: [{
                      backgroundColor: ["#CE2D4F",'#9C1933', '#4E0D1A'],
                      borderColor: "#CE2D4F",
                      borderWidth: '0',
                      data: [minimumPeopleKilled - minimumCiviliansKilled - minimumChildrenKilled,minimumCiviliansKilled,minimumChildrenKilled]
                    }],
                    labels: ["Combatents", "Civilians", "Children"],
                    config: {
                      animateRotate: true,
                    }
                },
              });
              secondChartExists = true;
              console.log('secondChartExists: ', secondChartExists)
            } 
            if (!displayNumberOfStrikes && !displayPeopleInjured && !displayPeopleKilled) {
              resetBoard()
            }
          })
          .catch(function(err) {
            console.log('Fetch problem: ' + err.message);
          });

    } 
    if (country === 'somalia') {
        fetch(`strikes/somaliaStrikes.json`).then(function(response) {
            return response.json();
          })
          .then(function(json) {
            let products = json.somalia;
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
                  data: {
                    labels: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
                    datasets: [{ 
                        data: [5,3,1,0,5,3,2,1,3,11,14,35,45,52],
                        label: "Number Of Drone Strikes",
                        borderColor: "#CE2D4F",
                        fill: true,
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
              document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
              window.thirdChart = new Chart(document.getElementById("thirdChart"), {
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
              document.querySelector('.deathsHeader').innerHTML = `Deaths: ${minimumPeopleKilled} - ${maximumPeopleKilled}`;
              document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
              window.secondChart = new Chart(document.getElementById("secondChart"), {
                type: 'doughnut',
                data: {
                  datasets: [{
                    backgroundColor: ["#CE2D4F",'#9C1933', '#4E0D1A'],
                    borderColor: "#CE2D4F",
                    borderWidth: '0',
                    data: [maximumPeopleKilled - maximumCiviliansKilled - maximumChildrenKilled,maximumCiviliansKilled,maximumChildrenKilled]
                  }],
                  labels: ["Combatents", "Civilians", "Children"],
                  config: {
                    animateRotate: true,
                  }
              },
            });
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
    fetch(`strikes/afghanistanStrikes.json`).then(function(response) {
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
                    label: "Number Of Drone Strikes",
                    borderColor: "#CE2D4F",
                    fill: true,
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
          document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
          window.thirdChart = new Chart(document.getElementById("thirdChart"), {
              type: 'horizontalBar',
              data: {
                labels: ["Injured"],
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
          document.querySelector('.deathsHeader').innerHTML = `minimum peopled killed: ${minimumPeopleKilled}`;
          document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
          window.secondChart = new Chart(document.getElementById("secondChart"), {
            type: 'doughnut',
            data: {
              datasets: [{
                backgroundColor: ["#CE2D4F",'#9C1933', '#4E0D1A'],
                borderColor: "#CE2D4F",
                borderWidth: '0',
                data: [minimumPeopleKilled - minimumCiviliansKilled - minimumChildrenKilled,minimumCiviliansKilled,minimumChildrenKilled]
              }],
              labels: ["Combatents", "Civilians", "Children"],
              config: {
                animateRotate: true,
              }
          },
        });
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
  fetch(`strikes/pakistanStrikes.json`).then(function(response) {
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
        displayMaximumStrikes += parseInt(products[i].Index);
        displayMaximumDeaths += parseInt(products[i]["Maximum total people killed"]);
        displayMinimumDeaths += parseInt(products[i]["Minimum total people killed"]);
        displayMaximumCivilians += parseInt(products[i]["Maximum civilians reported killed"]);
        displayMinimumCivilians += parseInt(products[i]["Minimum civilians reported killed"]);
        displayMaximumChildren += parseInt(products[i]["Maximum children reported killed"]);
        displayMinimumChildren += parseInt(products[i]["Minimum children reported killed"]);
      }
      document.querySelector('.sectionHeader').innerHTML =`current statistics in ${country}`;
      document.querySelector('.displayStrikes').innerHTML = `430`;
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
            document.querySelector('.strikesHeader').innerHTML = `Confirmed Strikes: 5,888`;
        window.firstChart = new Chart(document.getElementById("firstChart"), {
            type: 'line',
            data: {
              labels: [2004,2005,2006,2007,2008, 2009, 2010,2011,2012,2013,2014,2015,2016,2017,2018],
              datasets: [{ 
                  data: [1,3,2,5,38,54,128,75,50,27,25,13,3,5,1],
                  label: "Number Of Drone Strikes",
                  borderColor: "#CE2D4F",
                  fill: true,
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
        document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
        window.thirdChart = new Chart(document.getElementById("thirdChart"), {
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
        document.querySelector('.deathsHeader').innerHTML = `Deaths: ${minimumPeopleKilled} - ${maximumPeopleKilled}`;
        document.querySelector('.chartH2').innerHTML = `drone strike data in ${country}`;
        window.secondChart = new Chart(document.getElementById("secondChart"), {
          type: 'doughnut',
          data: {
            datasets: [{
              backgroundColor: ["#CE2D4F",'#9C1933', '#4E0D1A'],
              borderColor: "#CE2D4F",
              borderWidth: '0',
              data: [minimumPeopleKilled - minimumChildrenKilled - minimumCiviliansKilled,minimumCiviliansKilled,minimumChildrenKilled]
            }],
            labels: ["Total", "Civilians", "Children"]
        },
      });
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
  
  else {
      console.log('country: ', country)
    }
    window.scrollBy(0, 800);
    // window.scroll(0,findPos(document.getElementById("dashboard")));

});
