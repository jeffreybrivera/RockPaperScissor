function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let result;
  
    if (playerChoice == computerChoice) {
      result = "Tie!";
      document.getElementById("player-image").src = playerChoice + ".png";
      document.getElementById("computer-image").src = computerChoice + ".png";
    } else if (playerChoice == "rock") {
      if (computerChoice == "scissor") {
        result = "You win!";
        document.getElementById("player-image").src = "rock.png";
        document.getElementById("computer-image").src = "scissor.png";
      } else {
        result = "Computer wins!";
        document.getElementById("player-image").src = "rock.png";
        document.getElementById("computer-image").src = "paper.png";
      }
    } else if (playerChoice == "paper") {
      if (computerChoice == "rock") {
        result = "You win!";
        document.getElementById("player-image").src = "paper.png";
        document.getElementById("computer-image").src = "rock.png";
      } else {
        result = "Computer wins!";
        document.getElementById("player-image").src = "paper.png";
        document.getElementById("computer-image").src = "scissor.png";
      }
    } else if (playerChoice == "scissor") {
      if (computerChoice == "paper") {
        result = "You win!";
        document.getElementById("player-image").src = "scissor.png";
        document.getElementById("computer-image").src = "paper.png";
      } else {
        result = "Computer wins!";
        document.getElementById("player-image").src = "scissor.png";
        document.getElementById("computer-image").src = "rock.png";
      }
    }
    setTimeout(() => {
      document.getElementById("result").innerHTML = `${result}`;
    }, 500);
  }
  