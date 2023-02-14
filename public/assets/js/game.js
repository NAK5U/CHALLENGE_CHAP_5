// * create object
class player {
  constructor() {
    this.choice = null;
  }
  getPlayerChoice(choice) {
    this.choice = choice;
  }
}
class comp extends player {
  constructor() {
    super();
  }
  getCompChoice() {
    let choices = ["batu", "kertas", "gunting"];
    let select = choices[Math.floor(Math.random() * choices.length)];
    return (this.choice = select);
  }
}
class game {
  constructor(player, com) {
    this.player = player;
    this.com = com;
    this.result = null;

    // * DOM selector
    this.playerSection = document.querySelectorAll(".player-area button");
    this.comSection = document.querySelectorAll(".com-area button");
    this.textBox = document.querySelector("#result");
    this.textArea = document.querySelector(".hasil");
    this.refresh = document.getElementById("refresh");
  }

  gameResult(player, com) {
    if (player.choice == com.choice) return (this.result = "draw");
    if (player.choice == "batu")
      return com.choice == "gunting"
        ? (this.result = "player 1 win")
        : (this.result = "com win");
    if (player.choice == "kertas")
      return com.choice == "batu"
        ? (this.result = "player 1 win")
        : (this.result = "com win");
    if (player.choice == "gunting")
      return com.choice == "kertas"
        ? (this.result = "player 1 win")
        : (this.result = "com win");
  }

  setActive(player, com) {
    let p = document.getElementById(player.choice);
    let c = document.getElementById("com-" + com.choice);
    p.classList.add("active");

    setTimeout(() => {
      c.classList.add("active");
      this.textBox.classList.add(
        "rotate",
        "d-flex",
        "align-items-center",
        "justify-content-center"
      );
      this.textArea.innerHTML = this.result;
      this.textArea.classList.replace("vs", "game-result");
      if (this.result == "draw") {
        this.textBox.classList.add("game-result-draw");
      } else {
        this.textBox.classList.add("game-result-win");
      }
    }, 1000);
  }

  setRefresh(player, com) {
    let p = document.getElementById(player.choice);
    let c = document.getElementById("com-" + com.choice);
    p.classList.remove("active");
    c.classList.remove("active");
    this.textBox.classList.remove(
      "rotate",
      "d-flex",
      "align-items-center",
      "justify-content-center"
    );
    this.textArea.innerHTML = "vs";
    this.textArea.classList.replace("game-result", "vs");
    if (this.result == "draw") {
      this.textBox.classList.remove("game-result-draw");
    } else {
      this.textBox.classList.remove("game-result-win");
    }
  }
}

// * player
let player1 = new player();
let com = new comp();
let play = new game(player1, com);

// player select
let counter = 0;

const playerArea = () => {
  let playerSelect = play.playerSection;
  playerSelect.forEach((select) => {
    select.addEventListener("click", () => {
      if (counter == 0) {
        // * pilihan player
        let playerSelect = select.id;
        player1.getPlayerChoice(playerSelect);

        // * pilihan komputer
        let comSelect = com.getCompChoice();

        // * get result
        let result = play.gameResult(player1, com);
        // * enter the game play
        play.setActive(player1, com);
        counter++;
        // * console.log
        console.log(`Player 1 : ${playerSelect}`);
        setTimeout(() => {
          console.log(`Com : ${comSelect}`);
          console.log(`Result : ${result}`);
        }, 1000);
      } else {
        alert("Please click the refresh button !");
      }
    });
  });
};
playerArea();

// * refresh buttons
const refreshBtn = () => {
  play.refresh.addEventListener("click", () => {
    play.setRefresh(player1, com);
    counter = 0;
  });
};
refreshBtn();
