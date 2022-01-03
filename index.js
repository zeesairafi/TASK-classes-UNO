/**
 * Instructions:
 * • Always try to refresh the browser, or use live server
 * • Open the inspect window on chrome to see if there are any logs
 *
 *
 *
 * Steps:
 * 1. (100 points) Create a class Card that takes 2 properties `number`, and `color`
 * 2. (100 points) Create the constructor inside the class `Card` that initializes color and number
 * 3. (100 points) after creating the class, create 4 objects from the class Card for Green, Blue, Red, and Yellow cards, give them any numbers.
 * 4. (50 points) console.log every single object.
 * 5. (200 points) Add a method to class Card called `image()` that doesn't take any parameter, and it returns a string that represent the image path stored corresponding to card info
 *    The image path is as follows `./images/COLOR_NUMBER.png`
 *    Examples:
 *  - `./images/Blue_9.png`
 *  - `./images/Yellow_7.png`
 *  - `./images/Red_4.png`
 *  - `./images/Blue_8.png`
 * 6. (100 points) Add 3 cards to the array `cards` defined below by using `.push` method on the cards array
 *    Check the browser, you will see four cards!
 * 7. (1000 Points!)- great now you noticed that you created 4 objects manually, but that shouldn't be the case.
 *      the Uno deck includes 80 numbers (0-9 from each color)
 *
 *      it has four colors ["Yellow","Red","Blue","Green"]
 *    - Comment out the objects that you created
 *    - you should fill the cards dynamically, instead of the ones we created object by object,
 *      you need to use loops and fill the cards deck in a loop (Hint: You should use `for` loops, )
 *
 */
let cards = []; // You will use this array in step 6

// Continue the code here 👇🏻
class Card{
 constructor(number, color){
  this.number = number;
  this.color = color;

}
image = () => {
  return `./images/${this.color}_${this.number}.png`;
}
}
const Green = new Card(4, "Green");
const Blue = new Card(9, "Blue");
const Red = new Card(3, "Red");
const Yellow = new Card(7, "Yellow"); 

cards.push(Green);
cards.push(Blue);
cards.push(Red);
cards.push(Yellow);
console.log(Green);
console.log(Blue);
console.log(Red);
console.log(Yellow);

//for (i =1; i < 81; i++) {
//  i<=10? cards.push(new Card(i-1, "Green")): i<=20? cards.push(new Card(i-11, "Yellow")): i<=30? cards.push(new Card(i-21, "Blue")): i<=40? cards.push(new Card(i-31, "Red")): i<=50? cards.push(new Card(i-41, "Green")): i<=60? cards.push(new Card(i-51, "Yellow")): i<=70? cards.push(i-61, "Blue"): i<=80? cards.push(new Card(i-71, "Red")): true
  
//}
//cards.push();
/**
 *
 * Don't touch this code
 * This function is going to render the cards array to the HTML page,
 */
function render(array) {
  document.getElementById("cards-container").innerHTML = array
    .map(cardComponent)
    .join("");
}

render(cards);
