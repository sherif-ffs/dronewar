const button = document.querySelector('button');
let submitValue;
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

    console.log('displayPeopleKilled: ', displayPeopleKilled);
    console.log('displayPeopleInjured: ', displayPeopleInjured);
    console.log('displayNumberOfStrikes: ', displayNumberOfStrikes);
    console.log('from date: ', from);
    console.log('to date: ', to);
    console.log('selected country: ', country)

    if (country === 'yemen') {
        fetch(`strikes/yemenStrikes.json`).then(function(response) {
            return response.json();
          })
          .then(function(json) {
            products = json.yemen;
            console.log(`${country} strikes`, products);
            // initialize()
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