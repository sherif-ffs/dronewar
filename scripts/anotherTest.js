// function createVariables(){
//     var accounts = [];
  
//     for (var i = 0; i <years.length; ++i) {
//         accounts[i] = 'year'+years[i];
//     }
//     console.log('accounts: ',accounts)
//     return accounts;
//   }

  let year2009 = 0;
fetch(`json/yemenStrikes.json`).then(function(response) {
    return response.json();
    })
    .then(function(json) {
        let products = json.yemen;
        let years = [];
        console.log(products);
        for (let i=0; i<products.length; i++) {
            let currentStrikeDate = products[i].Date;
            let year = currentStrikeDate.slice(6,10);
            console.log('year: ', year);
            if (!years.includes(year)) {
                years.push(year);
            }
            if (year === '2002') {
                console.log('2002')
            }
            if (year === '2009') {
                year2009 += parseInt(products[i]["Maximum people killed"]);
                console.log('year2009: ', year2009)
            }
        }
        
        
        //   createVariables()
        //   console.log('year2009: ', accounts[1])

        console.log('years: ', years);



























    })
    // .catch(function(err) {
    //     console.log('Fetch problem: ' + err.message);
    // })
