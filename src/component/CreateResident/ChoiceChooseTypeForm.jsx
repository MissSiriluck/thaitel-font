import React from 'react'
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";

function ChoiceChooseTypeForm({ typeResident, iconResident }) {
    return (
    <Grid container sx={{ marginBottom: '12px', justifyContent: "center" }}>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        xs={12}
      >
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            backgroundColor: "rgba(22, 38, 77, 0.8)",
            borderRadius: "5px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "18vw",
            height: '18px'
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            {typeResident}
          </Typography>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            {iconResident}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {/*  */}
        </Grid>
        </Grid>
      </Grid>
    )
}

export default ChoiceChooseTypeForm
