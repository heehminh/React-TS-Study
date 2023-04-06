import { useState } from "react";
import { Item } from "../types/type";
import { v4 as uuid } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { addItem } from "../modules/itemReducer";
import { useDispatch } from "react-redux";

const InsertItem = () => {
  const [itemName, setItemName] = useState("");

  const dispatch = useDispatch();

  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const clickButton = () => {
    const itemData = {
      id: uuid(),
      name: itemName,
      clear: false,
    };
    dispatch(addItem(itemData.id, itemData.name, itemData.clear));
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
