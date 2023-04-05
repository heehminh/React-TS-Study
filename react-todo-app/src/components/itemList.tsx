import { Item } from "../types/type";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList = ({ items, setItems }: Props) => {
  return (
    <ul>
      {items.map((data: Item, index) => {
        return (
          <li key={index}>
            <p>{data.itemName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
