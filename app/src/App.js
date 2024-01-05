import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [screen, setScreen] = useState(0)

    useEffect(() => {
        setScreen(35453);
    }, []);

    const handleButttonClick = (e) => {
        console.log(e.target.value)
    }

  return (
<>
    <div className="body">

          <h2 className="screen">{screen}</h2>
          <div className="section">
              <button className="num" onClick={handleButttonClick}>1</button>
              <button className="num" onClick={handleButttonClick}>2</button>
              <button className="num" onClick={handleButttonClick}>3</button>
              <button className="operator" onClick={handleButttonClick}>+</button>
          </div>
          <div className="section">
              <button className="num" onClick={handleButttonClick}>4</button>
              <button className="num" onClick={handleButttonClick}>5</button>
              <button className="num" onClick={handleButttonClick}>6</button>
              <button className="operator" onClick={handleButttonClick}>-</button>
          </div>
          <div className="section">
              <button className="num" onClick={handleButttonClick}>7</button>
              <button className="num" onClick={handleButttonClick}>8</button>
              <button className="num" onClick={handleButttonClick}>9</button>
              <button className="operator" onClick={handleButttonClick}>*</button>
          </div>
          <div className="section">
              <button className="zer" onClick={handleButttonClick}>0</button>
              <button className="num" onClick={handleButttonClick}>,</button>
              <button className="operator" onClick={handleButttonClick}>=</button>
          </div>
      </div>
</>
  );
}

export default App;
