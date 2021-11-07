import Footer from "../component/Footer";
import Header from "../component/Header";
import OwnerRegister from "../component/OwnerRegister";
import SpaceforHead from "../component/SpaceforHead";
import axios from "../config/axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CreateResidentContext } from "../context/createResidentContext";
import { OwnerDetailContext } from "../context/OwnerDetailContext";

function OwnerRegisterPage() {
  const history = useHistory();
  const { values, setValues } = useContext(CreateResidentContext);
  const { ownerDetailErrors, setOwnerDetailErrors } =
    useContext(OwnerDetailContext);

  const handleSubmitOwnerRegister = async (e) => {
    // console.log("test");
    e.preventDefault();
    try {
      let allPase = true;

      if (!values.email) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          email: "กรุณากรอกอีเมลของท่าน",
        }));
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          email: "กรุณากรอกอีเมลให้ถูกต้อง",
        }));
      }

      if (!values.phone) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          phone: "กรุณากรอกเบอร์โทรศัพย์ของท่าน",
        }));
      }

      if (!values.password) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          password: "กรุณากรอกรหัสผ่านของท่าน",
        }));
      }

      if (!values.confirmPassword) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          confirmPassword: "กรุณายืนยันรหัสผ่านของท่าน",
        }));
      }

      if (!values.firstName) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          firstName: "กรุณากรอกชื่อจริงของท่าน",
        }));
      }

      if (!values.lastName) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          lastName: "กรุณากรอกนามสกุลของท่าน",
        }));
      }

      if (!values.idCard) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          idCard: "กรุณากรอกเลขบัตรประจำตัวประชาชนของท่าน",
        }));
      }

      if (!values.idCard) {
        allPase = false;
        setOwnerDetailErrors((curr) => ({
          ...curr,
          idCard: "กรุณากรอกเลขบัตรประจำตัวประชาชนของท่าน",
        }));
      }

      // if (!values.idCardImgUrl) {
      //   allPase = false;
      //   setOwnerDetailErrors((curr) => ({
      //     ...curr,
      //     idCardImgUrl: "กรุณาเพิ่มรูปภาพบัตรประจำตัวประชาชนของท่าน",
      //   }));
      // }

      if (allPase) {
        const res = await axios.post("/hotelOwners/register", {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          telephone: values.phone,
          password: values.password,
          idCard: values.idCard,
          idCardImgUrl: values.file,
        });

        history.push("/ownerlogin");
      }

      // console.log(`token`, res.data.token)

      // setToken(res.data.token);
      // setUser(jwtDecode(res.data.token));
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <SpaceforHead />
      <Header />
      <OwnerRegister handleSubmitOwnerRegister={handleSubmitOwnerRegister} />
      <Footer />
    </>
  );
}

export default OwnerRegisterPage;
