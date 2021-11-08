import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
// Mui
import { Container, Grid, Typography } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CardOwnerHistoryList from "../component/CardOwnerHistoryList";
import { ResidentContext } from "../context/ResidentContext";
import axios from "../config/axios";
import { AuthContext } from "../context/AuthContext";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { Box, styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

//customize button blue
const CustomButtonRoot = styled("button")(`
    background-color: #03A9F4;
    padding: 12px 35px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-family: 'Noto Sans Thai', sans-serif;
    font-size: 16px;
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;
    width: 100%;

    &:hover {
        background-color: #64CEEF;
    }

    &.${buttonUnstyledClasses.active} {
        background-color: #0276aa;
    }

    &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
    }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

function OwnerHistoryPage() {
  const { user } = useContext(AuthContext);
  const { residents, setResidents } = useContext(ResidentContext);
  // console.log(user);

  const [openSnackDeleteResident, setOpenSnackDeleteResident] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackDeleteResident(false);
  };

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const res = await axios.get(`/residents/getAllResByOwner`);
        setResidents(res.data.resultResident);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchResident();
  }, []);
  // console.log("residents................", residents);

  const deleteResident = id => {
    const newResidents = [...residents];
    const idx = residents.findIndex(item => item.id === id);
    if (idx !== -1) {
      newResidents.splice(idx, 1);
      setResidents(newResidents);
      setOpenSnackDeleteResident(true);
    }
  };

  const history = useHistory();
  // const location = useLocation();

  const handleClickRoomSumary = e => {
    console.log(residents);
    e.preventDefault();
    history.push({
      pathname: "/createresident",
      state: {
        // resident: resident,
        //   //   checkInDate: "2020-10-11",
        //   //   checkOutDate: "2020-10-12",
        //   //   rooms: filterRoom,
      },
    });
  };

  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth='lg' sx={{ mt: 18, mb: 12 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", flexDirection: "row", mb: 3 }}
          >
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "25px", mb: 1 }}>
                  สวัสดี คุณ {user.firstName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "16px" }}>
                  รายละเอียดที่พักของฉัน
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomButton onClick={handleClickRoomSumary}>
                เพิ่มที่พักของคุณ
              </CustomButton>
            </Grid>
          </Grid>

          {residents.length > 0 ? (
            <>
              <Grid container>
                {residents?.map(item => (
                  <CardOwnerHistoryList
                    resident={item}
                    deleteResident={deleteResident}
                  />
                ))}
              </Grid>
              <Snackbar
                open={openSnackDeleteResident}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity='success'
                  sx={{ width: "100%" }}
                >
                  การลบที่พักของคุณได้ดำเนินการสำเร็จแล้ว
                </Alert>
              </Snackbar>
            </>
          ) : (
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Box>
                  <img src='ownerHistory.jpg' width='600' height='400' />
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "25px",
                  }}
                >
                  คุณยังไม่ได้ลงที่พัก ....
                </Typography>
              </Box>
            </Grid>
          )}
          {/* {} */}
          {/* <CardOwnerHistoryList /> */}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default OwnerHistoryPage;
