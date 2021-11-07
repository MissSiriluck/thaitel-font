import React, { useContext } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";

import { CreateResidentContext2 } from "../../context/CreateResidentContext2";

function TransactionDetail() {
  const {
    createResident,
    setCreateResident,
    createResidentError,
    setCreateResidentError,
  } = useContext(CreateResidentContext2);

  const handleChangeFile = (e) => {
    setCreateResident((cur) => ({ ...cur, bankImageFile: e.target.files[0] }));
    const reader = new FileReader();
    reader.onloadend = () => {
      setCreateResident((cur) => ({ ...cur, bankImgUrl: reader.result }));
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleChange = (type, event) => {
    setCreateResident((cur) => ({ ...cur, [type]: event.target.value }));
    setCreateResidentError({ ...createResidentError, [type]: '' });
  };

  const handleChangeBankAccept = () => {
    setCreateResident((cur) => ({ ...cur, bankAccept: !cur.bankAccept }));
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Grid
        container
        sx={{
          border: "2px solid #c4c4c4",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "5px",
        }}
      >
        <Typography sx={{ fontSize: "36px" }}>การชำระค่าคอมมิสชั่น</Typography>
        <Grid container justifyContent="space-between">
          <Grid
            xs={12}
            md={8}
            sx={{
              backgroundColor: "#c4c4c4",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              molestiae vel! Natus iusto voluptates voluptatum aliquam voluptas
              numquam ad mollitia obcaecati deleniti? Repudiandae doloribus
              voluptatum possimus quasi hic veniam temporibus.
            </Typography>
          </Grid>

          <Grid
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Typography>ค่าคอมมิชชั่น 10 %</Typography>
            <Typography>ค่าดำเนินธุรกรรม 2.1 %</Typography>
          </Grid>
          <Grid xs={12} sx={{ marginTop: "10px" }}>
            <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="ยอมรับข้อตกลง"
                value={createResident.bankAccept}
                onChange={handleChangeBankAccept}
                checked={createResident.bankAccept}
                helperText={
                  createResidentError.bankAccept
                    ? createResidentError.bankAccept
                    : ""
                }
                error={createResidentError.bankAccept}
              />
            </Grid>
            {createResidentError.bankAccept ? (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "12px",
                  color: "#d32f2f",
                }}
              >
                {createResidentError.bankAccept}
              </Typography>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          border: "2px solid #c4c4c4",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Grid
          sx={{
            border: "2px solid #c4c4c4",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
          md={6}
        >
          <Grid item xs={12} sx={{ display: "flex", marginBottom: "8px" }}>
            <Grid xs={4}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ชื่อหน้าบัญชี :
              </Typography>
            </Grid>
            <Grid xs={8}>
              <TextField
                id="outlined-password-input"
                label="ชื่อหน้าบัญชี"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={createResident.accName}
                onChange={(e) => handleChange("accName", e)}
                helperText={
                  createResidentError.accName ? createResidentError.accName : ""
                }
                error={createResidentError.accName}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", marginBottom: "8px" }}>
            <Grid xs={4}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ระบุเลขบัญชี :
              </Typography>
            </Grid>
            <Grid xs={8}>
              <TextField
                id="outlined-password-input"
                label="ระบุเลขบัญชี"
                size="small"
                sx={{ width: "100%", alignItems: "stretch" }}
                value={createResident.accNumber}
                onChange={(e) => handleChange("accNumber", e)}
                helperText={
                  createResidentError.accNumber
                    ? createResidentError.accName
                    : ""
                }
                error={createResidentError.accNumber}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", marginBottom: "8px" }}>
            <Grid xs={4}>
              <Typography
                style={{
                  fontSize: 18,
                  marginTop: "10px",
                }}
              >
                ธนาคาร :
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel
                  id="demo-simple-select-helper-label"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "-15px",
                  }}
                >
                  ธนาคาร
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={createResident.bankName}
                  label='Bank Name'
                  onChange={(e) => handleChange('bankName', e)}
                  helperText= {createResidentError.bankName ? createResidentError.bankName : ""}
                  error={createResidentError.bankName}
                  size='small'
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                  xs={5.8}
                >
                  <MenuItem value="" sx={{ justifyContent: "center" }}>
                    <Typography
                      style={{
                        fontSize: 18,
                        marginTop: "10px",
                        backgroundColor: "pink",
                      }}
                    >
                      เลือกธนาคาร
                    </Typography>
                  </MenuItem>

                  <MenuItem value={"Bank of Ayudhya"}>Bank of Ayudhya</MenuItem>
                  <MenuItem value={"Kasikorn bank"}>Kasikorn bank</MenuItem>
                  <MenuItem value={"Krungthai bank"}>Krungthai bank</MenuItem>
                  <MenuItem value={"Siam Commercial Bank"}>
                    Siam Commercial Bank
                  </MenuItem>
                  <MenuItem value={"Aomsin bank"}>Aomsin bank</MenuItem>
                </Select>
                {createResidentError.bankName ? (
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#d32f2f",
                      marginLeft: "14px",
                    }}
                  >
                    {createResidentError.bankName}
                  </Typography>
                ) : (
                  ""
                )}
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5.8} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            item
            xs={12}
            sx={{
              border: createResidentError.bankImgUrl
                ? "2px dotted #d32f2f"
                : "2px dotted #cfcfcf",
              width: "100%",
              alignItems: "center",
              borderRadius: "5px",
              height: "100%",
              justifyContent: "center",
              backgroundImage: `url(${createResident.bankImgUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            {createResident.bankImgUrl ? null : (
              <Typography
                style={{
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                อัพโหลดรูปหน้าบัญชีธนาคารของท่าน
              </Typography>
            )}
          </Box>
          {createResidentError.bankImgUrl ? (
            <Typography
              sx={{ fontSize: "12px", color: "#d32f2f", marginLeft: "14px" }}
            >
              {createResidentError.bankImgUrl}
            </Typography>
          ) : (
            ""
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <label htmlFor="contained-button-file-bank">
            <Input
              accept="image/*"
              id="contained-button-file-bank"
              multiple
              type="file"
              onChange={handleChangeFile}
            />
            <Button variant="contained" component="span">
              กดเพื่อเพิ่มรูปภาพหน้าบัญชีของคุณ
            </Button>
          </label>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TransactionDetail;
