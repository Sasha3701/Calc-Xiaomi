import React from "react";
import "./Display.css";

let Display = (props) => {
  return (
    <div className="display">
      {props.history.length === 0 || (
        <div className="history">
          {props.history.map((item) => (
            <React.Fragment key={item.id}>
              <p className="before">{item.before}</p>
              <p className="after">{item.after}</p>
            </React.Fragment>
          ))}
        </div>
      )}
      <div className="main">{props.result}</div>
      {props.expresion !== "" && (
        <div className="additional">{props.expresion}</div>
      )}
    </div>
  );
};

export default Display;
