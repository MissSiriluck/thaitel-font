import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  zIndex: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000000",
  background: "#ffffff",
  borderRadius: "4px",
  fontFamily: "'Noto Sans Thai', sans-serif",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    padding: `${theme.spacing(2)} 0`,
    paddingLeft: theme.spacing(6),
    width: "20vw",
    "&:hover, &:focus": {
      border: "1px solid #64CEEF",
      borderRadius: "4px",
      boxShadow: "#64CEEF30 0px 0px 0px 3px",
    },
  },
}));

function SearchingBox() {
  return (
    <Search sx={{ mr: 3 }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='จะไปไหน'
        inputProps={{ "aria-label": "search" }}
        sx={{ color: "#000000" }}
      />
    </Search>
  );
}

export default SearchingBox;
