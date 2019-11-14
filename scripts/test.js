const button = document.querySelector('button');
let submitValue;
let products;
button.addEventListener('click', (e) => {
    let childNodes = e.target.parentElement.childNodes;
    submitValue = childNodes[11].lastElementChild.value;
    // let country = submitValue;
    let displayPeopleKilled = document.querySelector('.displayPeopleKilled').checked;
    let displayPeopleInjured = document.querySelector('.displayPeopleInjured').checked;
    let displayNumberOfStrikes = document.querySelector('.displayNumberOfStrikes').checked;
    let from = document.querySelector('.from').value;
    let to = document.querySelector('.to').value;
    let country = document.querySelector('.country').value;

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
            for (let i=0; i<products.length; i++) {
            let date = products[i].Date.slice(6,10);
            if (date >= from && date <= to ) {
                console.log('strike: ', products[i])
                console.log('date:',date)
            }
            }
            
            console.log(products[0].Date.slice(6,10))
            if (displayNumberOfStrikes) {
                let minimumStrikes = 0;
                let maximumStrikes = 0;
                for (let i=0; i<products.length; i++) {
                    minimumStrikes += parseInt(products[i]['Minimum number of strikes']);
                    maximumStrikes += parseInt(products[i]['Maximum number of strikes']);
                }
                console.log(`number of strikes:  ${minimumStrikes} - ${maximumStrikes}`);
            }
            if (displayPeopleInjured) {
                let minimumPeopleInjured = 0;
                let maximumPeopleInjured = 0;
                for(let i=0; i<products.length; i++) {
                    minimumPeopleInjured += parseInt(products[i]['Minimum people injured']);
                    maximumPeopleInjured += parseInt(products[i]['Maximum people injured']);
                }
                console.log(`people injured: ${minimumPeopleInjured} - ${maximumPeopleInjured}`);
            }
            if (displayPeopleKilled) {
                let minimumPeopleKilled = 0;
                let maximumPeopleKilled = 0;
                for(let i=0; i<products.length; i++) {
                    minimumPeopleKilled += parseInt(products[i]['Minimum people killed']);
                    maximumPeopleKilled += parseInt(products[i]['Maximum people killed']);
                }
                console.log(`people killed: ${minimumPeopleKilled} - ${maximumPeopleKilled}`);
            }

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