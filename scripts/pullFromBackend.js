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

    // keep a record of what the last category and search term entered were
    let lastCountry = country.value;
    console.log('lastCountry: ', lastCountry);

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

    if(country.value === lastCountry) {
        console.log('match')
        return;
      } else {
        console.log('no match')
        // update the record of last country and search term
        lastcountry = country.value;
        // lastSearch = searchTerm.value.trim();
        // In this case we want to select all products, then filter them by the search
        // term, so we just set countryGroup to the entire JSON object, then run selectProducts()
        if(country.value === 'All') {
          countryGroup = products;
          selectProducts();
        // If a specific country is chosen, we need to filter out the products not in that
        // country, then put the remaining products inside countryGroup, before running
        // selectProducts()
        } else {
          // the values in the <option> elements are uppercase, whereas the categories
          // store in the JSON (under "type") are lowercase. We therefore need to convert
          // to lower case before we do a comparison
          var lowerCaseType = country.value.toLowerCase();

          for(var i = 0; i < products.length ; i++) {
            // If a product's type property is the same as the chosen country, we want to
            // dislpay it, so we push it onto the countryGroup array
            if(products[i].type === lowerCaseType) {
              console.log(products[i])
              countryGroup.push(products[i]);
            }
          }
  }
}
}
}
