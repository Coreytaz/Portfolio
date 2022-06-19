const rps = (p1, p2) => {
    switch (p1) {
          case "scissors":
              switch (p2) {
                  case "scissors":
                      return "Draw!"
                  case "paper":
                      return "Player 1 won!"
                  case "rock":
                      return "Player 2 won!"
              }
          case "paper":
              switch (p2) {
                  case "scissors":
                      return "Player 2 won!"
                  case "paper":
                      return "Draw!"
                  case "rock":
                      return "Player 1 won!"
              }
          case "rock":
                  switch (p2) {
                      case "scissors":
                          return "Player 1 won!"
                      case "paper":
                          return "Player 2 won!"
                      case "rock":
                          return "Draw!"
                  }
      }
  };