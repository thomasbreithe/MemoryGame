// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Set up the event listener for a card
//Globals
const deck = document.querySelector(`.deck`);

deck.addEventListener(`click`, event => {
    const clickTarget = event.target;
    if (clickTarget.classList.contains(`card`)) {
        toggleCard(clickTarget);
    }
});

function toggleCard(card) {
    card.classList.toggle('open');
    card.classList.toggle('show');
}