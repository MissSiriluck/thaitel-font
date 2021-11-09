// import "../assets/css/AddCom.css";
import { Container, Grid } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Search from "../component/Search";
import Footer from "../component/Footer";
import AddcomDetail from "../component/AddcomDetail";
import { useLocation } from "react-router";

function AddCom() {
  const {
    state: { residentSearch, checkIn },
  } = useLocation();
  // console.log("residentSearch...........", residentSearch);
  // console.log(`checkIn`, checkIn);
  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth='xl' sx={{ mt: 16 }}>
        <Grid container>
          <Grid item xs={3}>
            <Search residentSearch={residentSearch} checkIn={checkIn} />
          </Grid>
          <Grid item xs={9}>
            <AddcomDetail checkIn={checkIn} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
export default AddCom;
