const csv = require('csv-parser');
const fs = require('fs');
const d3 = require('d3-dsv');



var regions = ['Americas', 'Africa', 'Asia', 'Oceania', 'Europe'];

var countries = {};
// 'region': [{'country_name':'abb-2'}, {},], 'region':[]...
regions.map((itm) => {
    countries[itm] = [];
})

/*
fs.readFile('../data/all.csv')
.pipe(csv())
.on('data', (row) => {

  if(row["region"] !== ''){
      countries[row["region"]].push({
          key: row["name"],
          value: row["alpha-2"].toLowerCase(),
      });
  }
  
})
.on('end', () => {
  console.log(countries);
  console.log('CSV file successfully processed');
  return countries;
});*/

