import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";

import { Box } from "@mui/system";
import { CreateResidentContext2 } from "../../context/CreateResidentContext2";
import ServiceInResidentRow from "./ServiceInResidentRow";

function ServicesInresident() {
  const { createResident, setCreateResident } = useContext(
    CreateResidentContext2
  );

  const setService = (index, newService) => {
    const newServiceCollection = [...createResident.serviceCollection];
    newServiceCollection[index] = newService;
    setCreateResident((cur) => ({
      ...cur,
      serviceCollection: newServiceCollection,
    }));
  };

  return (
    <Container maxWidth="md">
      <Box>
        <Grid container direction="column">
          <Grid item>
            <Typography sx={{ fontSize: "36px", marginBottom: "5px" }}>
              บริการภายในโรงแรม
            </Typography>
          </Grid>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              border: "2px solid #c4c4c4",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            {createResident.serviceCollection.map((service, index) => {
              return (
                <ServiceInResidentRow
                  key={index}
                  index={index}
                  service={service}
                  setService={setService}
                />
              );
            })}
          </Stack>
        </Grid>
      </Box>
    </Container>
  );
}

export default ServicesInresident;
