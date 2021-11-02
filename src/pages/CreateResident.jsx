import axios from "../config/axios";
import React, { useContext } from "react";
import CreateResidentHeader from "../component/CreateResident/CreateResidentHeader";
import ResidentDetailForm from "../component/CreateResident/ResidentDetailForm";
import RoomsInResident from "../component/CreateResident/RoomsInResident";
import ServicesInresident from "../component/CreateResident/ServicesInresident";
import SubmitButton from "../component/CreateResident/SubmitButton";
import TransactionDetail from "../component/CreateResident/TransactionDetail";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { CreateResidentContext2 } from "../context/CreateResidentContext2";
import { useHistory } from "react-router";

function CreateResident() {
  const history = useHistory();

  const {
    createResident,
    setCreateResident,
    createResidentError,
    setCreateResidentError,
  } = useContext(CreateResidentContext2);
  // ขาด Handle Submit ด้วย

  const handleSubmit = async (e) => {
    try {
      if (!createResident.residentTypeOf) {
        setCreateResidentError((curr) => ({
          ...curr,
          residentTypeOf: "กรุณาเลือกประเภทที่พักของท่าน",
        }));
      }
      if (!createResident.residentName) {
        setCreateResidentError((curr) => ({
          ...curr,
          residentName: "กรุณากรอกชื่อที่พักของท่าน",
        }));
      }
      if (!createResident.rateStar) {
        setCreateResidentError((curr) => ({
          ...curr,
          rateStar: "กรุณากรอกจำนวนดาวของท่าน",
        }));
      }
      if (!createResident.address) {
        setCreateResidentError((curr) => ({
          ...curr,
          address: "กรุณากรอกที่อยู่ของที่พักของท่าน",
        }));
      }
      if (!createResident.subDistrict) {
        setCreateResidentError((curr) => ({
          ...curr,
          subDistrict: "กรุณากรอกตำบล/แขวงของที่พักของท่าน",
        }));
      }
      if (!createResident.district) {
        setCreateResidentError((curr) => ({
          ...curr,
          district: "กรุณากรอกอำเภอ/เขตของที่พักของท่าน",
        }));
      }
      if (!createResident.province) {
        setCreateResidentError((curr) => ({
          ...curr,
          province: "กรุณากรอกจังหวัดของที่พักของท่าน",
        }));
      }
      if (!createResident.postalCode) {
        setCreateResidentError((curr) => ({
          ...curr,
          postalCode: "กรุณากรอกไปรษณีย์ของที่พักของท่าน",
        }));
      }
      if (!createResident.optionRoomDetail) {
        setCreateResidentError((curr) => ({
          ...curr,
          optionRoomDetail: "กรุณากรอกรายละเอียดเพิ่มเติมของที่พักของท่าน",
        }));
      }
      if (!createResident.residentImageUrl) {
        setCreateResidentError((curr) => ({
          ...curr,
          residentImageUrl: "กรุณาเลือกรูปภาพของที่พักของท่าน",
        }));
      }
      if (!createResident.timeCheckInToStart) {
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckInToStart: "กรุณากรอกเวลาเช็คอินเริ่มต้นของที่พักของท่าน",
        }));
      }
      if (!createResident.timeCheckInToEnd) {
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckInToEnd: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      }
      if (!createResident.timeCheckOutToStart) {
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckOutToStart: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      }
      if (!createResident.timeCheckOutToEnd) {
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckOutToEnd: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      }
      if (!createResident.cancelDate) {
        setCreateResidentError((curr) => ({
          ...curr,
          cancelDate: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      }
      if (!createResident.cancelDate) {
        setCreateResidentError((curr) => ({
          ...curr,
          cancelDate: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      }
      if (createResident.bankAccept == false) {
        setCreateResidentError((curr) => ({
          ...curr,
          bankAccept: "กรุณากดยินยอมข้อตกลง",
        }));
      }
      if (!createResident.accName) {
        setCreateResidentError((curr) => ({
          ...curr,
          accName: "กรุณากรอกชื่อธนาคารของบัญชีของท่าน",
        }));
      }
      if (!createResident.accNumber) {
        setCreateResidentError((curr) => ({
          ...curr,
          accNumber: "กรุณากรอกเลขบัญชีธนาคารของท่าน",
        }));
      }
      if (!createResident.bankName) {
        setCreateResidentError((curr) => ({
          ...curr,
          bankName: "กรุณากรอกธนาคารของบัญชีของท่าน",
        }));
      }
      if (!createResident.bankImgUrl) {
        setCreateResidentError((curr) => ({
          ...curr,
          bankImgUrl: "กรุณาเพิ่มรูปภาพหน้าบัญชีของท่าน",
        }));
      }

      const res = await axios.post("/residents/createResident", {
        typeOf: createResident.residentTypeOf,
        name: createResident.residentName,
        rateStar: createResident.rateStar,
        address: createResident.address,
        subDistrict: createResident.subDistrict,
        district: createResident.district,
        province: createResident.province,
        postalCode: createResident.postalCode,
        timeCheckInStart: createResident.timeCheckInToStart,
        timeCheckInEnd: createResident.timeCheckInToEnd,
        timeCheckOutStart: createResident.timeCheckOutToStart,
        timeCheckOutEnd: createResident.timeCheckOutToEnd,
        canCancle: createResident.cancelDate,
        // hotelOwnerId: createResident,
        services: createResident.serviceCollection,
      });
      history.push("/ownerlogin");
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <Header />
      {/* ยังขาดการเลือก Type ของ Resident */}

      <CreateResidentHeader />
      <ResidentDetailForm />
      <ServicesInresident />
      <TransactionDetail />
      <RoomsInResident />
      <SubmitButton handleSubmit={handleSubmit} />

      <Footer />
    </>
  );
}

export default CreateResident;
