import React, { useState } from "react";
import "./styles.css";

export function JSCALC() {
  const [formula, setFormula] = useState("0");
  const [result, setResult] = useState("0");
  const [decimal, setDecimal] = useState("0");
  // 0 - current number isn't a decimal
  // 1 - current number is a decimal
  const [equals, setEquals] = useState("false");
  const handleClick = (e) => {
    if (equals === true && !isNaN(e.target.name)) {
      setResult(e.target.name);
      setFormula("0");
      setEquals("false");
    }
    if (e.target.name === "." && decimal === "1") {
      return;
    }
    // don't allow  multiple consecutive decimal points
    if (e.target.name === ".") {
      setDecimal("1");
    } else if (isNaN(e.target.name)) {
      setDecimal("0");
    }
    // check if math symbol used,  and if so reset decimal tracker
    if (
      isNaN(e.target.name) &&
      /[-/*+]$/.test(result) &&
      e.target.name !== "-"
    ) {
      setResult(result.replace(/.$/, e.target.name));
      return;
    }
    // prevent and replace multiple consecutive signs with the exception of "-"

    setResult(result.concat(e.target.name).replace(/^0/, ""));
  };
  // update result each time
  const clear = () => {
    setFormula("0");
    setResult("0");
    setDecimal("0");
  };
  // reset calculator
  const calculate = () => {
    setEquals("1");
    try {
      setFormula(
        result.replace(/\*+/g, "") +
          "=" +
          eval(result.replace(/\*+/g, ""))
            .toFixed(5)
            .toString()
            .replace(/\.?0+$/, ""),
      );
      // store formula and result here
      setResult(
        eval(
          result.replace(/\*\+/g, (match) => {
            if (match === "*+") return "+";
            return match;
          }),
        )
          .toFixed(5)
          .toString()
          .replace(/\.?0+$/, ""),
      );
      // calculate  and store only the result here
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="JSCalculator_App">
      <form>
        <p id="JSCalculatordisplay" style={{ color: "orange" }}>
          {result}
        </p>
        {/* shows result once = is hit */}
        <p id="displayFormula">{formula}</p>
      </form>
      {/* keeps the formula, mostly for troubleshooting and because it looks cool */}
      <div className="grid-container">
        <button className="button" onClick={clear} id="clear">
          Clear
        </button>

        <button id="divide" className="button" name="/" onClick={handleClick}>
          ÷
        </button>
        <button id="multiply" className="button" name="*" onClick={handleClick}>
          ×
        </button>
        <button id="seven" className="button" name="7" onClick={handleClick}>
          7
        </button>
        <button id="eight" className="button" name="8" onClick={handleClick}>
          8
        </button>
        <button id="nine" className="button" name="9" onClick={handleClick}>
          9
        </button>
        <button id="subtract" className="button" name="-" onClick={handleClick}>
          -
        </button>
        <button id="four" className="button" name="4" onClick={handleClick}>
          4
        </button>
        <button id="five" className="button" name="5" onClick={handleClick}>
          5
        </button>
        <button id="six" className="button" name="6" onClick={handleClick}>
          6
        </button>
        <button id="add" className="button" name="+" onClick={handleClick}>
          +
        </button>
        <button id="one" className="button" name="1" onClick={handleClick}>
          1
        </button>
        <button id="two" className="button" name="2" onClick={handleClick}>
          2
        </button>
        <button id="three" className="button" name="3" onClick={handleClick}>
          3
        </button>
        <button id="zero" className="button" name="0" onClick={handleClick}>
          0
        </button>

        <button id="decimal" className="button" name="." onClick={handleClick}>
          .
        </button>
        <button id="equals" className="button" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}
