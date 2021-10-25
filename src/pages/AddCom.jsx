import "../assets/css/AddCom.css";
import { useState } from "react";
import Carousel from "../component/Carousel";
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Search from "../component/Search";
// import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";
import { Box, styled } from "@mui/system";
import iconbar from "../assets/images/ICON-BAR.png";
import iconbed from "../assets/images/ICON-BED.png";
import iconbreakfast from "../assets/images/ICON-BREAKFAST.png";
import iconcarpark from "../assets/images/ICON-CARPARK.png";
import iconexercise from "../assets/images/ICON-EXERCISE.png";
import iconpillow from "../assets/images/ICON-PILLOW.png";
import iconsmoking from "../assets/images/ICON-SMOKING.png";
import iconswim from "../assets/images/ICON-SWIM.png";
import iconwifi from "../assets/images/ICON-WIFI.png";
import bed1 from "../assets/images/bed1.png";
import bed2 from "../assets/images/bed2.png";
// import hottel1 from "../assets/images/hotel-1.jpeg";
import { Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import hottel3 from "../assets/images/hotel-3.jpeg";

function AddCom() {
  const [room, setRoom] = useState("");
  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
  // top: 5vh;
  // left: 15vw;
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

  const handleChange = event => {
    setRoom(event.target.value);
  };
  return (
    <div className='background'>
      <div className='background-left'> </div>
      <div className='background-right'>
        <Carousel />
        <div className='background-hotel-name'>
          <p className='addcom-hotel-name'>PARADISE TREE HOSTEL</p>
          <p className='addcom-hotel-detail'>
            The Newnormal House ตั้งอยู่ในจังหวัดเชียงใหม่
            อยู่ห่างจากตลาดช้างเผือก 200 ม. มีห้องอาหาร บาร์และวิวเมือง
            โรงแรมระดับ 3 ดาวนี้มีโต๊ะบริการทัวร์และบริการตั๋ว
            ที่พักนี้มีห้องครัวส่วนกลาง
            บริการรับจอดรถและบริการแลกเปลี่ยนสกุลเงินสำหรับผู้เข้าพัก
            ห้องพักทุกห้องที่โฮสเทลนี้มีห้องน้ำที่ใช้ร่วมกันพร้อมฝักบัว
            เครื่องเป่าผมและมีเครื่องใช้ในห้องน้ำฟรี
          </p>
        </div>
        <div className='service-in-hotel'>
          <p className='service-title'>บริการภายในโรงแรม</p>
          <div className='icon-background'>
            <div className='icon-divide'>
              <img
                src={iconbar}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Bar</span>
            </div>
            <div className='icon-divide'>
              <img
                src={iconbed}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Bed</span>
            </div>
            <div className='icon-divide'>
              <img
                src={iconbreakfast}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Breakfast</span>
            </div>
            <div className='icon-divide'>
              <img
                src={iconcarpark}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Carpark</span>
            </div>
            <div className='icon-divide'>
              <img
                src={iconexercise}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Exercise</span>
            </div>
            <div className='icon-divide'>
              <img
                src={iconpillow}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Pillow</span>
            </div>
            <div className='icon-divide'>
              <img
                src={iconsmoking}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Smoking</span>
            </div>
            <div className='icon-divide'>
              <img
                src={iconswim}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Swim</span>
            </div>
            <div className='icon-divide'>
              <img
                src={iconwifi}
                alt=''
                style={{ width: "5vw", height: "10vh" }}
              />
              <span className='icon-title'>Wifi</span>
            </div>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            border: "1px solid #BFBFBF",
            borderRadius: "10px",
            flexGrow: 1,
            p: 1,
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
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Box sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1, mb: -2 }}>
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
                  9.00AM -14.00PM
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Box sx={{ p: 1 }}>
              <CalendarTodayIcon />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Box sx={{ display: "flex", p: 1, flexGrow: 1, mr: 1, mb: -2 }}>
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
                  9.00AM -14.00PM
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <div className='bed-background'>
          <img src={bed1} alt='' className='bed-pic' />
          <p className='room-title'>ห้องมาตราฐานเตียงเดี่ยว</p>
          <Box className={classes.root}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>จำนวนห้อง</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={room}
                label='จำนวนห้อง'
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <button className='reserve-button'>Reserve</button>
          <div className='detail-room-background'>
            <p className='detail-room'>Room size : 3.5 ฟุต x 6.5 ฟุต</p>
            <p className='detail-room'>Price : 1500 BATH</p>
            <p className='detail-room'>Remaining Room : 10 Rooms</p>
          </div>
        </div>
        <div className='bed-background'>
          <img src={bed2} alt='' className='bed-pic' />
          <p className='room-title'>ห้องมาตราฐานเตียงเดี่ยว</p>
          <Box className={classes.root}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>จำนวนห้อง</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={room}
                label='จำนวนห้อง'
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <button className='reserve-button'>Reserve</button>
          <div className='detail-room-background'>
            <p className='detail-room'>Room size : 3.5 ฟุต x 6.5 ฟุต</p>
            <p className='detail-room'>Price : 1500 BATH</p>
            <p className='detail-room'>Remaining Room : 10 Rooms</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddCom;
// import iconbed from "../assets/images/ICON-BED.png";
// import iconbreakfast from "../assets/images/ICON-BREAKFAST.png";
// import iconcarpark from "../assets/images/ICON-CARPARK.png";
// import iconexercise from "../assets/images/ICON-EXERCISE.png";
// import iconpillow from "../assets/images/ICON-PILLOW.png";
// import iconsmoking from "../assets/images/ICON-SMOKING.png";
// import iconswim from "../assets/images/ICON-SWIM.png";
// import iconwifi from "../assets/images/ICON-WIFI.png";
