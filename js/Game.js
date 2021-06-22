import Player from "./Player.js";
export default class Game {
  constructor() {
    //TODO :: Make 2 players ;-)
    this.playerOne = new Player("jan", "X");
    this.playerTwo = new Player("trudy", "O");   
    this.currentPlayer = this.playerOne;
    
    this.fieldNodes = document.querySelectorAll(".board > .field");

    console.log(this.currentPlayer.symbol);
    //Add the onclick function on all the fields...
    for (const field of this.fieldNodes) {
      field.addEventListener("click", (e) => {
        this.onFieldClick(e);
      });
    }

    //reset the game when they click on the reset button
    document.querySelector(".reset-btn").addEventListener("click", this.reset);
  }

  reset() {
    location.reload(); 
      
  }

  onFieldClick(event) {
      const fieldPlace = event.target;
      const fieldContent = fieldPlace.textContent;
      if(fieldContent === "X" || fieldContent === "O"){
        alert("stop");
        return;
      }
      const allFields = document.querySelectorAll(".field");
      fieldPlace.textContent = this.currentPlayer.symbol;

      if (this.currentPlayer.symbol === "X") {
        this.currentPlayer = this.playerTwo;
      } else {
        this.currentPlayer = this.playerOne;
      }
      if(allFields[0].textContent == "X" && allFields[1].textContent == "X" && allFields[2].textContent == "X" ){
        alert(" X heeft gewonnen!");
      } 
      else if(allFields[0].textContent == "O" && allFields[1].textContent == "O" && allFields[2].textContent == "O" ){
        alert("O heeft gewonnen!  ");
      }
      else if(allFields[0].textContent == "X" && allFields[3].textContent == "X" && allFields[6].textContent == "X" ){
        alert("X heeft gewonnen!");
      }
      else if(allFields[0].textContent == "O" && allFields[3].textContent == "O" && allFields[6].textContent == "O" ){
        alert("O heeft gewonnen!");
      }
      else if(allFields[2].textContent == "X" && allFields[5].textContent == "X" && allFields[8].textContent == "X" ){
        alert("X heeft gewonnen!");
      }
      else if(allFields[2].textContent == "O" && allFields[5].textContent == "O" && allFields[8].textContent == "O" ){
        alert("O heeft gewonnen!");
      }
      else if(allFields[1].textContent == "X" && allFields[4].textContent == "X" && allFields[7].textContent == "X" ){
        alert("X heeft gewonnen!");
      }
      else if(allFields[1].textContent == "O" && allFields[4].textContent == "O" && allFields[7].textContent == "O" ){
        alert("O heeft gewonnen!");
      }
      else if(allFields[3].textContent == "X" && allFields[4].textContent == "X" && allFields[5].textContent == "X" ){
        alert("X heeft gewonnen!");
      }
      else if(allFields[3].textContent == "O" && allFields[4].textContent == "O" && allFields[5].textContent == "O" ){
        alert("O heeft gewonnen!");
      }
      else if(allFields[6].textContent == "X" && allFields[7].textContent == "X" && allFields[8].textContent == "X" ){
        alert("X heeft gewonnen!");
      }
      else if(allFields[6].textContent == "O" && allFields[7].textContent == "O" && allFields[8].textContent == "O" ){
        alert("O heeft gewonnen!");
      }
      else if(allFields[0].textContent == "X" && allFields[4].textContent == "X" && allFields[8].textContent == "X" ){
        alert("X heeft gewonnen!");
      }
      else if(allFields[0].textContent == "O" && allFields[4].textContent == "O" && allFields[8].textContent == "O" ){
        alert("O heeft gewonnen!");
      }
      else if(allFields[2].textContent == "X" && allFields[4].textContent == "X" && allFields[6].textContent == "X" ){
        alert("X heeft gewonnen!");
      }
      else if(allFields[2].textContent == "O" && allFields[4].textContent == "O" && allFields[6].textContent == "O" ){
        alert("O heeft gewonnen!");
      }
//      fieldPlace.innerHTML = this.playerOne.symbol;
  }
}
