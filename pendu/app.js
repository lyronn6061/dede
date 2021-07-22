var words = ['poisson', 'panthere', 'dinausore', 'telephone', 'assiette', 'spaghetti'];
var maxNumberOfGuesses = 10;

function startGame() {
    var word = words[Math.floor(Math.random() * words.length)];
    console.log('le mot a trouver', word);

    var answer = [];
    var numberOfTries = 0;

    for (var i = 0; i < word.length; i++) {
        answer.push('_');
    }

    console.log('la reponse est', answer);

    var remainingLetters = word.length;

    while (remainingLetters > 0) {
        // Show the player their progress
        alert(answer.join(" "));
        // Take input from the player
        var guess = prompt('Donne une lettre?');
        if (guess === null) {
            break;
        } else if (guess.length > 1) {
            alert('On a dit qu\'une seule lettre!!!');
        } else {
            numberOfTries++;
            for (var j = 0; j < word.length; j++) {
                if (guess === word[j]) {
                    answer[j] = guess;
                    remainingLetters--;
                }
            }
        }
        if (numberOfTries === maxNumberOfGuesses) {
            alert('vous avez depasse le nombre d\'essais. Vous etes pendus!!');
            break;
        }
    }

    if (remainingLetters === 0) {
        alert('BRAVO!!!!');
    }
}

startGame();