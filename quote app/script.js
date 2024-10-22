const quoteElement = document.getElementById('quote');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');

const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The best way to predict the future is to create it."
];

// Event listener to generate new quote
newQuoteBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
    
    // Background gradient change on new quote
    document.body.style.background = randomGradient();
});

// Event listener to copy quote to clipboard
copyBtn.addEventListener('click', function() {
    const textArea = document.createElement('textarea');
    textArea.value = quoteElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Quote copied to clipboard!');
});

// Function to generate random gradient
function randomGradient() {
    const colors = [
        'linear-gradient(120deg, #f6d365, #fda085)',
        'linear-gradient(120deg, #f093fb, #f5576c)',
        'linear-gradient(120deg, #5ee7df, #b490ca)',
        'linear-gradient(120deg, #c3cfe2, #c3cfe2)',
        'linear-gradient(120deg, #ff9a9e, #fecfef)'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

