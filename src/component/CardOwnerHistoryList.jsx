import { residents } from "../mocks/residents";
import { Button, Container, Grid, Select, Typography } from "@mui/material";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { Box, styled } from "@mui/system";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

//customize button red
const CustomButtonRoot = styled("span")(`
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

function CardOwnerHistoryList() {
  return (
    <Grid item xs={12} sx={{ mt: 3, mb: 15 }}>
      {residents.map(resident => (
        <Grid
          item
          id=''
          xs={12}
          sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 2, mb: 2 }}
        >
          <Grid container>
            <Grid item xs={2}>
              <img
                src={`${resident.url}`}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: 8,
                }}
              />
            </Grid>
            <Grid item xs={8} sx={{ flexGlow: 1 }} sx={{ mt: 2 }}>
              <Grid container>
                <Grid item xs={2}>
                  <Typography sx={{ mb: 1 }}>ชื่อที่พัก</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ mb: 1 }}>{`{Name of Resident}`}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ mb: 1 }}>
                    {`จำนวนห้องพักที่เหลือ {qty rooms} ห้อง`}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={2}>
                  <Typography sx={{ mb: 1 }}>ชื่อห้องพัก</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ mb: 1 }}>{`{Name of Room}`}</Typography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={2}>
                  <Typography sx={{ mb: 1 }}>จังหวัด</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ mb: 1 }}>
                    {`{จังหวัดที่ตั้งโรงแรม}`}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item>
                  <Typography sx={{ mb: 1 }}>รายละเอียดอื่นๆ</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 20,
                }}
              >
                <Button
                  variant='outlined'
                  sx={{
                    mr: 1,
                    borderRadius: "10px",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    width: "100px",
                  }}
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
                    width: "70px",
                    p: 2,
                  }}
                >
                  ลบข้อมูล
                </CustomButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardOwnerHistoryList;
