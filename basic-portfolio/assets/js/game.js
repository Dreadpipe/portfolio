            // Variable that stores the alphabet
            // Note: may attempt array as one long string using .charAt
            var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
            
            // Variables that store wins and losses, and remaining guesses
            var wins = 0;
            var losses = 0;
            // remaning guesses currently not working
            // for now, game posts wins/losses only; and "guesses" are text-holder for losses
            var guessRemain = 10;

            // HTML relevant variables
            var directionsText = document.getElementById("directions-text");
            var userChoiceText = document.getElementById("userchoice-text");
            var computerChoiceText = document.getElementById("computerchoice-text");
            var winsText = document.getElementById("wins-text");
            var lossesText = document.getElementById("losses-text");
            var guessRemain = document.getElementById("guesses-text");
        
            // This function is run whenever the user presses a key.
            document.onkeyup = function(event) {
              console.log(event.key)
            // Determines which key was pressed.
              var userGuess = event.key;
  
            // Randomly chooses a choice from the options array. This is the Computer's guess.
              var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            // This tells the user they must select letters between "a" and "z"
            // Find way to negate display if they do so
            if (userGuess < "a" || userGuess > "z") {
              directionsText.textContent = "You cannot deceive me!  You must pick a letter!";

            } else if (userGuess !== computerGuess) {
              directionsText.textContent = "Sorry!  Try again!";
              // "Losses" currently equate to "guesses"
              losses++;

            // } else if (guessRemain = 0) {
            //   losses++;
            //   directionsText.textContent = "Haha!  I win again!"
            
            // If user matches computer, gain a win
            // Find way to resolve or reset game after 7 wins, or any wins for that matter
            } else if (userGuess === computerGuess) {
              directionsText.textContent = "Correct!";
              wins++;
            
            }
            // These lines of text will go to the document via ID
            userChoiceText.textContent = "Tiny Knight chooses: " + userGuess;
            computerChoiceText.textContent = "Brain Man chooses: " + computerGuess;
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Guesses: " + losses;
            
            };