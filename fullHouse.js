// Build a program that determines if a hand of cards is a full house. (3 of a kind and pair of another)
// Assume I will be feed a string that represents hand ie "10 2 3 J K"

function isFullHouse(c) {
  let hand = {}
  let cards = c.split(" ")

  cards.forEach((card) => {
   hand[card] === undefined ? hand[card] = 1 : hand[card]++
  })

  // This works assuming I am given an input with 5 cards.
  return (Object.keys(hand).length === 2) ? true : false
}

console.log(isFullHouse("J J J 2 3"))
console.log(isFullHouse("2 2 3 3 4"))
console.log(isFullHouse("A A K K K"))
