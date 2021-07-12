const deckCards = ["Agility.png", "Agility.png", "Boat.png", "Boat.png", "Citizenship.png", "Citizenship.png", "Hack.png", "Hack.png", "Nerd-Rage.png", "Nerd-Rage.png", "Nuka-Cola.png", "Nuka-Cola.png", "Robotics.png", "Robotics.png", "Shock.png", "Shock.png"];

const deck = document.querySelector(".deck");
let opened = [];
let matched = [];
const modal = document.getElementById("modal");
const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-again-btn");
const movesCount = document.querySelector(".moves-counter");
let moves = 0;
const star = document.getElementById("star-rating").querySelectorAll(".star");
let starCount = 3;
const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// TODO: Implement this function
function startGame() {
  // Invoke shuffle function and store in variable
  const shuffledDeck = shuffle(deckCards);
  // Implement a for loop on the shuffledDeck array
  //for loop
  // for ( starting condition;  stopping condition; increment or decrement)
  for (let i = 0; i < shuffledDeck.length; i++) {
    // Create the <td> tags and assign it to a variable called tdTag
    const tdTag = document.createElement('td'); 
    // Give tdTag Element a class of card
    tdTag.classList.add('card');
    // Create the <img> tag and assign it to an addImage variable
    var addImage = document.createElement('img');
    // make the addImage a child of the tdTag
    tdTag.appendChild(addImage);
    // Set the addImage element src path with the shuffled deck
    // TODO: replace the REPLACE ME string with the element in the shuffledDeck array at index i
    addImage.setAttribute('src', 'img/' + shuffledDeck[i]);
    // Add an alt tag to the addImage element
    addImage.setAttribute('alt', 'image of vault boy from fallout');
    // make the tdTag element a child of the deck element
    deck.appendChild(tdTag);
  }
}
startGame();

function removeCard() {
  // As long as <ul> deck has a child node, remove it
  while (deck.hasChildNodes()) {
    deck.removeChild(deck.firstChild);
  }
}

function timer() {
  // Update the count every 1 second
  time = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    // Update the timer in HTML with the time it takes the user to play the game
    timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
  }, 1000);
}

function stopTime() {
  clearInterval(time);
}

function resetEverything() {
  // Stop time, reset the minutes and seconds update the time inner HTML
  stopTime();
  timeStart = false;
  seconds = 0;
  minutes = 0;
  timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: 00:00";
  // Reset star count and the add the class back to show stars again
  star[1].firstElementChild.classList.add("fa-star");
  star[2].firstElementChild.classList.add("fa-star");
  starCount = 3;
  // Reset moves count and reset its inner HTML
  moves = 0;
  movesCount.innerHTML = 0;
  // Clear both arrays that hold the opened and matched cards
  matched = [];
  opened = [];
  // Clear the deck
  removeCard();
  // Create a new deck
  startGame();
}

function incrMovesCounter() {
  // Update the html for the moves counter
  movesCount.innerHTML ++;
  // Keep track of the number of moves for every pair checked
  moves ++;
}

function adjustStarRating() {
  if (moves === 14) {
    // First element child is the <i> within the <li>
    star[2].firstElementChild.classList.remove("fa-star");
    starCount--;
  }
  if (moves === 18) {
    star[1].firstElementChild.classList.remove("fa-star");
    starCount--;
  }
}


// TODO: stub out this function after the compare the two images src comment
function compareTwo() {
  // When there are 2 cards in the opened array
  if (opened.length === 2) {
    // Disable any further mouse clicks on other cards
    document.body.style.pointerEvents = "none";
  }
  // Compare the two images src in the opened array
  if (opened.length[0] == opened[1]) {
    displayMatchingCards ();
    console.log("It's a Match");
    
  }
    
  }
  // TODO: implement
  // if the opened array has a length of two && the element at index = 0 src string
  // equals the element at index 1 src string
  // the image srcs match
  
    // TODO: Invoke the displayMatchingCards()
    // TODO: console log "It's a Match!"  
    
    
  // TODO: if the image src's do not match
  
    // TODO: invoke the displayNotMatchingCards()
    // TODO: console log "No Match!"
  


// TODO:
function displayMatchingCards() {
  /* Access the two cards in opened array and add
  the class of match to the imgages parent: the <li> tag
  */
  setTimeout(function() {
    // add the match class (Why are we adding it to the parentElement?)
      // the match class should make the img visible
      opened[0].parentElement.classList.add("match");
      opened[1].parentElement.classList.add("match");  
    // TODO: Push the flipped cards (opened[0] and opened[1]) to the matched array
    matched.push(opened[0])
    matched.push(opened[1])
    // Allow for further mouse clicks on cards
    document.body.style.pointerEvents = "auto";
    // TODO: invoke the checkIsGameFinished function
    checkIsGameFinished()
   
    // Clear the opened array
    opened = [];
  }, 600);
  // Call movesCounter to increment by one
  incrMovesCounter();
  adjustStarRating();
}

function displayNotMatchingCards() {
  /* After 700 miliseconds the two cards open will have
  the class of flip removed from the images parent element <li>*/
  setTimeout(function() {
    // Remove class flip on images parent element
    opened[0].parentElement.classList.remove("flip");
    opened[1].parentElement.classList.remove("flip");
    // Allow further mouse clicks on cards
    document.body.style.pointerEvents = "auto";
    // Remove the cards from opened array
    opened = [];
  }, 700);
  // Call movesCounter to increment by one
  incrMovesCounter();
  adjustStarRating();
}

function addStatsToModal() {
  // Access the modal content div
  const statsParent = document.querySelector(".modal-content");
  // Create three different paragraphs
  for (let i = 1; i <= 3; i++) {
    // Create a new Paragraph
    // TODO: create p tag and assign it a newly created statsElement variable
    
    // Add a class to the new Paragraph
    // TODO: add the stats class to the statsElement
    // <p var = {statsElement} class="p.stats"></p>;
    
    // Add the new created <p> tag to the modal content
    // TODO: add the statsElement as a child of the statsParent element
    
  }
  // Select all p tags with the class of stats and update the content
  let p = statsParent.querySelectorAll("p.stats");
  // Set the new <p> to have the content of stats (time, moves and star rating)
  // TODO: Update all of the innerHTML text appropriately
  p[0].innerHTML = "Update the time here with the minutes and seconds";
  p[1].innerHTML = "Update this with how many moves it took";
  p[2].innerHTML = "Update this with the star rating";
}

// TODO: Implement the pseudocode
function displayModal() {
// use getElementByID to grab the id="close" element and assign it to a variable called modalClose

// use getElementByID to grab the id="modal" element and assign it to a variable called modal

// Set modal to display block to show it


// When the user clicks on the modalClose <span> (x), 
modalClose.onclick = function() {
    // set modal to diplay none
    
};
// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      
      if (event.target === modal) {
        // update modal style to display none
        modal.style.display = "none"
      }
  };
}

function checkIsGameFinished() {
  // there are 8 images total
  // if the matched array has 16 elements,
  if (matched.length === 16) {
    // stop the game
    //TODO: invoke the stopTime function
    
    // tally stats
    // TODO: invoke the addStatsToModal
    
    
    // display modal
    // TODO: invoke the displayModal function
    
    
  }
}

// if a card is clicked
  // if timerStart is false
      // start timer
  // flip the card

deck.addEventListener("click", function(evt) {
  if (evt.target.nodeName === "TD") {
    // To console if I was clicking the correct element
    console.log(evt.target.nodeName + " Was clicked");
    // Start the timer after the first click of one card
    // Executes the timer() function
    if (timeStart === false) {
      timeStart = true;
      timer();
    }
    // Call flipCard() function
    flipCard();
  }

  //Flip the card and display cards img
  function flipCard() {
    // When <li> is clicked add the class .flip to show img
    evt.target.classList.add("flip");
    // Call addToOpened() function
    addToOpened();
  }

  //Add the fliped cards to the empty array of opened
  function addToOpened() {
    /* If the opened array has zero or one other img push another
    img into the array so we can compare these two to be matched
    */
    if (opened.length === 0 || opened.length === 1) {
      // Push that img to opened array
      opened.push(evt.target.firstElementChild);
    }
    // Call compareTwo() function
    compareTwo();
  }
});

reset.addEventListener('click', resetEverything);

playAgain.addEventListener('click',function() {
  modal.style.display = "none";
  resetEverything();
});
