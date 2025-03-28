// Function to change the quote on button click
function changeQuote() {
    const quotes = [
        '"Life is what happens when you’re busy making other plans." - John Lennon',
        '"Don’t watch the clock; do what it does. Keep going." - Sam Levenson',
        '"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
        '"Believe you can and you’re halfway there." - Theodore Roosevelt',
        '"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama'
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector('.quote-text').innerText = quotes[randomIndex];
}

// Function to display a motivational message on button click
document.getElementById('inspire-btn').addEventListener('click', function() {
    const messages = [
        'You are capable of amazing things!',
        'Every day is a new opportunity.',
        'Believe in yourself and all that you are.',
        'Stay positive, work hard, and make it happen.',
        'The future belongs to those who believe in the beauty of their dreams.'
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('inspiration-message').innerText = messages[randomIndex];
});
