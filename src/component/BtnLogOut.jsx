import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { removeToken } from "../service/localStorage";

function BtnLogOut() {
  const [open, setOpen] = React.useState(false);
  const { user, setUser } = useContext(AuthContext);

  const anchorRef = React.useRef(null);

  const history = useHistory();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClickLogout = e => {
    e.preventDefault();
    removeToken();
    setUser(null);
    history.push("/login");
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box>
      <Button
        color='inherit'
        sx={{ marginLeft: 2, fontFamily: "'Noto Sans Thai', sans-serif" }}
        ref={anchorRef}
        id='composition-button'
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        {`Name Account`}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='bottom-start'
        transition
        disablePortal
        sx={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper sx={{ width: "140px", background: "#16264D", mt: "5px" }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={handleListKeyDown}
                >
                  <Link
                    to='/history'
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <MenuItem onClick={handleClose} sx={{ color: "#fff" }}>
                      History
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={handleClickLogout} sx={{ color: "#fff" }}>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

export default BtnLogOut;
