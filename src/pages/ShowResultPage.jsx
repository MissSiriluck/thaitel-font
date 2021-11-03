import Header from "../component/Header";
import Search from "../component/Search";
import HotelCard from "../component/HotelCard";
import Footer from "../component/Footer";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import { useParams } from "react-router-dom";

function ShowResultPage() {
  const [res, setRes] = useState([]);
  let { resident, checkIn, room } = useParams();
  console.log(resident);
  // console.log(checkin);
  // console.log(roominput);
  useEffect(() => {
    axios
      .get(
        `http://localhost:7777/search?resident=${resident}&&checkin=${checkIn}&&roominput=${room}`
      )
      .then((res) => {
        console.log(res);
        setRes(res.data.avail);
      });
  }, [resident, checkIn, room]);

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
            <HotelCard data={res} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
export default ShowResultPage;
