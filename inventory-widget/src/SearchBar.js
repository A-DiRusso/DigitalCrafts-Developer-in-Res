import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
    }
  }

  changeSearch = (event) => {
    const newVal = event.target.value;
    // this.setState({
    //   search: newVal,
    // })
    this.props.changeFromParent(newVal)
  }
  // changeSearch = (e) => this.setState({ search: e.target.value });

  render() {
    console.log(this.props.search);
    return (
      <div className="search-bar">
        <input 
          type="text" 
          value={this.props.search}
          onChange={this.changeSearch}
          placeholder="Search" />
        <div>
            <input 
              id="in-stock" 
              type="checkbox"
            /> Only show products in stock
        </div>
      </div>
    )
  }
}


