import { useState } from "react";
import { Item } from "../types/type";
import { v4 as uuid } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

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
      <Grid container>
        <Grid item xs>
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            value={itemName}
            onChange={changeItemName}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ ml: 3, mt: 1 }}
            onClick={clickButton}
          >
            생성
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default InsertItem;
