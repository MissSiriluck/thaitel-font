import { Container, Grid, Typography } from "@mui/material";
import SpaceforHead from "../component/SpaceforHead";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CardHistoryList from "../component/CardHistoryList";

function UserHistoryPage() {
  return (
    <>
      <SpaceforHead />
      <Header />

      <Container maxWidth='xl' sx={{ mt: 18 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "25px", mb: 1 }}>
              {`สวัสดี คุณ{Username}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "16px" }}>
              ดูรายละเอียดการจองที่พักของคุณ
            </Typography>
          </Grid>
          <CardHistoryList />
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default UserHistoryPage;
