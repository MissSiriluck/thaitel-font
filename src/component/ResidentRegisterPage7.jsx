import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";

const CustomButtonRoot = styled("span")(`
      background-color: none;
      padding: 10px 20px;
      border-radius: 30px;
      color: #fff;
      font-weight: 600;
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

function ResidentRegisterPage7() {
  return (
    // <Container>
    <Grid container>
      <Grid>
        <Typography sx={{ fontSize: "36px", marginLeft: "20px" }}>
          ภาพถ่ายที่พัก
        </Typography>
      </Grid>
      <Grid
        sx={{
          width: "1600px",
          backgroundColor: "#C4C4C4",
          justifyContent: "center",
          alignItems: "center",
          height: "35vh",
        }}
        xs={12}
      >
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            height: "12vh",
          }}
        >
          <Typography>อัปโหลดรูปภาพอย่างน้อย 1 ภาพ</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ height: "100%", display: "flex", justifyContent: "center" }}
        >
          <Grid
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
            sx={{ height: "16vh" }}
          >
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomButton
                sx={{
                  background: "#fff",
                  color: "#07133C",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "75%",
                  minWidth: "160px",
                  height: "20px",
                }}
              >
                <Typography
                  style={{
                    fontSize: 16,
                    justifyContent: "start",
                  }}
                >
                  เพิ่มภาพถ่าย
                </Typography>
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Grid
          xs={6}
          sx={{
            background: "#c4c4c4",
            height: "30vh",
            margin: "25px",
            maxWidth: "450px",
          }}
        >
          <Typography
            style={{
              fontSize: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            รูปที่ 1 （รูปหลัก）
          </Typography>
        </Grid>
        <Grid container xs={12} justifyContent="end">
          <Grid
            item
            xs={3}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "25px",
            }}
          >
            <CustomButton
              sx={{
                background: "#c62828",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                width: "72%",
                marginTop: "-60px",
                marginBottom: "50px",
                marginRight: "25px",
              }}
            >
              <Typography
                style={{
                  fontSize: 16,
                  marginBottom: "1px",
                  justifyContent: "start",
                }}
              >
                ดำเนินการต่อ
              </Typography>
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </Container>
  );
}

export default ResidentRegisterPage7;
