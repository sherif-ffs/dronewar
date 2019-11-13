fetch('strikes/yemenStrikes.json').then(function(response) {
    return response.json();
  })
  .then(function(json) {
    products = json.yemen;
    console.log('products: ', products);
    initialize()
  })
  .catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });

  function initialize() {
    console.log('init');
    let country = document.querySelector('.country');
    let submitButton = document.querySelector('.submit');
    let dateFrom = document.querySelector('.from');
    let dateTo = document.querySelector('.to');
    let displayDeaths = document.querySelector('.displayPeopleKilled');

    // keep a record of what the last category and search term entered were
    let lastCountry = country.value;
    let lastDateFrom = dateFrom.value;
    let lastDateTo = dateTo.value;
    let lastDisplayDeaths;

    displayDeaths.value !== null ? lastDisplayDeaths = displayDeaths.value : displayDeaths.value = '0';

    console.log('lastCountry: ', lastCountry);
    console.log('lastDateFrom: ', lastDateFrom);
    console.log('lastDateTo: ', lastDateTo);
    console.log('lastDisplayDeaths: ', lastDisplayDeaths)

      // these contain the results of filtering by category, and search term
      // finalGroup will contain the products that need to be displayed after
      // the searching has been done. Each will be an array containing objects.
      // Each object will represent a product
      let countryGroup;
      let finalCountry;

      submitButton.onclick = selectCategory;

  function selectCategory(e) {

    e.preventDefault();

    countryGroup = [];
    finalGroup = [];

    if(country.value === lastCountry && dateFrom.value === lastDateFrom && dateTo.value === lastDateTo) {
        console.log('match')
        return;
      } 
      else {
        console.log('no match');
        // update the record of last country and search term
        lastcountry = country.value;
        // lastSearch = searchTerm.value.trim();
        // In this case we want to select all products, then filter them by the search
        // term, so we just set countryGroup to the entire JSON object, then run selectProducts()
          // the values in the <option> elements are uppercase, whereas the categories
          // store in the JSON (under "type") are lowercase. We therefore need to convert
          // to lower case before we do a comparison
          var lowerCaseType = country.value.toLowerCase();
          console.log('lowerCaseType: ', lowerCaseType)
          for(var i = 0; i < products.length; i++) {
            // If a product's type property is the same as the chosen country, we want to
            // dislpay it, so we push it onto the countryGroup array
            if(products[i]["Strike ID"].slice(0,3) === 'YEM') {
              countryGroup.push(products[i]);
            }
          }
  
}
}
}
