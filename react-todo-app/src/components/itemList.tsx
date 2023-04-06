import { Item } from "../types/type";
import { RootState } from "../modules";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, clearItem } from "../modules/itemReducer";

const ItemList = () => {
  const todo = useSelector((state: RootState) => state.itemReducer.todo);
  const dispatch = useDispatch();
  const clickDelete = (id: string) => {
    dispatch(deleteItem(id));
  };

  const clickComplete = (data: Item) => {
    dispatch(clearItem(data.itemId));
  };

  return (
    <ul>
      {todo.map((data: Item) => {
        return (
          <li key={data.itemId} className="list-item">
            <p className={data.clear ? `complete` : ``}>{data.itemName}</p>
            <div>
              <button
                className="button-delete"
                onClick={() => clickDelete(data.itemId)}
              >
                삭제
              </button>
              <button
                className="button-complete"
                onClick={() => clickComplete(data)}
              >
                해결
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
