// import "../assets/css/AddCom.css";
import { Container, Grid } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Search from "../component/Search";
import Footer from "../component/Footer";
import AddcomDetail from "../component/AddcomDetail";

function AddCom() {
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
            <AddcomDetail />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
export default AddCom;
