import { Grid, Rating, Typography } from "@mui/material";
// import { residents } from "../mocks/residents";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
import { useHistory } from "react-router";

//customize button blue
const CustomButtonRoot = styled("span")(`
    background-color: none;
    padding: 12px 35px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-family: 'Noto Sans Thai', sans-serif;
    font-size: 14px;
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;

    &:hover {
        background-color: #64CEEF;
    }

    &.${buttonUnstyledClasses.active} {
        background-color: #0276aa;
    }

    &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
    }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function HotelCardList({ resident }) {
  const result = resident.Rooms?.reduce(
    (acc, cur, index) => {
      if (index === 0) {
        return [cur.pricePerNight, cur.pricePerNight];
      }
      let result = acc;
      if (acc[0] < cur.pricePerNight) {
        result[0] = cur.pricePerNight;
      }
      if (acc[1] > cur.pricePerNight) {
        result[1] = cur.pricePerNight;
      }
      return result;
    },
    [0, 0]
  );

  const history = useHistory();

  const handleClicklookRoom = e => {
    e.preventDefault();
    history.push({
      pathname: "/addcom",
      state: { id: resident.id },
    });
  };

  // console.log({ result });
  return (
    <Grid container sx={{ mb: 1 }}>
      <Grid
        item
        id=''
        xs={12}
        sx={{ border: "1px solid #BFBFBF", borderRadius: 2, p: 2, mb: 1 }}
      >
        <Grid container>
          <Grid item xs={2.2}>
            <img
              // src={`${resident.url}`}
              src={resident.ResidentImgs[0]?.imgUrl}
              style={{
                width: "170px",
                height: "170px",
                borderRadius: 8,
              }}
              alt='resident-img'
            />
          </Grid>
          <Grid item xs={9.8} sx={{ flexGlow: 1, mt: 2 }}>
            <Grid container>
              <Grid item xs={8}>
                <Typography sx={{ fontSize: "20px", mb: 1 }}>
                  {`${resident.name}`}
                </Typography>
                <Typography>{`${resident.province}`}</Typography>
              </Grid>
              <Grid item xs={3.5}>
                <Rating
                  name='rate_star'
                  defaultValue={resident.rateStar}
                  precision={0.5}
                  readOnly
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "22px",
                  }}
                >
                  {`${result[1]} - ${result[0]}`} บาท
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  รวมธรรมเนียมและค่าภาษีแล้ว
                </Typography>
                <CustomButton
                  sx={{
                    background: "#03a9f4",
                    color: "#fff",
                    fontFamily: "'Noto Sans Thai', sans-serif",
                    display: "flex",
                    justifyContent: "center",
                    mt: 1.5,
                  }}
                  onClick={handleClicklookRoom}
                >
                  ดูห้องว่างที่เหลืออยู่
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HotelCardList;
