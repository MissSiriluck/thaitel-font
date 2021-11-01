import Header from "../component/Header";
import Search from "../component/Search";
import HotelCard from "../component/HotelCard";
import Footer from "../component/Footer";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function ShowResultPage() {
  const [res,setRes]=useState([])
  let { resident, checkin, roominput } = useParams();
  console.log(resident);
  console.log(checkin);
  console.log(roominput);
  useEffect(() => {
    axios
      .get(`http://localhost:7777/search?resident=${resident}&&checkin=${checkin}&&roominput=${roominput}`)
      .then((res) => {
        console.log(res);
        setRes(res.data.avail)
      });
  }, [ resident, checkin, roominput]);
  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth="xl" sx={{ mt: 18 }}>
        <Grid container>
          <Grid item xs={3}>
            <Search />
          </Grid>
          <Grid item xs={9}>
            <HotelCard data={res}/>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
export default ShowResultPage;
