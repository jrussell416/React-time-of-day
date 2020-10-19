//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const timeOfDay = new Date();
var time = timeOfDay.getHours();
var greeting;

const timeColour = {
  color: ""
};

if (time < 12) {
  greeting = "Good Morning";
  timeColour.color = "red";
} else if (time >= 12 && time <= 18) {
  greeting = "Good Afternoon";
  timeColour.color = "green";
} else if (time >= 18 && time <= 24) {
  greeting = "Good Evening";
  timeColour.color = "blue";
}

ReactDom.render(
  <div>
    <h1 style={timeColour}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
