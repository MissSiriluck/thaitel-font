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
  const [res, setRes] = useState([]);
  let { resident, checkIn, room, province } = useParams();
  console.log("resident.................", resident);
  console.log(province);
  // console.log("checkIn..................", checkIn);
  // console.log(roominput);
  useEffect(() => {
    if (province) {
      axios
        .get(`http://localhost:7777/search/province?province=${province}`)
        .then((res) => {
          // console.log(res);
          setRes(res.data.residents);
        });
    } else {
      axios
        .get(
          `http://localhost:7777/search?resident=${resident}&&checkin=${checkIn}&&roominput=${room}`
        )

        .then((res) => {
          // console.log(res);
          setRes(res.data.avail);
        });
    }
  }, [resident, checkIn, room, province]);

  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth="xl" sx={{ mt: 18 }}>
        <Grid container>
          <Grid item xs={3}>
            <Search residentSearch={resident} province={province}  checkIn={checkIn} room={room}/>
          </Grid>
          <Grid item xs={9}>
            <HotelCard data={res} residentSearch={resident} checkIn={checkIn} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
export default ShowResultPage;
