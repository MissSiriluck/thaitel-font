import { residents } from "../mocks/residents";
import { Container, Grid, Select, Typography } from "@mui/material";
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

function CardHistoryList() {
  return (
    <Grid item xs={12} sx={{ mt: 3, mb: 15 }}>
      {residents.map((resident) => (
        <Grid
          item
          id=""
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
                <Grid item xs={5}>
                  <Typography sx={{ mb: 1 }}>{`{Name of Resident}`}</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography sx={{ mb: 1 }}>
                    {`จำนวน {qty rooms} ห้อง`}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container sx={{ mb: 2 }}>
                <Grid item xs={2}>
                  <Typography sx={{ mb: 1 }}>ชื่อห้องพัก</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography sx={{ mb: 1 }}>{`{Name of Room}`}</Typography>
                </Grid>
              </Grid>

              <Grid container>
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
                <CustomButton
                  sx={{
                    background: "#c62828",
                    color: "#fff",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent: "center",
                    p: 2,
                  }}
                >
                  ยกเลิกการจอง
                </CustomButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardHistoryList;
