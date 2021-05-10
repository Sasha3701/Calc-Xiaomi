import React from "react";
import "./Button.css";

let Button = (props) => {
  const buttonStyle = ["buttonSign", props.theme, props.type, props.area];

  return (
    <React.Fragment>
      <button
        type="button"
        className={buttonStyle.join(" ")}
        disabled={props.type === "plug"}
        onClick={props.onClick}
        value={props.value}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
