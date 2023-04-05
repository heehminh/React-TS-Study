import { Item } from "../types/type";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemList = ({ items, setItems }: Props) => {
  const clickDelete = (id: string) => {
    setItems(items.filter((data) => data.itemId !== id));
  };

  const clickComplete = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }
        return item;
      })
    );
  };

  return (
    <ul>
      {items.map((data: Item) => {
        return (
          <li key={data.itemId}>
            <p>{data.itemName}</p>
            <div>
              <button onClick={() => clickDelete(data.itemId)}>삭제</button>
              <button onClick={() => clickComplete(data)}>해결</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
