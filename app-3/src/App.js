import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
  
    this.state = {
      filterStr: '',
      foods: ['spaghetti', 'ice cream', 'sushi', 'sandwich', 'cheese']
    }
  }

  handleChange(filter){
    this.setState({filterStr: filter})
  }

render(){
  let displayFood = this.state.foods.filter((item, i) => {
    return item.includes(this.state.filterStr);
  }).map((el, i) => {
    return <h2 key={i} > {el}</h2>
  })

    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value) } type="text" />
          {displayFood}
      </div>
    );
  }
}

export default App;
