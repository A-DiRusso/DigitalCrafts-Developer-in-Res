
class CoinFlip extends React.Component{
  // this is a child or sub-class. It is a child of React.Component 
  // React.Component is the parent or super class
  // we get cool stuff in CoinFlip, because it is a sub-class
  constructor(){
    super(); // Call super because this is a child class let mom and dad know
    // React doesn't know or care about heads/tails/coins
    this.heads = 'buffalo-nickel-heads.jpg';
    this.tails = 'buffalo-nickel-tails.png';
    this.coin = [
      this.heads,
      this.tails,
    ]
    // React cares about state A LOT!
    // React is speacial 
    this.state = {
      image: this.coin[0],
    }
    // this.flip = this.flip.bind(this); ---- this is how you make an old school function know about """this"""
  }
  // rockect functions don't create a new Context for 'this'
  flip = () => {
    console.log('Flip was called!');
    let coinSide = Math.round(Math.random()); // 0, 1
    //this is a setter
    this.setState({
      image: this.coin[coinSide],
    })
  };

  render() {
    return(
      <div className="coin-flip">
        <button onClick={this.flip}>Flip!</button>
        <img src={this.state.image} />
      </div>
    )
  }
}
ReactDOM.render(
  <CoinFlip />,
  document.getElementById('root')
)