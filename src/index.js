import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
/////////////////////////////

function Button() {
  const [value, setCount] = useState(0);

  /*state = {
    counterClass: "counter",
    counterButtonClass: "counter-button"
  };*/
/*
  setCount = (newValue) => {
    this.setState({
      value: newValue
    });
  }*/

  return (<div>
      <h2 className="counter">{ value }</h2>
      <button className="counter-button" onClick={ () => setCount(value + 1) }>Click</button>
    </div>);
};

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);
