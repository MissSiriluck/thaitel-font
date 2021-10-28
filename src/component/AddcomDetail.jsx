import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, styled } from "@mui/system";
// import res_1 from "../assets/images/residents/hotel-1.jpeg";
// import iconbar from "../assets/images/ICON-BAR.png";
// import iconbed from "../assets/images/ICON-BED.png";
// import iconbreakfast from "../assets/images/ICON-BREAKFAST.png";
// import iconcarpark from "../assets/images/ICON-CARPARK.png";
// import iconexercise from "../assets/images/ICON-EXERCISE.png";
// import iconpillow from "../assets/images/ICON-PILLOW.png";
// import iconsmoking from "../assets/images/ICON-SMOKING.png";
// import iconswim from "../assets/images/ICON-SWIM.png";
// import iconwifi from "../assets/images/ICON-WIFI.png";
// import bed1 from "../assets/images/bed1.png";
// import bed2 from "../assets/images/bed2.png";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@mui/material";
// import CarouselBox from "./CarouselBox";
// import CarouselBox from "./CarouselBox";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import WifiIcon from "@mui/icons-material/Wifi";
// import PoolIcon from "@mui/icons-material/Pool";
// import LocalBarIcon from "@mui/icons-material/LocalBar";
// import SpaIcon from "@mui/icons-material/Spa";
// import AlarmOnIcon from "@mui/icons-material/AlarmOn";
// import RoomServiceIcon from "@mui/icons-material/RoomService";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
// import { residents } from "../mocks/residents";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useHistory, useLocation } from "react-router";
// import { makeStyles } from "@material-ui/styles";
// import CarouselBox from "./CarouselBox";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import WifiIcon from "@mui/icons-material/Wifi";
// import PoolIcon from "@mui/icons-material/Pool";
// import LocalBarIcon from "@mui/icons-material/LocalBar";
// import SpaIcon from "@mui/icons-material/Spa";
// import AlarmOnIcon from "@mui/icons-material/AlarmOn";
// import RoomServiceIcon from "@mui/icons-material/RoomService";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

// import { residents } from "../mocks/residents";
// import Image from "material-ui-image";
import EachRoomCard from "./EachRoomCard";

//customize button blue
const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 12px 35px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-family: 'Noto Sans Thai', sans-serif;
    font-size: 14px;
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;

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

function AddcomDetail() {
  const location = useLocation();
  // console.log("location...................................", location);
  // const { user } = useContext(AuthContext);

  // const [room, setRoom] = useState("");

  const [rooms, setRooms] = useState([]);
  const [resident, setResident] = useState({});
  // const [roomBookingAmount, setRoomBookingAmount] = useState(0);

  const filterRoom = rooms.filter((item) => item.roomBookingAmount > 0);
  console.log("filterRoom...........", filterRoom);

  useEffect(() => {
    const fetchResidentByid = async () => {
      // const res = await axios.get(`/residents/${user.id}`);
      const res = await axios.get(`/residents/${location.state.id}`);
      const roomsFetch = res.data?.rooms?.map((item) => {
        return {
          roomId: item.id,
          typeOf: item.typeOf,
          pricePerNight: item.pricePerNight,
          imgURL: item.imgURL,
          size: item.size,
          roomDetail: item.roomDetail,
        };
      });
      setRooms(roomsFetch);
      setResident(res.data);
      // console.log("res.data.......................", res.data);
    };
    fetchResidentByid();
  }, []);

  console.log("rooms.............................", rooms);
  console.log("resident.............................", resident);

  const history = useHistory();

  const roomEachInfo = rooms.map((item) => item.typeOf);
  console.log(roomEachInfo);

  const handleClickRoomSumary = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/BookingConfirmation",
      state: {
        resident: resident,
        checkInDate: "2020-10-11",
        checkOutDate: "2020-10-12",
        rooms: filterRoom,
        // [
        // {
        //   roomId: 1,
        //   typeOf: "two bed",
        //   pricePerNight: 1000,
        //   roomBookingAmount: filterRoom,
        // },
        // {
        //   roomId: 1,
        //   typeOf: "one bed",
        //   pricePerNight: 2000,
        //   roomBookingAmount: 1,
        // },
        // ],
      },
    });
  };

  const updateRoomAmount = (roomId, roomBookingAmount) => {
    const newRoom = [...rooms];
    const idx = newRoom.findIndex((item) => item.roomId === roomId);
    if (idx !== -1) {
      newRoom[idx].roomBookingAmount = roomBookingAmount;
      setRooms(newRoom);
    }
  };
  // console.log("rooms................", rooms);

  return (
    <Grid container>
      <Grid item>
        {/* <CarouselBox /> */}
        {resident?.resident?.ResidentImgs?.map((resident) => (
          <img
            src={resident.imgUrl}
            style={{ width: "1116px", height: "450px", mb: 2 }}
          />
        ))}

        {/* Name hotel and other detail */}
        <Grid container>
          <Grid
            item
            id=""
            xs={12}
            sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 4, mb: 2 }}
          >
            <Typography sx={{ fontSize: "24px", pb: 2 }}>
              {resident?.resident?.name}
              {/* {`PARADISE TREE HOSTEL`} */}
            </Typography>
            <Typography sx={{ lineHeight: "1.8" }}>
              {resident?.resident?.description}
            </Typography>
          </Grid>

          {/* Service block */}
          <Grid
            item
            id=""
            xs={12}
            sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 4, mb: 2 }}
          >
            <Typography sx={{ fontSize: "24px", pb: 2 }}>
              บริการภายในโรงแรม
            </Typography>

            {resident?.resident?.ServiceItems?.map((resident) => (
              <Grid container sx={{ flexWrap: "wrap" }}>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                  <DirectionsCarIcon />
                  {/* <Typography sx={{ ml: 2 }}>ที่จอดรถ</Typography> */}
                  <Typography sx={{ ml: 2 }}>{resident.serviceName}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* check-in & check-out block */}
        <Box
          sx={{
            display: "flex",
            border: "1px solid #BFBFBF",
            borderRadius: "10px",
            flexGrow: 1,
            p: 1,
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderRight: "1px solid #BFBFBF",
              flexGrow: 1,
            }}
          >
            <Box sx={{ p: 1 }}>
              <CalendarTodayIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  p: 1,
                  flexGrow: 1,
                  mr: 1,
                  mb: -2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    p: 1,
                    mr: 1,
                    width: "10rem",
                  }}
                >
                  Check-in
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  p: 1,
                  flexGrow: 1,
                  mr: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    p: 1,
                    mr: 1,
                    width: "7rem",
                  }}
                >
                  Tue, Sep 21
                </Typography>
                <Typography sx={{ p: 1, flexGrow: 1 }}>
                  {resident?.resident?.timeCheckInStart} AM -
                  {resident?.resident?.timeCheckInEnd} PM
                  {/* 9.00AM -14.00PM */}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Box sx={{ p: 1 }}>
              <CalendarTodayIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  p: 1,
                  flexGrow: 1,
                  mr: 1,
                  mb: -2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    p: 1,
                    mr: 1,
                    width: "10rem",
                  }}
                >
                  Check-out
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  p: 1,
                  flexGrow: 1,
                  mr: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    p: 1,
                    mr: 1,
                    width: "7rem",
                  }}
                >
                  Tue, Sep 21
                </Typography>
                <Typography sx={{ p: 1, flexGrow: 1 }}>
                  {resident?.resident?.timeCheckOutStart} AM -
                  {resident?.resident?.timeCheckOutEnd} PM
                  {/* 9.00AM -14.00PM */}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* {resident.rooms.map(item) => ()} */}
        {/* {resident?.rooms?.map((resident) => ( */}
        {rooms?.map((room) => (
          <EachRoomCard room={room} updateRoomAmount={updateRoomAmount} />
        ))}

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            sx={{
              background: "#03a9f4",
              color: "#fff",
              fontFamily: "'Noto Sans Thai', sans-serif",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              mt: 3,
              mb: 15,
              p: 2.5,
              width: "50%",
            }}
            onClick={handleClickRoomSumary}
          >
            จองห้องพัก
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddcomDetail;

//...............................................
