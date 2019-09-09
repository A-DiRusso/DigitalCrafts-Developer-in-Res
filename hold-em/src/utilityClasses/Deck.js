// No extends because this is not a component 
// this is just some javaScript
class Deck{
  constructor(){
    this.cards = [];
  }

  create = () => {
    const suits = ['h', 's', 'd', 'c'];
    suits.forEach((suit) => {
      for (let c = 1; c <= 13; c++){
        this.cards.push(c + suit);
      }
    })
  }

  shuffle = () => {
    for(let i = 0; i < 10000000; i++) {
      let randOne = Math.floor(Math.random() * 52);
      let randTwo = Math.floor(Math.random() * 52);
      let temp = this.cards[randOne];
      this.cards[randOne] = this.cards[randTwo];
      this.cards[randTwo] = temp;
    }
  }
  


}

export default Deck;