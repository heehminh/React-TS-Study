import React, { useState } from "react";
import "./App.css";
import { Item } from "./types/type";
import InsertItem from "./components/insertItem";
import ItemList from "./components/itemList";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  return (
    <div>
      <div>
        <div>
          <h1>{`Todo List`}</h1>
        </div>
        <InsertItem items={items} setItems={setItems}></InsertItem>
        <ItemList items={items} setItems={setItems}></ItemList>
      </div>
    </div>
  );
}

export default App;
