//! Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'block'

    setTimeout(calculateResults, 1500);
    e.preventDefault();
});

document.getElementById('clear').addEventListener('click', clearInput);

function calculateResults() {
    //* Define UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your number input!');
    }
}

function showError(error) {
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    const errorDiv  = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error)); 

    card.insertBefore(errorDiv, heading);

    //* clear error after 2 seconds
    setTimeout(clearError, 2000);
}

function clearError() {
    document.querySelector('.alert').remove();
}

//! Clear all the input
function clearInput() {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    amount.value = '';
    interest.value = '';
    years.value = '';

    document.getElementById('results').style.display = 'none';
}

//! Discount Calculator
document.getElementById('discount-form').addEventListener('submit', function(e) {
    document.getElementById('discount-results').style.display = 'none'
    document.getElementById('discount-loading').style.display = 'block'

    setTimeout(calculateDiscount, 1500);
    e.preventDefault();
});

function calculateDiscount() {
    const price = document.getElementById('price');
    const discount = document.getElementById('discount');
    const discountPrice = document.getElementById('discount-price');
    let result;

    priceValue = parseFloat(price.value);
    discountValue = parseFloat(discount.value) / 100;

    result = priceValue - (priceValue * discountValue);

    discountPrice.value = result.toFixed(2);

    document.getElementById('discount-results').style.display = 'block';
    document.getElementById('discount-loading').style.display = 'none';
}

document.getElementById('discount-clear').addEventListener('click', clearDiscount);

function clearDiscount() {
    const price = document.getElementById('price');
    const discount = document.getElementById('discount');
    const discountPrice = document.getElementById('discount-price');

    price.value = '';
    discount.value = '';
    discountPrice.value = '';

    document.getElementById('discount-results').style.display = 'none';
}