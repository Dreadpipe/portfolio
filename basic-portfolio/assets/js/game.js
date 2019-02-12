            // Variable that stores the alphabet
            // Note: may attempt array as one long string using .charAt
            var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
            
            // Variables that store wins and losses, and remaining guesses
            var wins = 0;
            var losses = 0;
            var guessRemain = 10;

            // HTML relevant variables
            var directionsText = document.getElementById("directions-text");
            var userChoiceText = document.getElementById("userchoice-text");
            var computerChoiceText = document.getElementById("computerchoice-text");
            var winsText = document.getElementById("wins-text");
            var lossesText = document.getElementById("losses-text");
            var guesstext = document.getElementById("guesses-text");
        
            // This function is run whenever the user presses a key.
            document.onkeyup = function(event) {
              console.log(event.key)
            // Determines which key was pressed.
              var userGuess = event.key;
  
            // Randomly chooses a choice from the options array. This is the Computer's guess.
              var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            // This tells the user they must select letters between "a" and "z"
            if (userGuess < "a" || userGuess > "z") {
              directionsText.textContent = "You cannot deceive me!  You must pick a letter!";

            } else if (userGuess !== computerGuess) {
              directionsText.textContent = "Sorry!  Try again!";
              guessRemain--;
            
            // If user matches computer, gain a win
            // Find way to resolve or reset game after 7 wins, or any wins for that matter
            } else if (userGuess === computerGuess) {
              directionsText.textContent = "Correct!";
              alert("You did it! I promised you my wisdom.  I may have lied.")
              wins++;
              guessRemain = 10;
              guesstext.textContent = "Guesses: " + guessRemain;
            
            }
            // These lines of text will go to the document via ID
            userChoiceText.textContent = "Tiny Knight chooses: " + userGuess;
            computerChoiceText.textContent = "Brain Man chooses: " + computerGuess;
            winsText.textContent = "Wins: " + wins;
            guesstext.textContent = "Guesses: " + guessRemain;

            if (guessRemain === 0) {
              alert("I have won again!  BRAIN MAN CANNOT BE DEFEATED");
              guessRemain = 10;
              losses++;
              lossesText.textContent = "Losses: " + losses;
              guesstext.textContent = "Guesses: " + guessRemain;
            }
            
            };

            /* Additons and tweaks-
             * Eventually make single letter into hang-man
              -Use smaller words, create win scenario
             * Create dynamism with button, change directions text to jumbotron
             *
             */