import { Container, Grid, Typography } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CardOwnerHistoryList from "../component/CardOwnerHistoryList";

function OwnerHistoryPage() {
  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth='xl' sx={{ mt: 18 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "25px", mb: 1 }}>
              {`สวัสดี คุณ{Owner's name}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "16px" }}>
              ดูรายละเอียดที่พักของฉัน
            </Typography>
          </Grid>
          <CardOwnerHistoryList />
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default OwnerHistoryPage;
