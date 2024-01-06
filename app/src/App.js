import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [screen, setScreen] = useState("")
    const [errormsg, setErrormsg] = useState("")
    const [result, setResult] = useState(0)

    useEffect(() => {
        setScreen("0");
    }, []);

    const handleButtonClick = (e) => {

        setErrormsg("");
        let error = false;

        if (screen === "0" && isNaN(e) || screen === result.toString() && isNaN(e)) {
            error = true;
            setErrormsg("You can't start with an operator.")
        } else if (isNaN(e) && isNaN(screen[screen.length - 1])) {
            error = true;
            setErrormsg("You can't use two operators in a row.");
        }

        if(!error) {
            if(screen === "0" || screen === result.toString()) {
                setScreen(e.toString());
            } else{
                setScreen(screen + e.toString());
            }
        }
    }

    const handleCalcClick = (e) => {
        if(screen === "0") {
            setErrormsg("You can't calculate with only 0.");
        } else if(isNaN(screen[screen.length - 1])) {
            setErrormsg("You can't end with an operator.");
        } else {
            setResult(eval(screen));
            setScreen(eval(screen).toString());
        }
    }

    const handleDelClick = () => {
        if(screen.length > 1) {
            setScreen(screen.substring(0, screen.length - 1));
        }
        else {
            setScreen("0");
        }
    }

  return (
      <>
          <div className="body">
              <div className="screensection">
                  <div className="screenpos">
                      <h2 className="screen">{screen}</h2>
                  </div>
                  <div className="delpos">
                      <button className="del" onClick={handleDelClick}>{'<'}</button>
                  </div>
              </div>
              <p className="error">{errormsg}</p>
              <div className="section">
                  <button className="num" onClick={() => handleButtonClick(1)}>1</button>
                  <button className="num" onClick={() => handleButtonClick(2)}>2</button>
                  <button className="num" onClick={() => handleButtonClick(3)}>3</button>
                  <button className="operator" onClick={() => handleButtonClick("+")}>+</button>
              </div>
              <div>
                  <button className="num" onClick={() => handleButtonClick(4)}>4</button>
                  <button className="num" onClick={() => handleButtonClick(5)}>5</button>
                  <button className="num" onClick={() => handleButtonClick(6)}>6</button>
                  <button className="operator" onClick={() => handleButtonClick("-")}>-</button>
              </div>
              <div>
                  <button className="num" onClick={() => handleButtonClick(7)}>7</button>
                  <button className="num" onClick={() => handleButtonClick(8)}>8</button>
                  <button className="num" onClick={() => handleButtonClick(9)}>9</button>
                  <button className="operator" onClick={() => handleButtonClick("*")}>*</button>
              </div>
              <div className="zerosection">
                  <button className="zer" onClick={() => handleButtonClick(0)}>0</button>
                  {/*<button className="num" onClick={() => handleButtonClick(".")}>,</button>*/}
                  <button className="operator" onClick={() => handleCalcClick()}>=</button>
              </div>
          </div>
      </>
  );
}

export default App;
