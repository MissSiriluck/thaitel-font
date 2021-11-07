import Header from "../component/Header";
import Footer from "../component/Footer";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import ResidentDetail from "../component/ResidentDetail";

function OwnerDetailPage() {
  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth='lg' sx={{ mt: 18 }}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <ResidentDetail />
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
export default OwnerDetailPage;
