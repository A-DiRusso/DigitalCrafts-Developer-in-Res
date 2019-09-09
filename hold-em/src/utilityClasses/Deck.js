// No extends because this is not a component 
// this is just some javaScript
class Deck{
  constructor(){
    //no need to call constructor
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
    console.log("shuffling");
  }



}

export default Deck;