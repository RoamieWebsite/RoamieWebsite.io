const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

 // Function to fetch currency symbols
 function getCurrencySymbols() {
    return {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
        'INR': '₹',
        'AUD': 'A$',
        'CAD': 'C$',
        'SGD': 'S$',
        'JPY': '¥',
        'CNY': '¥',
        'NZD': 'NZ$',
        'CHF': 'Fr',
        'HKD': 'HK$',
        'SEK': 'kr',
        'KRW': '₩',
        'TRY': '₺',
    };
}


// Fetching the exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    // Fetching the exchange rates from the Exchange Rate API
    fetch(`https://v6.exchangerate-api.com/v6/5c0189798413529d55a5c060/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // Checking if the response contains rates and the specified currency code
            if (data.result === 'success' && data.conversion_rates && data.conversion_rates[currency_two]) {
                const rate = data.conversion_rates[currency_two];
                rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
                amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            } else {
                // Handling the case where the currency code is not found in the response
                console.error(`Exchange rate data not available for ${currency_two}`);
                rateEl.innerText = `1 ${currency_one} = ? ${currency_two}`;
                amountEl_two.value = 'N/A';
            }
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            // Handling the error 
            rateEl.innerText = 'Error fetching exchange rates';
            amountEl_two.value = 'N/A';
        });
}


// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();