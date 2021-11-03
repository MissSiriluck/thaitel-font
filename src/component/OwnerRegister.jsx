import * as React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
//Material Ui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
import { CreateResidentContext } from "../context/createResidentContext";
import jwtDecode from "jwt-decode";
import axios from "../config/axios";
import { setToken } from "../service/localStorage";
import { AuthContext } from "../context/AuthContext";
// import InputOwnerDetailBox from "./InputOwnerDetailBox";

const CustomButtonRoot = styled("button")(`
    background-color: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    font-family: 'Noto Sans Thai', sans-serif;
    font-size: 14px;
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;

    &:hover {
        background-color: #FF0005;
    }

    &.${buttonUnstyledClasses.active} {
        background-color: #9a2a2c;
    }

    &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
    }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function OwnerRegister() {
  const { values, setValues } = useContext(CreateResidentContext);
  // const { setUser } = useContext(AuthContext);

  const [showImg, setShowImg] = useState("");
  const [file, setFile] = useState(null);

  const history = useHistory();

  const handleSubmitOwnerRegister = async e => {
    console.log("test");
    e.preventDefault();
    try {
      const res = await axios.post("/hotelOwners/register", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        telephone: values.phone,
        password: values.password,
        idCard: values.idCard,
        idCardImgUrl: values.file,
      });

      // console.log(`token`, res.data.token)

      // setToken(res.data.token);
      // setUser(jwtDecode(res.data.token));

      history.push("/ownerlogin");
    } catch (err) {
      console.dir(err);
    }
  };

  const handleChange = (props, event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const Input = styled("input")({
    display: "none",
  });

  const handleChangeFile = e => {
    setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      //   console.log(reader.result);
      setShowImg(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Container
      maxWidth='lg'
      sx={{ justifyContent: "center", display: "flex", mt: 15, mb: 5 }}
    >
      <Grid
        container
        spacing={2}
        xs={10}
        sx={{ alignContent: "center", justifyContent: "center", margin: 0 }}
      >
        <Grid item>
          <Typography
            style={{
              margin: 0,
              fontSize: "36px",
              marginBottom: "20px",
              fontWeight: 600,
            }}
            xs={12}
          >
            กรุณาระบุรายละเอียดข้อมูลของคุณ
          </Typography>
        </Grid>
        <Grid item sx={{ width: "90%" }}>
          <Box
            component='form'
            noValidate
            sx={{
              alignContent: "center",
              justifyContent: "center",
              width: "100%",
            }}
            onSubmit={handleSubmitOwnerRegister}
          >
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                border: "2px solid #cfcfcf",
                borderRadius: "5px",
                paddingBottom: "20px",
                marginBottom: "35px",
              }}
            >
              <Grid item sx={{ width: "90%" }}>
                <Typography style={{ margin: 0, fontSize: "24px" }}>
                  ข้อมูลผู้ให้บริการที่พัก
                </Typography>
              </Grid>
              <Grid item xs={5.8} sx={{ padding: 0, marginLeft: "-16px" }}>
                <Typography style={{ margin: 0, fontSize: "16px" }}>
                  อีเมล์
                </Typography>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='อีเมล์'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  size='small'
                  sx={{ marginTop: "8px" }}
                  value={values.email}
                  onChange={e => handleChange("email", e)}
                />
              </Grid>
              <Grid item xs={5.8}>
                <Typography style={{ margin: 0, fontSize: "16px" }}>
                  เบอร์โทรศัพท์
                </Typography>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='phone'
                  label='เบอร์โทรศัพท์'
                  size='small'
                  sx={{ marginTop: "8px" }}
                  value={values.phone}
                  onChange={e => handleChange("phone", e)}
                />
              </Grid>

              <Grid item xs={5.8} sx={{ padding: 0, marginLeft: "-16px" }}>
                <Typography style={{ margin: 0, fontSize: "16px" }}>
                  รหัสผ่าน
                </Typography>

                <TextField
                  spacing={2}
                  margin='normal'
                  required
                  fullWidth
                  label='รหัสผ่าน'
                  placeholder='กรอกรหัสผ่าน'
                  type='password'
                  autoComplete='current-password'
                  autoFocus
                  size='small'
                  sx={{ marginTop: "8px" }}
                  value={values.password}
                  onChange={e => handleChange("password", e)}
                />
              </Grid>

              <Grid item xs={5.8}>
                <Typography style={{ margin: 0, fontSize: "16px" }}>
                  ยืนยันรหัสผ่าน
                </Typography>

                <TextField
                  margin='normal'
                  required
                  fullWidth
                  type='password'
                  label='รหัสผ่าน'
                  placeholder='กรอกรหัสผ่าน'
                  autoFocus
                  size='small'
                  sx={{ marginTop: "8px" }}
                  value={values.confirmPassword}
                  onChange={e => handleChange("confirmPassword", e)}
                />
              </Grid>
            </Grid>
            {/* <InputOwnerDetailBox /> */}
            {/*  */}
            <Grid
              container
              spacing={2}
              sx={{
                border: "2px solid #cfcfcf",
                borderRadius: "5px",
                paddingBottom: "30px",
              }}
            >
              <Grid
                item
                xs={5.8}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{ marginTop: "12px", marginLeft: "4px" }}
                >
                  <Typography style={{ margin: 0, fontSize: "16px" }}>
                    ชื่อผู้ติดต่อ
                  </Typography>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id=''
                    label='ชื่อผู้ติดต่อ'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    size='small'
                    sx={{ marginTop: "8px" }}
                    value={values.firstName}
                    onChange={e => handleChange("firstName", e)}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ marginTop: "12px", marginLeft: "4px" }}
                >
                  <Typography style={{ margin: 0, fontSize: "16px" }}>
                    นามสกุลผู้ติดต่อ
                  </Typography>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='นามสกุลผู้ติดต่อ'
                    placeholder='กรอกนามสกุลผู้ติดต่อ'
                    size='small'
                    sx={{ marginTop: "8px" }}
                    value={values.lastName}
                    onChange={e => handleChange("lastName", e)}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ marginTop: "12px", marginLeft: "4px" }}
                >
                  <Typography style={{ margin: 0, fontSize: "16px" }}>
                    หมายเลขบัตรประชาชน
                  </Typography>

                  <TextField
                    spacing={2}
                    margin='normal'
                    required
                    fullWidth
                    label='หมายเลขบัตรประชาชน'
                    placeholder='กรอกหมายเลขบัตรประชาชน'
                    autoComplete='current-password'
                    autoFocus
                    size='small'
                    sx={{ marginTop: "8px" }}
                    value={values.idCard}
                    onChange={e => handleChange("idCard", e)}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs={5.9}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  item
                  xs={12}
                  sx={{
                    border: "2px dotted #cfcfcf",
                    width: "100%",
                    margin: "5px",
                    alignItems: "center",
                    borderRadius: "5px",
                    height: "100%",
                    justifyContent: "center",
                    backgroundImage: `url(${showImg})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {showImg ? null : (
                    <Typography
                      style={{
                        fontSize: "18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "200px",
                      }}
                    >
                      อัพโหลดรูปบัตรประชาชน
                    </Typography>
                  )}
                </Box>
                {/* <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40px",
                  }}
                >
                  อัพโหลดรูปบัตรประชาชน
                </Typography> */}
                {/* </Box> */}
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40px",
                  }}
                >
                  {/* <label htmlFor="contained-button-file" sx={{height:'40px',}}>
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleChangeFile}
                />
                <Button variant="contained" component="span">
                  กดเพื่อเพิ่มรูปภาพรูปบัตรประชาชน
                </Button>
              </label> */}

                  <label
                    htmlFor='contained-button-file'
                    sx={{ height: "40px" }}
                  >
                    <Input
                      accept='image/*'
                      id='contained-button-file'
                      multiple
                      type='file'
                      onChange={handleChangeFile}
                    />
                    <Button variant='contained' component='span'>
                      กดเพื่อเพิ่มรูปภาพห้องพักของคุณ
                    </Button>
                  </label>
                </Grid>
                {/*  */}
              </Grid>
            </Grid>
            <Grid container xs={12} justifyContent='end'>
              <Grid
                item
                xs={3}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  marginBottom: "25px",
                }}
              >
                {/* <CustomButton
                  sx={{
                    background: "#c62828",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    width: "92%",
                    marginTop: "10px",
                    marginBottom: "50px",
                  }}
                  onClick={handleSubmitOwnerRegister}
                >
                  <Typography
                    style={{
                      fontSize: 16,
                      marginBottom: "1px",
                      justifyContent: "start",
                    }}
                  >
                    ดำเนินการต่อ
                  </Typography>
                </CustomButton> */}
                <CustomButton
                  sx={{
                    background: "#c62828",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    width: "92%",
                    marginTop: "10px",
                    marginBottom: "50px",
                  }}
                  type='submit'
                >
                  <Typography
                    style={{
                      fontSize: 16,
                      marginBottom: "1px",
                      justifyContent: "start",
                    }}
                  >
                    ลงทะเบียนผู้ปล่อยเช่า
                  </Typography>
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OwnerRegister;
