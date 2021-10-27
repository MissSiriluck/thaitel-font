import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, styled } from "@mui/system";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
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
import { residents } from "../mocks/residents";
import res_1 from "../assets/images/residents/hotel-1.jpeg";

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
  const [room, setRoom] = useState("");

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
    <Grid container>
      <Grid item>
        {/* <CarouselBox /> */}
        <img
          src={res_1}
          style={{
            width: "1152px",
            height: "450px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        />

        {/* Name hotel and other detail */}
        <Grid container>
          <Grid
            item
            id=''
            xs={12}
            sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 4, mb: 2 }}
          >
            <Typography sx={{ fontSize: "24px", pb: 2 }}>
              {`PARADISE TREE HOSTEL`}
            </Typography>
            <Typography sx={{ lineHeight: "1.8" }}>
              {`The Newnormal House ตั้งอยู่ในจังหวัดเชียงใหม่
            อยู่ห่างจากตลาดช้างเผือก 200 ม. มีห้องอาหาร บาร์และวิวเมือง
            โรงแรมระดับ 3 ดาวนี้มีโต๊ะบริการทัวร์และบริการตั๋ว
            ที่พักนี้มีห้องครัวส่วนกลาง
            บริการรับจอดรถและบริการแลกเปลี่ยนสกุลเงินสำหรับผู้เข้าพัก
            ห้องพักทุกห้องที่โฮสเทลนี้มีห้องน้ำที่ใช้ร่วมกันพร้อมฝักบัว
            เครื่องเป่าผมและมีเครื่องใช้ในห้องน้ำฟรี`}
            </Typography>
          </Grid>

          {/* Service block */}
          <Grid
            item
            id=''
            xs={12}
            sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 4, mb: 2 }}
          >
            <Typography sx={{ fontSize: "24px", pb: 2 }}>
              บริการภายในโรงแรม
            </Typography>

            <Grid container sx={{ flexWrap: "wrap" }}>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <DirectionsCarIcon />
                <Typography sx={{ ml: 2 }}>ที่จอดรถ</Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <FastfoodIcon />
                <Typography sx={{ ml: 2 }}>อาหารเช้า</Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <WifiIcon />
                <Typography sx={{ ml: 2 }}>Wifi</Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <PoolIcon />
                <Typography sx={{ ml: 2 }}>สระว่ายน้ำ</Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <LocalBarIcon />
                <Typography sx={{ ml: 2 }}>บาร์</Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <SpaIcon />
                <Typography sx={{ ml: 2 }}>ห้องซาวน่า</Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <RoomServiceIcon />
                <Typography sx={{ ml: 2 }}>Room service</Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <FitnessCenterIcon />
                <Typography sx={{ ml: 2 }}>ห้องออกกำลังกาย</Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <AlarmOnIcon />
                <Typography sx={{ ml: 2 }}>
                  แผนกต้อนรับส่วนหน้า 24 ชั่วโมง
                </Typography>
              </Grid>
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
                  9.00AM -14.00PM
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
                  9.00AM -14.00PM
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* room type block */}
        {residents.map(resident => (
          <Grid
            item
            id=''
            xs={12}
            sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 4, mb: 2 }}
          >
            <Grid container>
              <Grid item xs={2.2}>
                <img
                  src={`${resident.url}`}
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
                      {`ห้องมาตราฐานเตียงเดี่ยว`}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      {`${resident.province}`}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      {`จำนวนแขกที่เข้าพักได้ {} คน / ห้อง`}
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography sx={{ mb: 1 }}>
                      {`จำนวนห้องพักที่เหลือ {} ห้อง`}
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                      Room size : 3.5 ฟุต x 6.5 ฟุต
                    </Typography>
                    <Typography sx={{ mb: 1 }}>Price : 1500 BATH</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid item sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant='outlined'
            sx={{
              width: "240px",
              fontFamily: "'Noto Sans Thai', sans-serif",
              fontSize: "20px",
              mt: 3,
              mb: 15,
              mr: 1,
              borderRadius: "10px",
            }}
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
          >
            กลับสู่หน้าหลัก
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ResidentDetail;
