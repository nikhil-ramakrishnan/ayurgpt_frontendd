import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";
const ImageSearchInput = (props) => {
  const [query, setQuery] = useState("");

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };
  async function searchHandler(event) {
    event.preventDefault();
    const url = "http://localhost:5000/plant/" + query;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    const item = {
      path: data.path,
      text: data.text,
    };
    props.onSearchPressed(item);
  }

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        margin: "12px",
        borderRadius: "10px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search AyurHub"
        inputProps={{ "aria-label": "Search Ayurhub" }}
        value={query}
        onChange={queryChangeHandler}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={searchHandler}
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
};
export default ImageSearchInput;
