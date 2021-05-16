import "./App.css";
import Button from "./components/Button/Button";
import React from "react";
import Display from "./components/Display/Display";
import { evaluate } from "mathjs";
import { dataContext } from "./hoc/dataContext";

let App = () => {
  const [result, setResult] = React.useState(0);
  const [history, setHistory] = React.useState([]);
  const [expresionView, setExpresionView] = React.useState("");
  const [expresion, setExpresion] = React.useState("");
  const [theme, setTheme] = React.useState("white");

  const buttons = React.useContext(dataContext)
  const containerStyle = ["container", theme];
  const buttonThemeStyle = ["buttonTheme", theme];

  React.useEffect(() => {
    if (
      expresion !== "" &&
      !expresion.endsWith("-") &&
      !expresion.endsWith("+") &&
      !expresion.endsWith("*") &&
      !expresion.endsWith("/")
    )
      setResult(evaluate(expresion));
  }, [expresion]);

  let handleClick = (sign) => {
    if (!"=+-/*deleteC%.".includes(sign.value)) {
      setExpresion((prevExpresion) => prevExpresion.concat(sign.value));
      setExpresionView((prevExpresionView) =>
        prevExpresionView.concat(sign.innerHTML)
      );
    } else if ("+-/*".includes(sign.value)) {
      setExpresion(String(result).concat(sign.value));
      setExpresionView(String(result).concat(sign.innerHTML));
    } else if ("=".includes(sign.value)) {
      const resultExp = {
        id: Date.now(),
        before: expresionView,
        after: result,
      };
      setHistory((prevHistory) => prevHistory.concat([resultExp]));
      setExpresionView("");
      setExpresion("");
    } else if (sign.value === "delete") {
      setExpresion((prevExpresion) => {
        if (prevExpresion.length === 1) {
          setResult(0);
          return "";
        }
        return prevExpresion.slice(0, prevExpresion.length - 1);
      });
      setExpresionView((prevExpresionView) => {
        if (prevExpresionView.length === 1) {
          setResult(0);
          return "";
        }
        return prevExpresionView.slice(0, prevExpresionView.length - 1);
      });
    } else if (sign.value === "C") {
      setResult(0);
      setExpresion("");
      setExpresionView("");
      setHistory([]);
    } else if (sign.value === ".") {
      if (expresion) {
        setExpresion((prevExpresion) => prevExpresion.concat(sign.value));
        setExpresionView((prevExpresionView) =>
          prevExpresionView.concat(sign.innerHTML)
        );
      } else {
        setExpresion((prevExpresion) => prevExpresion.concat(0 + sign.value));
        setExpresionView((prevExpresionView) =>
          prevExpresionView.concat(0 + sign.innerHTML)
        );
      }
    }
  };

  let handleKeyPress = (sign) => {
    sign.preventDefault();
    if ("1234567890".includes(sign.key)) {
      setExpresion((prevExpresion) => prevExpresion.concat(sign.key));
      setExpresionView((prevExpresionView) =>
        prevExpresionView.concat(sign.key)
      );
    }
  };

  let handleClickTheme = () => {
    setTheme((prevTheme) => (prevTheme === "white" ? "dark" : "white"));
  };

  return (
    <div
      className={containerStyle.join(" ")}
      onKeyPress={(event) => handleKeyPress(event)}
    >
      <button className={buttonThemeStyle.join(" ")} onClick={handleClickTheme}>
        {theme === "white" ? "Dark" : "White"}
      </button>
      <div className="calc">
        <Display result={result} expresion={expresionView} history={history} />
        <div className="input">
          {buttons.map((button) => (
            <Button
              key={button.id}
              type={button.type}
              area={button.gridAria}
              onClick={(event) => handleClick(event.target)}
              value={button.value}
              theme={theme}
            >
              {button.view}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
//123