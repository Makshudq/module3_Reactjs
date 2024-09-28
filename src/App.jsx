import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const title = "React Js";
  const description = "Hello World !!!";
  return (
    <>
      <div className="main_div">
        <h1>{title} </h1>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Card description={description} />
      </div>
    </>
  );
}

export default App;
