
let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElement = document.getElementById('stock-price');
let lastprice = null;


ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price  = stockObject.p;
    stockPriceElement.innerText = price;
  //  stockPriceElement.style.color = !lastprice || lastprice === price ? 'grey' : price > lastprice ? 'green' : 'red';
};


/*
let ws = new WebSocket('wss://ws.coinapi.io/v1?type=hello&apikey=BE32640C-5D7B-4C48-BEB7-AEA9C92AA972&heartbeat=true&subscribe_data_type=trade');
let stockPriceElement = document.getElementById('stock-price');
let lastprice = null;


ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price  = stockObject.p;
    stockPriceElement.innerText = price;


  //  stockPriceElement.style.color = !lastprice || lastprice === price ? 'grey' : price > lastprice ? 'green' : 'red';
};
console.log(price);
*/
  