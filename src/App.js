import React, { Component } from 'react';
import './App.css';

import { Button } from "./components";

import "./css/style.css";

class App extends Component{
  state = {
    current:"0",
    previous: [],
    nextIsReset: false
  };

  reset = () => {
    this.setState({current: "0", previous: [], nextIsReset: false});
  }
  addToCurrent = (symbol) => {
    if(["/","X","+","-"].indexOf(symbol) > -1){
      let {previous} = this.state;
      previous.push(this.state.current + symbol);
      this.setState({previous, nextIsReset: true});
    } else if((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset ){
      
      this.setState({current: symbol, nextIsReset: false});
    }
    else{
      this.setState({current: this.state.current + symbol});
    }
  }
  render(){
    let {previous, current} = this.state;
    const buttons = [
      { symbol: "C", cols: 3, action: this.reset },
      { symbol: "/", cols: 1, action: this.addToCurrent },
      { symbol: "7", cols: 1, action: this.addToCurrent },
      { symbol: "8", cols: 1, action: this.addToCurrent },
      { symbol: "9", cols: 1, action: this.addToCurrent },
      { symbol: "X", cols: 1, action: this.addToCurrent },
      { symbol: "4", cols: 1, action: this.addToCurrent },
      { symbol: "5", cols: 1, action: this.addToCurrent },
      { symbol: "6", cols: 1, action: this.addToCurrent },
      { symbol: "-", cols: 1, action: this.addToCurrent },
      { symbol: "1", cols: 1, action: this.addToCurrent },
      { symbol: "2", cols: 1, action: this.addToCurrent },
      { symbol: "3", cols: 1, action: this.addToCurrent },
      { symbol: "+", cols: 1, action: this.addToCurrent },
      { symbol: "0", cols: 2, action: this.addToCurrent },
      { symbol: ".", cols: 1, action: this.addToCurrent },
      { symbol: "=", cols: 1, action: this.addToCurrent },
    ];
    return (
      <div className="app">
        {this.state.previous ? 
          <div className="previous">{previous}</div>
        : null
        }
        <input className="result" type="text" value={current}/>
        {/* <Button /> */}

        {buttons.map((btn, i) => 
          <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)}/>
        )}
      </div>
    );
  }
}

export default App;