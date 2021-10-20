import Search from "../components/Search";
import HotelCard from "../components/HotelCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../assets/css/Search.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
function showResult() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <Search />
            </Item>
          </Grid>
          <Grid item xs={9}>
            <HotelCard />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default showResult;
