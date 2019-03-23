import Puzzle from "./Puzzle.js";
import Round from "./Round.js";

import $ from 'jquery';

export default {

  hiddenBoard(playersArr) {

    $('.game-area').removeClass("hidden");
    $('.name-entry').addClass("hidden");
    playersArr.forEach((player, ind) => {
      $('#player' + ([ind + 1])).text(player.name);
    })

  },

  playerNames () {
    let players = ([$('#player1-input').val(), $('#player2-input').val(), $('#player3-input').val()]);
    return players;
  },

  resetGame () {
    location.reload();
  },

  fillSpace(puzzleLength, end) {
    const extraSpace = 14 - puzzleLength;
    const fill = extraSpace / 2;
    // debugger
    if (extraSpace % 2 === 0) {
      this.appendFill(fill + 1);
    } else {
      return end ? this.appendFill(fill + 1.5) : this.appendFill(fill + .5);
    }
  },

  appendFill (spaces) {
    let emptyTile = `<div class="puz-grid end"></div>`;
    for (let i = 0; i < spaces; i++) {
      $(`.puzzle`).append(emptyTile);
    }
  },

  appendWords (splitPuzzle) {
    let tileClass;
    splitPuzzle.forEach(index => {
      if (index === ' ' || index === '-') {
        tileClass = 'space';
      } else {
        tileClass = index;
      }
      $(`.puzzle`).append(`<div class="puz-grid secret ${tileClass}">${index} </div>`);
    });
  },

  appendPuzzle (puzzle, splitPuzzle) {
    
    if (splitPuzzle.length <= 14 ) {
      this.fillSpace(splitPuzzle.length, false);
      this.appendWords(splitPuzzle);
      this.fillSpace(splitPuzzle.length, true);
    }
  },

  
  



  },


  setCategoryText(category){
    $('.clue-container').text(category)
  }






  // for example:
  //    var finalWager = `<section class="final-question-display">
  //       <h1>FINAL JEOPARDY</h1>
  //       <h4 class="cat-0"></h4>
  //       <button class="final-wager-button">Place your bets!</button>
  //       <div class= "final-wager-input">
  //         <input type="number" class="player 0 wager">
  //         <input type="number" class="player 1 wager">
  //         <input type="number" class="player 2 wager">
  //       </div>
  //     </section>`;
  //     $('.question-box-area').html(finalWager);

//      $('.word-box').append(<div>letter</div>)
//     question.answer.split('').forEach(letter => {
// $('.word-box').append(<div>letter</div>))
// $('.word-box').append(<div>letter</div>)

  // <div class="word-box">
  // ---new ones here----
  // </div>

}