import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import React from "react";

function ResidentRegiterPage2() {
  return (
    <Grid container xs={12}>
      <Grid item>
        <p>มอบประสบการณ์ที่คุณต้องการแบ่งปัน</p>
      </Grid>
      <Grid container spacing={2} justifyContent="space-around">
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "rgba(22, 38, 77, 0.7)",
            borderRadius: "5px",
            color: "white",
            height: "30vh",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Hotel
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "rgba(22, 38, 77, 0.7)",
            borderRadius: "5px",
            color: "white",
            height: "30vh",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Apartment
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "rgba(22, 38, 77, 0.7)",
            borderRadius: "5px",
            color: "white",
            height: "30vh",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Villa
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ResidentRegiterPage2;
