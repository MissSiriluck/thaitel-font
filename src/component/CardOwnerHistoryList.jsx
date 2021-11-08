// import { residents } from "../mocks/residents";
import { Button, Container, Grid, Select, Typography } from "@mui/material";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { Box, styled } from "@mui/system";
import { CreateResidentContext2 } from "../context/CreateResidentContext2";
import { useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { useHistory } from "react-router";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

//customize button red
const CustomButtonRoot = styled("button")(`
    background-color: none;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    font-family: 'Noto Sans Thai', sans-serif;
    font-size: 14px;
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;

    &:hover {
        background-color: #FF0005;
    }

    &.${buttonUnstyledClasses.active} {
        background-color: #9a2a2c;
    }

    &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
    }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function CardOwnerHistoryList({ resident, deleteResident }) {
  const { createResident, setCreateResident } = useContext(
    CreateResidentContext2
  );

  // const [count, setCount] = useState(0);
  console.log("residents.......", resident);

  // useEffect(() => {
  //   const fetchResident = async () => {
  //     try {
  //       const res = await axios.get(`/bookings/getByUserId`);
  //       setCount(res.data.count);
  //       // console.log(res.data.count);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchResident();
  // }, []);

  const history = useHistory();

  const handleClickEditResidents = () => {
    history.push(`/ownerdetail/${resident.id}`);
  };

  // console.log(count);

  const handleDeleteResident = async () => {
    deleteResident(resident.id);
    try {
      await axios.delete(`/residents/deleteResident/${resident.id}`);
    } catch (err) {
      console.dir(err);
    }
    // const clone = {...resident};
    // clone.splice(index, 1);
    // try {
    //   await axios.delete(`campaign/${id}`)
    // }
  };

  // try {
  //   await axios.delete(`campaign/${id}`);
  //   const idx = campAlls.findIndex(item => item.id === id);
  //   if (idx !== -1) {
  //     const newCampAlls = [...campAlls];
  //     newCampAlls.splice(idx, 1);
  //     setCampAlls(newCampAlls);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <Grid item xs={12}>
      {/* {resident.map((resident) => ( */}
      <Grid
        item
        id=''
        xs={12}
        sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 2, mb: 2 }}
      >
        <Grid container>
          <Grid item xs={2}>
            <img
              src={resident?.imgUrl}
              style={{
                width: "170px",
                height: "170px",
                borderRadius: 8,
              }}
              alt='resident-img'
            />
          </Grid>

          <Grid item xs={7} sx={{ flexGlow: 1, mt: 1, ml: 3 }}>
            <Grid container>
              <Grid item xs={3}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  ชื่อที่พัก
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ mb: 1 }}>{resident?.name}</Typography>
              </Grid>
            </Grid>

            {/* {resident?.rooms?.map(item => (
              <>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                      ชื่อห้องพัก
                    </Typography>
                  </Grid>

                  <Grid item xs={9}>
                    <Typography sx={{ mb: 1 }}>{item.typeOf}</Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={3}>
                    <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                      จำนวนห้องพักที่เหลือ
                    </Typography>
                  </Grid>
                  <Grid item xs={9} sx={{ width: "500px" }}>
                    <Typography sx={{ mb: 1 }}>
                      {item.roomAmount - item.countBookedRoom} ห้อง จาก{" "}
                      {item.roomAmount} ห้อง
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ))} */}

            <Grid container>
              <Grid item xs={3}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  จังหวัด
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ mb: 1 }}>{resident?.province}</Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={3}>
                <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                  รายละเอียดอื่นๆ{" "}
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography
                  sx={{
                    mb: 1,
                    textOverflow: "ellipsis",
                    // maxWidth: 8,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  {resident?.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={2.7} sx={{ justifyContent: "flex-end" }}>
            <Grid item sx={{ justifyContent: "flex-end" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignContent: "flex-end",
                  bottom: "0",
                  right: "0",
                }}
              >
                <Button
                  variant='outlined'
                  sx={{
                    mr: 1,
                    borderRadius: "10px",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    width: "100px",
                    boxShadow:
                      "0 4px 20px 0 rgb(61 71 82 / 10%), 0 0 0 0 rgb(0 127 255 / 0%)",
                  }}
                  onClick={handleClickEditResidents}
                >
                  DETAIL
                </Button>
                <CustomButton
                  sx={{
                    background: "#c62828",
                    color: "#fff",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100px",
                    p: 2,
                  }}
                  onClick={handleDeleteResident}
                >
                  ลบข้อมูล
                </CustomButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* ))} */}
    </Grid>
  );
}

export default CardOwnerHistoryList;
