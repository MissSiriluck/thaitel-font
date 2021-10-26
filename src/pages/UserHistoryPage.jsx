import { Container, Grid } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Footer from "../component/Footer";

function UserHistoryPage() {
  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth='xl' sx={{ mt: 18 }}>
        <Grid container></Grid>
      </Container>

      <Footer />
    </>
  );
}

export default UserHistoryPage;
