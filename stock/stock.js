//let coinRate = document.getElementById('coin_rate');


//fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=BE32640C-5D7B-4C48-BEB7-AEA9C92AA972', {

fetch('https://rest.coinapi.io/v1/assets?apikey=BE32640C-5D7B-4C48-BEB7-AEA9C92AA972', {

    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => { return res.json()})
    .then(data => console.log(data[2]))
    
    