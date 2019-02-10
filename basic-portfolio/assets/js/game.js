 // Variable that stores the alphabet
            // Note: may attempt array as one long string using .charAt
            var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
        
            // Variables that store wins and losses, and remaining guesses
            var wins = 0;
            var losses = 0;
            var guessRemain = 7;
        
            // HTML relevant variables
            var directionsText = document.getElementById("directions-text");
            var userChoiceText = document.getElementById("userchoice-text");
            var computerChoiceText = document.getElementById("computerchoice-text");
            var winsText = document.getElementById("wins-text");
            var lossesText = document.getElementById("losses-text");
            var guessRemain = document.getElementById("guesses-text");
        
            // This function is run whenever the user presses a key.
            document.onkeyup = function(event) {
        
            // Determines which key was pressed.
            var userGuess = event.key;
        
            // Randomly chooses a choice from the options array. This is the Computer's guess.
              var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
            if (userGuess === computerGuess) {
            directionsText = "Nice job!  Go buy a lottery ticket.";
            wins++;

            } else if (userGuess !== computerGuess) {
            directionsText.text = "Sorry!  Try again!";
            guessRemain--;

            userChoiceText.textContent = "You: " + userGuess;
            computerChoiceText.textContent = "Computer: " + computerGuess;
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
            guessRemain.textContent = "Luck: " + guessRemain;
            }
            else 
            {
            directionsText.text = "Don't get fancy. Pick a letter!";

            }

                
            
                /*else
            {
                directionsText.textContent = "No.  Guess a letter, or we will be enemies.";
              }*/
            };