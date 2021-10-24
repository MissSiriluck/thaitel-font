import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function SpaceforHead() {
  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: "#fff",
        p: 2,
        boxShadow: "none",
      }}
    >
      <Toolbar></Toolbar>
    </AppBar>
  );
}

export default SpaceforHead;
