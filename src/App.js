import React from "react";
import "./App.css";

import TodoProvider from "./components/TodoContext/TodoContext";
import Container from "./components/Container/Container";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <header className="App-header">
          <Container />
        </header>
      </div>
    </TodoProvider>
  );
}

export default App;
