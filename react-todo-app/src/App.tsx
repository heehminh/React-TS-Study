import React, { useEffect, useState } from "react";
import "./App.css";
import { Item } from "./types/type";
import InsertItem from "./components/insertItem";
import ItemList from "./components/itemList";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <header>
          <h1>{`Todo List`}</h1>
        </header>
        <InsertItem />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
