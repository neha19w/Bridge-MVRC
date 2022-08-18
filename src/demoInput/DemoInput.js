import React, { useState } from "react";
import "./DemoInput.css";
import demoInput from "./demoInput.json";
const DemoInput = () => {
  const [tag, setTag] = useState(false);
  const toggleMark = () => {
    console.log("in toggle");
    if (tag) {
      const mark = document.getElementById("markLine");
      mark.classList.remove("hide-mark");
      mark.classList.add("show-mark");
    }
    else{
      const mark = document.getElementById("markLine");
      mark.classList.remove("show-mark");
      mark.classList.add("hide-mark");
    }
  };
  const markLine = () => {
    console.log("in mark");
    setTag(!tag);
    toggleMark();
    console.log("in mark");
  };
  return (
    <div className="feed-table">
      {demoInput.map((item) => (
        <table className="table-responsive">
          <tbody className="feed-content">
            <tr>
              <td className="lineNo px-2">{item.lineNo}</td>
              <td className="timeCode">{item.timeCode}</td>
              <td className="line-annotation">
                
                  <button id="markLine" className="hide-mark" onClick={markLine}></button>
               
              </td>
              <td className="text">{item.text}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default DemoInput;
