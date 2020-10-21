import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let cities = [
      "Goa(India)",
      "Amsterdam(Netherlands)",
      "New York(USA)",
      "Darjeeling(India)",
      "Tokyo(Japan)",
      "Lonavala(India)"
    ];
    return (
      <>
        <ol>
          {this.cities.map((city, index) => (
            <li key={"location" + (index + 1)}>{city}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
