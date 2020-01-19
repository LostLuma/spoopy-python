import React from "react";
import { Redirect } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  let switchPage = false;

  function goToSpoopy(event) {
    const keyCode = event.keyCode || event.which;
    if (event.type === "click" || keyCode === 13) {
      console.log(true);
      switchPage = true;
      // window.location.pathname += "site/" + encodeURIComponent(document.getElementById("input").value);
    }
  }

  if (switchPage) {
    return (
      <Redirect to="/site/test"/>
    );
  } else {
    return (
      <div className="wrapper">
        <h1>Spoopy Website Detector</h1>
        <h3>Checks how risky a website is by checking for IP Logging, Phishing, Malware and more.</h3>
        <div>
          <label htmlFor="input">Check a link:</label>
          <input id="input" type="text" onKeyUp={goToSpoopy}/>
          <button id="go" onClick={goToSpoopy} onKeyUp={goToSpoopy}>Go</button>
        </div>
      </div>
    );
  }


}

export default Homepage;
