import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState();

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1 );
  }

  const toggleLight = () =>{
    setIsOn(prevIsOn=> !prevIsOn);
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={incrementCount}>Clicked {count} times</button>
      <h2>Toggle Light</h2>
      <div onClick={toggleLight} style={{width:"50px", height:"50px", background: isOn ? "yellow" : "grey"}}>

      </div>
    </div>
    
  );
}

export default App;
