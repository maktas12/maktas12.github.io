import Player from "./Player.js";
export default class Game {
  constructor() {
    // hier maak ik de players aan //
    this.playerOne = new Player("jan", "X");
    this.playerTwo = new Player("trudy", "O");   
    this.currentPlayer = this.playerOne;
    // hier zet ik een klick function op de field //
    this.fieldNodes = document.querySelectorAll(".board > .field");

      for (const field of this.fieldNodes) {
        field.addEventListener("click", (e) => {
          this.onFieldClick(e);
        });
      }

    document.querySelector(".reset-btn").addEventListener("click", this.reset);
  }

  // dit reload de pagina en reset de game //
  reset() {
    location.reload(); 
  }

  onFieldClick(event) {
    const allFields = document.querySelectorAll(".field");
    // hier roep ik de plaats op waarop word gekliked //
    const fieldPlace = event.target;
    const fieldContent = fieldPlace.textContent;
    let winner = false;
    const theBody = document.body;
    
    // dit zorgt ervoor dat als je op een field klicked waar al iets inzit dat het je een alert geeft //
    if (fieldContent === "X" || fieldContent === "O") {
      alert("deze field is in bezit! kies aub een andere.");
      return;
    }

    fieldPlace.textContent = this.currentPlayer.symbol;
    // dit zorgt ervoor dat players switchen na elke klick //

    if (this.currentPlayer.symbol === "X") {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this.playerOne;
    }

    // dit checkt elke win combinaties en of er eentje gehaald is //
    if (allFields[0].textContent == "X" && allFields[1].textContent == "X" && allFields[2].textContent == "X" ) {
      alert(" X heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("bigBrain");
    } 
    else if (allFields[0].textContent == "O" && allFields[1].textContent == "O" && allFields[2].textContent == "O" ) {
      alert("O heeft gewonnen!  ");
      winner = true;
      theBody.classList.toggle("smart");
    }
    else if (allFields[0].textContent == "X" && allFields[3].textContent == "X" && allFields[6].textContent == "X" ) {
      alert("X heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("bigBrain");
    }
    else if (allFields[0].textContent == "O" && allFields[3].textContent == "O" && allFields[6].textContent == "O" ) {
      alert("O heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("smart");
    }
    else if (allFields[2].textContent == "X" && allFields[5].textContent == "X" && allFields[8].textContent == "X" ) {
      alert("X heeft gewonnen!");
      gameOver = true;
      theBody.classList.toggle("bigBrain");
    }
    else if (allFields[2].textContent == "O" && allFields[5].textContent == "O" && allFields[8].textContent == "O" ) {
      alert("O heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("smart");
    }
    else if (allFields[1].textContent == "X" && allFields[4].textContent == "X" && allFields[7].textContent == "X" ) {
      alert("X heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("bigBrain");
    }
    else if (allFields[1].textContent == "O" && allFields[4].textContent == "O" && allFields[7].textContent == "O" ) {
      alert("O heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("smart");
    }
    else if (allFields[3].textContent == "X" && allFields[4].textContent == "X" && allFields[5].textContent == "X" ) {
      alert("X heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("bigBrain");
    }
    else if (allFields[3].textContent == "O" && allFields[4].textContent == "O" && allFields[5].textContent == "O" ) {
      alert("O heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("smart");
    }
    else if (allFields[6].textContent == "X" && allFields[7].textContent == "X" && allFields[8].textContent == "X" ) {
      alert("X heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("bigBrain");
    }
    else if (allFields[6].textContent == "O" && allFields[7].textContent == "O" && allFields[8].textContent == "O" ) {
      alert("O heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("smart");
    }
    else if (allFields[0].textContent == "X" && allFields[4].textContent == "X" && allFields[8].textContent == "X" ) {
      alert("X heeft gewonnen!");
      theBody.classList.toggle("bigBrain");
      winner = true;
    }
    else if (allFields[0].textContent == "O" && allFields[4].textContent == "O" && allFields[8].textContent == "O" ) {
      alert("O heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("smart");
    }
    else if (allFields[2].textContent == "X" && allFields[4].textContent == "X" && allFields[6].textContent == "X" ) {
      alert("X heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("bigBrain");
    }
    else if (allFields[2].textContent == "O" && allFields[4].textContent == "O" && allFields[6].textContent == "O" ) {
      alert("O heeft gewonnen!");
      winner = true;
      theBody.classList.toggle("smart");    
    }
      // dit checkt of er geen winnaars zijn //
    if (!winner) {
      let filledFields = 0;

      for (let i = 0; i < allFields.length;  i++){

        if (allFields[i].textContent === "X" || allFields[i].textContent === "O"){
          filledFields++;
        }
        
      }

      if (filledFields === 9) {
        alert("niemand wint!");
      }
    }     
  }
}