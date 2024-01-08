import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [screen, setScreen] = useState("")
    const [errormsg, setErrormsg] = useState("")
    const [clear, setClear] = useState("AC")
    const [result, setResult] = useState(0)

    useEffect(() => {
        setScreen("0");
    }, []);

    useEffect(() => {
        if(screen === "0"){
            setClear("AC")
        } else{
            setClear("C")
        }
    }, [screen])

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
            const currentNumber = screen.split(/[+\-*\/]/).pop();
            const commaCount = (currentNumber.match(/\./g) || []).length;

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
    }

    const handleClearClick = () => {
        setScreen("0");
        setResult(0);
        setErrormsg("");
    }

    const handleSetNegativeClick = () => {
        if(screen === "0"){
            setScreen("-");
        } else {
            setScreen(screen + "-");
        }
    }

    const handlePercentClick = () => {
        setScreen(eval(screen+"/100").toString());
    }

  return (
      <>
          <div className="body">
              <div className="screensection">
                  <h2 className="screen">{screen}</h2>
                  <button className="del" onClick={handleDelClick}>{'<'}</button>
              </div>
              <p className="error">{errormsg}</p>
              <div className="buttonBody">
                  <div className="section">
                      <button className="special" onClick={() => handleClearClick()}>{clear}</button>
                      <button className="special" onClick={() => handleSetNegativeClick()}>+/-</button>
                      <button className="special" onClick={() => handlePercentClick()}>%</button>
                      <button className="operator" onClick={() => handleButtonClick("/")}>÷</button>
                  </div>
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
                      <button className="operator" onClick={() => handleCalcClick()}>=</button>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
