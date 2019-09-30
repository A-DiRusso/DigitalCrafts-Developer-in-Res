
function Counter(props){
  return(
    <div className="counter">
      <div className="buttons">
          <button className="minus waves-effect waves-light btn" >-</button>
          <button className="plus waves-effect waves-light btn">+</button>
      </div>
      <div className="team-score">0</div>
    </div>   
  )
}
function Team(props){
  return(
    <div className="team">
      <div className="team-name">{props.name}</div>
      <Counter />
    </div>
  )
}

// App is uppercase which means it's a componenet
//All components WITH OUT EXCEPTION MUST RETURN A SINGLE DOM ELEMENT
function App(props){
  return (
    <div className="container">
      <div className="row center">
        <h1>{props.title}</h1>
      </div>
      <div className="teams">
        <Team name="Bears" />
        <Team name="Packers" />
      </div>
    </div>
  )
}
//ReactDOM.render takes 2 args:
//1. What
//2. Where
ReactDOM.render(
  <App title="Opening NFL Game"/>,
  document.querySelector('#root')
)