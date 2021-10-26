import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box, Fab, Grid, styled } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";

// customize button
const CustomButtonRoot = styled("span")(`
    padding: 15px 50px;
    border-radius: 4px;   
    font-family: 'Noto Sans Thai', sans-serif;    
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
        outline: #64CEEF70 solid 3px;
        box-shadow: "#64CEEF 0px 0px 0px 10px";
    }

    &.${buttonUnstyledClasses.active} {
        outline: #64CEEF solid 2px;
    }

    &.${buttonUnstyledClasses.focusVisible} {
        outline: #64CEEF solid 2px;
    }
`);

export function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

//customize popover
const PopoverStyle = {};

function BtnGuestnRoom(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [room, setRoom] = React.useState(1);
  // const [guest, setGuest] = React.useState(1);

  //popover
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //add number of guest
  function handleAddGuest() {
    // setGuest(current => current + 1);
    props.setGuest(current => current + 1)
  }

  function handleMinusGuest() {
    if (guest > 1) {
      props.setGuest(current => current - 1);
    }
  }

  //add number of room
  function handleAddRoom() {
    setRoom(current => current + 1);
  }

  function handleMinusRoom() {
    if (room > 1) {
      setRoom(current => current - 1);
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <CustomButton
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}
        sx={{ background: "#fff", color: "#000", width: "500px" }}
      >
        {`จำนวนผู้เข้าพัก ${guest} คน, ${room}  ห้อง`}
      </CustomButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        style={PopoverStyle}
        sx={{ width: "100%", mt: "1px", flexGlow: 1 }}
      >
        <Grid container sx={{ width: "280px" }}>
          <Grid item xs={6}>
            <Box sx={{ flexGlow: 1 }}>
              <span className='type' sx={{ pr: 5, mr: 4 }}>
                <Typography sx={{ p: 2, fontSize: "16px", width: "100%" }}>
                  จำนวนผู้เข้าพัก
                </Typography>
              </span>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                display: "flex",
                alignItems: "center",
                flexGlow: 1,
              }}
            >
              <Fab color='primary' aria-label='minus' size='small'>
                <RemoveIcon onClick={handleMinusGuest} />
              </Fab>
              <span>
                <Typography>{guest}</Typography>
              </span>
              <Fab color='primary' aria-label='add' size='small'>
                <AddIcon onClick={handleAddGuest} />
              </Fab>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Box>
              <span className='type' sx={{ pr: 5, mr: 4 }}>
                <Typography sx={{ p: 2, fontSize: "16px", width: "100%" }}>
                  จำนวนห้อง
                </Typography>
              </span>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Fab color='primary' aria-label='minus' size='small'>
                <RemoveIcon onClick={handleMinusRoom} />
              </Fab>
              <span>
                <Typography>{room}</Typography>
              </span>
              <Fab color='primary' aria-label='add' size='small'>
                <AddIcon onClick={handleAddRoom} />
              </Fab>
            </Box>
          </Grid>
        </Grid>
      </Popover>
    </div>
  );
}

export default BtnGuestnRoom;
