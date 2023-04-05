import { useState } from "react";
import { Item } from "../types/type";
import { v4 as uuid } from "uuid";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const InsertItem = ({ items, setItems }: Props) => {
  const [itemName, setItemName] = useState("");
  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const clickButton = () => {
    setItems([...items, { itemId: uuid(), itemName, clear: false }]);
    setItemName("");
    console.log(itemName);
  };

  return (
    <>
      <input type="text" value={itemName} onChange={changeItemName} />
      <button onClick={clickButton}>생성</button>
    </>
  );
};

export default InsertItem;
