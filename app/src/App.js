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
        let CommaError = false;

        if (e === "." && isNaN(screen[screen.length - 1])) {
            error = true;
            setErrormsg("You can't put two commas in a row.");
        } else if (isNaN(e) && isNaN(screen[screen.length - 1])) {
            error = true;
            setErrormsg("You can't use two operators in a row.");
        } else if(e === ".") {
            const characterArray = screen.split("").map((char) => ({ char }));
            let commaEncountered = false; //Geef signaal als char.char een komma is. Zet weer op false als er daarna een operator is gekomen.
            let operatorEncountered = true; //Zet op true als er net een operator is geweest.
            //CommaError is true als commaCgeck true is terwijl operatorEncountered false is.

            const currentNumber = screen.split(/[\+\-\*]/).pop(); // Get the current number being entered
            const commaCount = (currentNumber.match(/\./g) || []).length; // Count the commas in the current number

            if (commaCount >= 1 && e === ".") {
                error = true;
                setErrormsg("A decimal number can only have 1 comma.");
            }
        }

        if(!error) {
            if((screen === "0" || screen === result.toString()) && !isNaN(e)) {
                setResult(0);
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
            setErrormsg("")
        }
    }

    const handleDelClick = () => {
        if(screen.length > 1) {
            setScreen(screen.substring(0, screen.length - 1));
        }
        else {
            setScreen("0");
        }

        if(screen === result.toString()) {
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
              <div className="section">
                  <button className="num" onClick={() => handleButtonClick(4)}>4</button>
                  <button className="num" onClick={() => handleButtonClick(5)}>5</button>
                  <button className="num" onClick={() => handleButtonClick(6)}>6</button>
                  <button className="operator" onClick={() => handleButtonClick("-")}>-</button>
              </div>
              <div className="section">
                  <button className="num" onClick={() => handleButtonClick(7)}>7</button>
                  <button className="num" onClick={() => handleButtonClick(8)}>8</button>
                  <button className="num" onClick={() => handleButtonClick(9)}>9</button>
                  <button className="operator" onClick={() => handleButtonClick("*")}>*</button>
              </div>
              <div className="zerosection">
                  <button className="zer" onClick={() => handleButtonClick(0)}>0</button>
                  <button className="num" onClick={() => handleButtonClick(".")}>,</button>
                  {/*<button className="operator" onClick={() => handleCalcClick()}>/</button>*/}
                  <button className="operator" onClick={() => handleCalcClick()}>=</button>
              </div>
          </div>
      </>
  );
}

export default App;
