function fetchingData(){

    const fetch = require("node-fetch");

    var today = new Date();
    var dd = String(today.getDate() -1).padStart(2, '0');
    var dd_prev = String(today.getDate() -2).padStart(2, '0');

    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    prev = mm + '-' + dd_prev + '-' + yyyy;

    var totalCases = 0;
    var prevCases = 0;

    fetch(`https://covid19.mathdro.id/api/daily/${today}`)
    .then(res => res.json())
    .then((data) => {
        data.map((item) => {
            totalCases += parseInt(item["confirmed"]);
        })
        console.log(totalCases);
    })
    .catch(console.log)


    fetch(`https://covid19.mathdro.id/api/daily/${prev}`)
    .then(res => res.json())
    .then((data) => {
        data.map((item) => {
            prevCases += parseInt(item["confirmed"]);
        })
        console.log(prevCases);
        console.log(totalCases-prevCases);

    })
    .catch(console.log)

}

fetchingData();