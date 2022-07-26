import React from "react";

import Header from "./components/Header";
import Aside from "./components/Aside";
import RouterPath from "./RouterPath";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Aside />
        <RouterPath />
      </main>
    </>
  );
}

export default App;
