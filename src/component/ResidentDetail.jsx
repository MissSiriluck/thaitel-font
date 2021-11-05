import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "../config/axios";
import { Box, styled } from "@mui/system";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Rating, Typography } from "@mui/material";
import CarouselBox from "./CarouselBox";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import SpaIcon from "@mui/icons-material/Spa";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
// import { residents } from "../mocks/residents";
import res_1 from "../assets/images/residents/hotel-1.jpeg";
import { useHistory, useLocation, useParams } from "react-router-dom";

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

function ResidentDetail() {
  
  const [rooms, setRooms] = useState([]);
  const [resident, setResident] = useState({});
  const [residentImage, setResidentImage] = useState('')
  
  const history = useHistory();
  const location = useLocation();
  const params = useParams()

  useEffect(() => {
    const fetchResidentByid = async () => {
      // const res = await axios.get(`/residents/${user.id}`);
      const res = await axios.get(`/residents/residentId/${params.residentId}`);
      console.log(`res.data`, res.data)
      
      setRooms(res.data.rooms);
      setResident(res.data.resident);
      setResidentImage(res.data.resident.ResidentImgs[0].imgUrl)
    };
    fetchResidentByid();
  }, [])

  // console.log(`resident`, resident)
  // console.log(`resident.ServiceItems`, resident.ServiceItems)
  // console.log(`rooms`, rooms)

  const filterService = resident?.ServiceItems?.filter((item) => item.isHaving === true)
  console.log(`filterService`, filterService)

  const useStyles = makeStyles({
    root: {
      width: "7vw",
      height: "5vh",
      position: "absolute",
      top: "15vh",
      left: "30vw",
    },
  });
  const classes = useStyles();

  const handleOnClickEditResident = e => {

    e.preventDefault();
    
    history.push({ 
        pathname: `/owner_edit_resident/${resident.id}`,
        state: {
          resident: resident, 
          rooms: rooms,
        }
    })
  }


  return (
    <Grid container>
      <Grid item>
        {/* <CarouselBox /> */}
        <img
          src={residentImage}
          style={{
            width: "1152px",
            height: "450px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
          alt=''
        />

        {/* Name hotel and other detail */}
        <Grid container>
          <Grid
            item
            id=""
            xs={12}
            sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 4, mb: 2 }}
          >
            <Typography sx={{ fontSize: "24px", pb: 2 }}>
              {resident?.name}
            </Typography>
            <Typography sx={{ lineHeight: "1.8" }}>
              {resident?.description}
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

            <Grid container sx={{ flexWrap: "wrap" }}>

              {filterService?.map((service) => (
                <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                {service?.serviceName === 'parking'? <DirectionsCarIcon /> : 
                service?.serviceName === 'breakFast'? <FastfoodIcon /> : 
                service?.serviceName === 'wifi'? <WifiIcon /> :                
                service?.serviceName === 'swimingPool'? <FastfoodIcon /> :                
                service?.serviceName === 'bar'? <LocalBarIcon /> :                
                service?.serviceName === 'sauna'? <SpaIcon /> :                
                service?.serviceName === 'reception'? <RoomServiceIcon /> :                
                service?.serviceName === 'roomService'? <RoomServiceIcon /> :                
                service?.serviceName === 'fitnessRoom'? <FitnessCenterIcon /> : null}                
                <Typography sx={{ ml: 2 }}>{service?.serviceName}</Typography>
              </Grid>
               ))} 
            </Grid>
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
                  {resident?.timeCheckInStart} - {resident?.timeCheckInEnd} 
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
                  {resident?.timeCheckOutStart} - {resident?.timeCheckOutEnd}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* room type block */}
        {rooms.map((room) => (
          <Grid
            item
            id=""
            xs={12}
            sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 4, mb: 2 }}
          >
            <Grid container>
              <Grid item xs={2.2}>
                <img
                  src={room.imgURL}
                  style={{
                    width: "170px",
                    height: "170px",
                    borderRadius: 8,
                  }}
                />
              </Grid>
              <Grid item xs={9.8} sx={{ flexGlow: 1 }} sx={{ mt: 2 }}>
                <Grid container>
                  <Grid item xs={5}>
                    <Typography sx={{ fontSize: "20px", mb: 1 }}>
                      {room.typeOf}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      {resident.province}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      จำนวนแขกที่เข้าพักได้ {room?.maxGuest} คน / ห้อง
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography sx={{ mb: 1 }}>
                      จำนวนห้องพักที่เหลือ {room?.roomAmount- room?.countBookedRoom} ห้อง
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      Room size : {room?.size} ตร.ม.
                    </Typography>
                    <Typography sx={{ mb: 1 }}>Price : {room?.pricePerNight} BATH</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{
              width: "240px",
              fontFamily: "'Noto Sans Thai', sans-serif",
              fontSize: "20px",
              mt: 3,
              mb: 15,
              mr: 1,
              borderRadius: "10px",
            }}
            onClick={handleOnClickEditResident}
          >
            แก้ไขข้อมูล
          </Button>
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
              width: "200px",
            }}
            onClick={e => { history.push({ pathname: '/ownerhistory'})}}
          >
            กลับสู่หน้าหลัก
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ResidentDetail;
