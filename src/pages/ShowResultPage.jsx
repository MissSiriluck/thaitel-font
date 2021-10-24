import Header from "../component/Header";
import Search from "../component/Search";
import HotelCard from "../component/HotelCard";
import Footer from "../component/Footer";
import Grid from "@mui/material/Grid";
import { AppBar, Container } from "@mui/material";
import { Box } from "@mui/system";
import SpaceforHead from "../component/SpaceforHead";

function ShowResultPage() {
  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth='xl' sx={{ mt: 18 }}>
        <Grid container>
          <Grid item xs={3}>
            <Search />
          </Grid>
          <Grid item xs={9}>
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
export default ShowResultPage;
