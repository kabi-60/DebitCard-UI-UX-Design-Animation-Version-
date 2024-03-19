
// Get input elements
const acNumInput = document.getElementById('AcNum');
const accNameInput = document.getElementById('AccName');
const monthSelect = document.getElementById('Month');
const yearSelect = document.getElementById('year');
const cvInput = document.getElementById('cv');

// Add event listeners to input elements
acNumInput.addEventListener('input', updateCardNumber);
accNameInput.addEventListener('input', updateCardName);
monthSelect.addEventListener('input', updateCardMonth);
yearSelect.addEventListener('input', updateCardYear);
cvInput.addEventListener('input', updateCardCV);

// Function to update card number
function updateCardNumber() {
    const cardNumberDiv = document.getElementById('cardnumber');
    cardNumberDiv.innerHTML = `<h1 class="text-4xl font-bold " style="font-family:Rosarivo">${acNumInput.value}</h1>`;
}

// Function to update card name
function updateCardName() {
    const cardNameDiv = document.getElementById('cardName');
    cardNameDiv.innerText = accNameInput.value.toUpperCase();
    // cardNameDiv.classList="font-[Turret_Road,sans-serif]";
   
}

// Function to update card month
function updateCardMonth() {
    const cardMonthDiv = document.getElementById('cardMonth');
    cardMonthDiv.innerText = monthSelect.value;
}

// Function to update card year
function updateCardYear() {
    const cardYearDiv = document.getElementById('cardYear');
    cardYearDiv.innerText = yearSelect.value;
}

// Function to update card CV
    function updateCardCV() {
        const cardCVInput = document.getElementById('cv');
        const cvValue = cardCVInput.value.padEnd(3, '*'); // Padding CV with '*' for privacy
        const cardCVDiv = document.getElementById('cardCV');
        cardCVDiv.innerText = cvValue;
    }

    function toUpperCase(input) {
        // Get the current input value and convert it to uppercase
        var uppercaseValue = input.value.toUpperCase();
        // Update the input value with the uppercase value
        input.value = uppercaseValue;
      }

function limitInputLength(element, maxLength) {
    if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength);
    }
}



cvInput.addEventListener('mouseover', showBack);
cvInput.addEventListener('mouseout', showFront);

function showBack() {
    var font = document.getElementById('font');
    var back = document.getElementById('back');
    font.classList.add('hidden');
    back.classList.remove('hidden');
}

function showFront() {
    var font = document.getElementById('font');
    var back = document.getElementById('back');
    back.classList.add('hidden');
    font.classList.remove('hidden');
}