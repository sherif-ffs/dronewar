let year2002Deaths = 0;
let year2002Civilians = 0;
let year2002Children = 0;

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

fetch(`json/yemenStrikes.json`).then(function(response) {
    return response.json();
    })
    .then(function(json) {
        let products = json.yemen;
        let years = [];
        // console.log(products);
        for (let i=0; i<products.length; i++) {
            let currentStrikeDate = products[i].Date;
            let year = currentStrikeDate.slice(6,10);
            // console.log('year: ', year);
            if (!years.includes(year)) {
                years.push(year);
            }
            if (year === '2002') {
                year2002Deaths += parseInt(products[i]["Maximum people killed"]);
                year2002Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2002Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2009') {
                year2009Deaths += parseInt(products[i]["Maximum people killed"]);
                year2009Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2009Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2010') {
                year2010Deaths += parseInt(products[i]["Maximum people killed"]);
                year2010Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2010Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2011') {
                year2011Deaths += parseInt(products[i]["Maximum people killed"]);
                year2011Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2011Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2012') {
                year2012Deaths += parseInt(products[i]["Maximum people killed"]);
                year2012Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2012Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2013') {
                year2013Deaths += parseInt(products[i]["Maximum people killed"]);
                year2013Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2013Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2014') {
                year2014Deaths += parseInt(products[i]["Maximum people killed"]);
                year2014Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2014Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2015') {
                year2015Deaths += parseInt(products[i]["Maximum people killed"]);
                year2015Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2015Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2016') {
                year2016Deaths += parseInt(products[i]["Maximum people killed"]);
                year2016Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2016Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2017') {
                year2017Deaths += parseInt(products[i]["Maximum people killed"]);
                year2017Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2017Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2018') {
                year2018Deaths += parseInt(products[i]["Maximum people killed"]);
                year2018Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2018Children += parseInt(products[i]["Maximum children reported killed"]);
            }
            if (year === '2019') {
                year2018Deaths += parseInt(products[i]["Maximum people killed"]);
                year2018Civilians += parseInt(products[i]["Maximum civilians reported killed"]);
                year2018Children += parseInt(products[i]["Maximum children reported killed"]);
            }
        }
        let deaths = [year2002Deaths, year2011Deaths, year2012Deaths, year2013Deaths, year2014Deaths, year2015Deaths, year2016Deaths, year2017Deaths,year2018Deaths, year2019Deaths];
        let civilians = [year2002Civilians, year2011Civilians, year2012Civilians, year2013Civilians, year2014Civilians, year2015Civilians, year2016Civilians, year2017Civilians,year2018Civilians, year2019Civilians];
        let children = [year2002Children, year2011Children, year2012Children, year2013Children, year2014Children, year2015Children, year2016Children, year2017Children,year2018Children, year2019Children];

        console.log('deaths: ', deaths);
        console.log('civilians: ', civilians);
        console.log('children: ', children);

    })
 