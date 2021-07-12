# Instructions file

### Weekend Assignment Due Monday, July 12th, 12 pm PST

When you implement a step with an X by it, write a brief sentence or two about what the step did or how it worked. For example, you could talk about absolute and relative path.

When you add the match class to an element, what does it do?
When you remove a flip element, what does it do?
Why does querySelectAll give us an array of elements?




1. (X) Connect the given javascript file to your HTML 
2. (X) Connect the given styles file to your HTML
3. (X) Use the styles file to center the container class element in the middle of the screen using flexbox use a flex direction of column
4.  In your HTML file, inside of the section element that has a class of "win-game-modal", Create a div in your HTML that has a class of modal and id of modal
	1. add a child div to that modal and give it class of modal-content
	2. The next 6 steps all happen in the div.modal-content element
		1. add a span with an id of close
		2. inside of the span with the id of close, type &times; in the opening and closing span tags.
		3.  inform the user that they won and found all 8 pairs of cards
		4. Show the vault-boy-thumb-up image
		5. add a button with a class of btn and play-again-btn with text that reads "Play Again?"
		6. (X) Style the modal content and make it look good  (try display flex, justify content center, flex direction column, align items center)
	3. Once your done styling the modal class implement the following changes
		1. give your modal class
			1. (X) position: fixed
			2. (X) top: 0
			3. (X) left: 0
			4. (X) display: none
5. Go to the JS file and look over the code, using the steps below will guide you on fixing the code.
	1. (X) Go to the startGame function and implement the pseudo code
	2. (X) Go to the compareTwo function and implement the pseudo code
	3. (X) Go the displayMatching Cards function and complete the unimplemented pseudo code
	4. (X) Go to the checkIsGameFinished and implement pseudo code
	5. (X) Go to the addStatsToModal function and complete the unimplemented pseudocode
		1. Also change the innerHTML for the p tags so that they have useful information in it to the user.
	6. (X) Go to the displayModal function and complete the unimplemented pseudocode

Stuck??
- After each major step, click through the game and see if any errors come up. If an error comes up refer to steps above and corresponding pseudo code to ensure to implemented it correctly.
- Open up the sources tab in the dev tools. Then open the js file and place a break in the start game function and or where you think the problem is to figure out where the bug is.


Challenge Mode
- Write your own shuffle function


Hints: Only look at these if you absolutely stuck. You can do this! Don't give up. Reread the steps. Go to office hours. Ping an instructor or another student for help before checking this out, open up the dev tools, look in the console for errors, use the debugger. 

It will serve you will not to rely on this until you have tried everything.
- startGame()
```
// TODO: Implement this function
function startGame() {
  // Invoke shuffle function and store in variable
  const shuffledDeck = shuffle(deckCards);
  // Implement a for loop on the shuffledDeck array
  for( let i = 0; i < shuffledDeck.length; i++) {
    // Create the <td> tags and assign it to a variable called tdTag
    const tdTag = document.createElement('td');
    // Give tdTag Element a class of card
    tdTag.classList.add('card');
    // Create the <img> tag and assign it to an addImage variable
    const addImage = document.createElement('img');
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
```
- DisplayMatchingCards()
```
// TODO: complete the unimplemented pseudo code
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
```
- DisplayNotMatchingCards()
```
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
```
- addStatsToModal
```
function addStatsToModal() {
  // Access the modal content div
  const statsParent = document.querySelector(".modal-content");
  // Create three different paragraphs
  for (let i = 1; i <= 3; i++) {
    // Create a new Paragraph
    // TODO: create p tag and assign it a newly created statsElement variable
    const statsElement = document.createElement('p')
    // Add a class to the new Paragraph
    // TODO: add the stats class to the statsElement
    statsElement.classList.add('stats')
    
    // Add the new created <p> tag to the modal content
    // TODO: add the statsElement as a child of the statsParent element
    statsParent.appendChild(statsElement);
  }
  // Select all p tags with the class of stats and update the content
  let p = statsParent.querySelectorAll("p.stats");
  // Set the new <p> to have the content of stats (time, moves and star rating)
  // TODO: Update all of the innerHTML text appropriately
  p[0].innerHTML = "Update the time here with the minutes and seconds";
  p[1].innerHTML = "Update this with how many moves it took";
  p[2].innerHTML = "Update this with the star rating";
}
```
- displayModal
```
// TODO: Implement the pseudocode
function displayModal() {
// use getElementByID to grab the id="close" element and assign it to a variable called modalClose
const modalClose = document.getElementById("close");
// use getElementByID to grab the id="moda" element and assign it to a variable called modal
const modal = document.getElementById("modal");
// Set modal to display block to show it
modal.style.display = "block"
// When the user clicks on <span> (x), 
modalClose.onclick = function() {
    // set modal to diplay none
    modal.style.diplay = "none"
};
// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      // if the event.target is the modal element
      if (event.target === modal) {
        // update modal style to display none
        modal.style.display = "none"
      }
  };
}
```
- checkIsGameFinished
```
function checkIsGameFinished() {
  // there are 8 images total
  // if the matched array has 16 elements,
  if (matched.length === 16) {
    // stop the game
    //TODO: invoke the stopTime function
    stopTime();
    // tally stats
    // TODO: invoke the addStatsToModal
    addStatsToModal();
    
    // display modal
    // TODO: invoke the displayModal function
    displayModal();
    
  }
}
```
- CompareTwo function. Try this:
```
if (opened.length === 2 && opened[0].src === opened[1].src) {
    // TODO: Invoke the displayMatchingCards()
    // TODO: console log "It's a Match!"  
    
  } else if (opened.length === 2 && opened[0].src !== opened[1].src) {
  // TODO: if the image src's do not match
  
    // TODO: invoke the displayNotMatchingCards()
    // TODO: console log "No Match!"
  }
```
