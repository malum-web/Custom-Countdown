const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

// Set Date Input min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today)

// Take values from form input 
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}

// Event Listeners 
countdownForm.addEventListener('submit', updateCountdown);