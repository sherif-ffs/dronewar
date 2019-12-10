// LOAD DATA FOR YEMEN 
const getDataFromForm = () => {
    country = document.querySelector('.country').value;
    displayPeopleKilled = document.querySelector('.displayPeopleKilled').checked;
    displayPeopleInjured = document.querySelector('.displayPeopleInjured').checked;
    displayNumberOfStrikes = document.querySelector('.displayNumberOfStrikes').checked;
  }
  

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
    document.querySelector('.sectionHeader').innerHTML =`current statistics in Yemen`;
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
            document.querySelector('.strikesHeader').innerHTML = `confirmed strikes: ${minimumStrikes} - ${maximumStrikes}`;
    }});
  
