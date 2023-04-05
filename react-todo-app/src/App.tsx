import React, { useEffect, useState } from "react";
import "./App.css";
import { Item } from "./types/type";
import InsertItem from "./components/insertItem";
import ItemList from "./components/itemList";

function App() {
  const saveItem = localStorage["todos"]
    ? JSON.parse(localStorage.getItem("todos") || "")
    : [];
  const [items, setItems] = useState<Item[]>(saveItem);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  });
  return (
    <div className="container">
      <div className="app-wrapper">
        <header>
          <h1>{`Todo List`}</h1>
        </header>
        <InsertItem items={items} setItems={setItems}></InsertItem>
        <ItemList items={items} setItems={setItems}></ItemList>
      </div>
    </div>
  );
}

export default App;
