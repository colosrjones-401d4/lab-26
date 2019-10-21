import React from 'react';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      words: 'I like React!',
    };
  }

  handleWords = e => {
    let words = e.target.value;
    this.setState({ words: words,});
  }

  handleButtonClick = e => {
    e.preventDefault();

    this.setState(state => {
      let words = state.words.split('').reverse().join('');

      return {
        words,
        count: state.count + 1,
      };
    });
  };

  handleButtonClick2 = e => {
    e.preventDefault();

    this.setState(state => {
      return {
        count: state.count - 1,
      }
    })
  };

  render() {
    let countClass = this.state.count > 0 ? 'positive' : 'zero' ;
    return (
      <main>
        <h3>{this.state.words}</h3>
        <h4 className={countClass}>{this.state.count}</h4>
        <input onChange={this.handleWords}/>
        <button onClick={this.handleButtonClick}>Click Me UP</button>
        <button onClick={this.handleButtonClick2}>Click Me DOWN</button>
      </main>
    );
  }
}

export default Main;