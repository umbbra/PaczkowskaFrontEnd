import React from "react";
import "../sass/main.scss";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
