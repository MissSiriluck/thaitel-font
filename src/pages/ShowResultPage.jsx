import Search from "../component/Search";
import HotelCard from "../component/HotelCard";
import Grid from "@mui/material/Grid";
import "../assets/css/Search.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Header from "../component/Header";
import Footer from "../component/Footer";

function ShowResultPage() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Header />

      <Grid container sx={{ width: "1200px", alignSelf: "center" }}>
        <Grid item xs={3}>
          <Search />
        </Grid>
        <Grid item xs={9}>
          <HotelCard />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}
export default ShowResultPage;
