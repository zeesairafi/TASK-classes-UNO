/**
 * Instructions:
 * • Always try to refresh the browser, or use live server
 * • Open the inspect window on chrome to see if there are any logs
 *
 *
 *
 * Steps:
 * 1. Create a class Card that takes 2 properties `number`, and `color`
 * 2. Create the constructor inside the class `Card` that initializes color and number
 * 3. after creating the class, create 4 objects from the class Card for Green, Blue, Red, and Yellow cards, give them any numbers.
 * 4. console.log every single object.
 * 5. Add a method to class Card called `image()` that doesn't take any parameter, and it returns a string that represent the image path stored corresponding to card info
 *    The image path is as follows `./images/COLOR_NUMBER.png`
 *    Examples:
 *  - `./images/Blue_9.png`
 *  - `./images/Yellow_7.png`
 *  - `./images/Red_4.png`
 *  - `./images/Blue_8.png`
 * 6. add 3 cards to the array cards defined below by using `.push` method on the cards array
 * 7. check the browser, you will see four cards!
 * 8. great now you noticed that you created 4 objects manually, but that shouldn't be the case.
 *      the Uno deck includes 80 numbers (0-9 from each color)
 *
 *      it has four colors ["Yellow","Red","Blue","Green"]
 * 8. Comment out the objects that you created
 * 9. you should fill the cards dynamically, instead of the ones we created object by object,
 *      you need to use loops and fill the cards deck in a loop (Hint: You should use `for` loops, )
 *
 */

class Card {
  constructor(number, color) {
    this.color = color;
    this.number = number;
  }

  image() {
    return `./images/${this.color}_${this.number}.png`;
  }
}

// const card1 = new Card(1, "red");
// const card2 = new Card(1, "blue");
// const card3 = new Card(1, "green");
// const card4 = new Card(1, "yellow");
// console.log(card1);
// console.log(card2);
// console.log(card3);
// console.log(card4);

let cards = [];
// cards.push(card1);
// cards.push(card2);
// cards.push(card3);
// cards.push(card4);

let colors = ["Yellow", "Blue", "Red", "Green"];
for (let color of colors) {
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < 2; j++) {
      cards.push(new Card(i, color));
    }
  }
}

// Write the code here

/**
 *
 * Don't touch this code
 */
function render(array) {
  document.getElementById("cards-container").innerHTML = array
    .map(cardComponent)
    .join("");
}

render(cards);
