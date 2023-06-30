import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
import { useState } from 'react';


function App() {

  const [counter, setCounter] = useState(1);
  const incrementFunction = () => {
      setCounter(counter + 1);
  }

  function decrementFuntion() {
      setCounter(counter - 1)
  }


  return (
    <div className="App">
      <Counter Increment={incrementFunction} Decrement={decrementFuntion} counter={counter}/>
      <Coin counter={counter}/>
    </div>
  );
}

export default App;
