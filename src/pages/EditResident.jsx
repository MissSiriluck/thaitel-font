import axios from "../config/axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import CreateResidentHeader from "../component/CreateResident/CreateResidentHeader";
import ResidentDetailForm from "../component/CreateResident/ResidentDetailForm";
import RoomsInResident from "../component/CreateResident/RoomsInResident";
import ServicesInresident from "../component/CreateResident/ServicesInresident";
import SubmitButton from "../component/CreateResident/SubmitButton";
import TransactionDetail from "../component/CreateResident/TransactionDetail";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { CreateResidentContext2 } from "../context/CreateResidentContext2";
// MuI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EditResident() {
  const [resident, setResident] = useState({});

  const [openSnackEditResident, setOpenSnackEditResident] = React.useState(false);

  const [snackEditResident, setSnackEditResident] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = snackEditResident;

  
  const handleClose = () => {
    setSnackEditResident({ ...snackEditResident, open: false });
  };
  
  const handleOpenSnackBar = (newState) => () => {
    setSnackEditResident({ open: true, ...newState });
  };

  const {
    createResident,
    setCreateResident,
    createResidentError,
    setCreateResidentError,
  } = useContext(CreateResidentContext2);

  const history = useHistory();
  const params = useParams();

  const location = useLocation();
  console.log(`location`, location);

  useEffect(() => {
    const fetchResidentByid = async () => {
      // const res = await axios.get(`/residents/${user.id}`);
      const res = await axios.get(`/residents/residentId/${params.residentId}`);
      console.log(`res.data`, res.data);
      setResident(res.data.resident);

      setCreateResident({
        residentTypeOf: res.data.resident.typeOf,
        residentName: res.data.resident.name,
        rateStar: res.data.resident.rateStar,
        address: res.data.resident.address,
        subDistrict: res.data.resident.subDistrict,
        district: res.data.resident.district,
        description: res.data.resident.description,
        province: res.data.resident.province,
        postalCode: res.data.resident.postalCode,
        optionRoomDetail: res.data.resident.optionRoomDetail,
        residentImageFile: null,
        residentImageUrl: res.data.resident.ResidentImgs[0].imgUrl,
        timeCheckInToStart: res.data.resident.timeCheckInStart,
        timeCheckInToEnd: res.data.resident.timeCheckInEnd,
        timeCheckOutToStart: res.data.resident.timeCheckOutStart,
        timeCheckOutToEnd: res.data.resident.timeCheckOutEnd,
        cancelDate: res.data.resident.canCancle,
        roomCollection: res.data.rooms.map((item) => ({
          ...item,
          roomTypeOf: item.typeOf,
          optionRoomDetail: item.optionalRoomDetail,
          maxGuest: item.maxGuest,
          roomSize: item.size,
          roomAmount: item.roomAmount,
          pricePerNigth: item.pricePerNight,
          roomShowImg: item.imgURL,
        })),
        serviceCollection: res.data.resident.ServiceItems,
        bankAccept: true,
        bankName: res.data.resident.BankAccount.bankName,
        accNumber: res.data.resident.BankAccount.AccountNumber,
        accName: res.data.resident.BankAccount.AccountName,
        bankImgUrl: res.data.resident.BankAccount.imageIdURL,
        bankImageFile: null,
      });
    };
    fetchResidentByid();
  }, [params]);

  // useEffect(() => {
  //   if(location.state){
  //     setCreateResident({
  //       residentTypeOf: resident.typeOf,
  //       residentName: resident.name,
  //       rateStar: resident.typeOf,
  //       address: resident.rateStar,
  //       subDistrict: resident.subDistrict,
  //       district: resident.district,
  //       province: resident.province,
  //       postalCode: resident.postalCode,
  //       optionRoomDetail: resident.optionRoomDetail,
  //       residentImageFile: null,
  //       residentImageUrl:resident.ResidentImgs[0].imgUrl,
  //       timeCheckInToStart: resident.timeCheckInStart,
  //       timeCheckInToEnd: resident.timeCheckInEnd,
  //       timeCheckOutToStart: resident.timeCheckOutStart,
  //       timeCheckOutToEnd: resident.timeCheckOutEnd,
  //       cancelDate: resident.canCancle,
  //       roomCollection: rooms.map(item=>({...item,roomTypeOf:item.typeOf})),
  //       serviceCollection: resident.ServiceItems,
  //       bankAccept:true,
  //       bankName: resident.BankAccount.bankName,
  //       accNumber: resident.BankAccount.AccountNumber,
  //       accName: resident.BankAccount.AccountName,
  //       bankImgUrl: resident.BankAccount.imageIdURL,
  //       bankImageFile:null
  //     })
  //   }
  // }, [])

  const handleSubmit = async (e) => {
    try {
      let allPase = true;

      if (!createResident.residentTypeOf) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          residentTypeOf: "กรุณาเลือกประเภทที่พักของท่าน",
        }));
      }
      if (!createResident.residentName) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          residentName: "กรุณากรอกชื่อที่พักของท่าน",
        }));
      }
      if (!createResident.rateStar) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          rateStar: "กรุณากรอกจำนวนดาวของท่าน",
        }));
      }
      if (isNaN(createResident.rateStar)) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          rateStar: "กรุณากรอกจำนวนดาวของท่านเป็นข้อมูลประเภทตัวเลข",
        }));
      }
      if (!createResident.address) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          address: "กรุณากรอกที่อยู่ของที่พักของท่าน",
        }));
      }
      if (!createResident.subDistrict) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          subDistrict: "กรุณากรอกตำบล/แขวงของที่พักของท่าน",
        }));
      }
      if (!createResident.district) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          district: "กรุณากรอกอำเภอ/เขตของที่พักของท่าน",
        }));
      }
      if (!createResident.province) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          province: "กรุณากรอกจังหวัดของที่พักของท่าน",
        }));
      }
      if (!createResident.postalCode) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          postalCode: "กรุณากรอกรหัสไปรษณีย์ของที่พักของท่าน",
        }));
      } else if (isNaN(createResident.postalCode)) {
        allPase = false;
        setCreateResidentError(curr => ({
          ...curr,
          postalCode: "กรุณากรอกรหัสไปรษณีย์ของที่พักของท่านเป็นข้อมูลประเภทตัวเลข",
        }));
      }
      if (createResident.postalCode.length !== 5) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          postalCode: 'กรุณากรอกไปรษณีย์ของที่พักของท่านให้ครบ 5 หลัก',
        }));
      }
      if (!createResident.residentImageUrl) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          residentImageUrl: "กรุณาเลือกรูปภาพของที่พักของท่าน",
        }));
      }
      if (!createResident.timeCheckInToStart) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckInToStart: "กรุณากรอกเวลาเช็คอินเริ่มต้นของที่พักของท่าน",
        }));
      }
      else if (isNaN(createResident.timeCheckInToStart)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, timeCheckInToStart: 'กรุณากรอกเวลาเช็คอินเริ่มต้นของที่พักของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (!createResident.timeCheckInToEnd) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckInToEnd: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      }
      else if (isNaN(createResident.timeCheckInToEnd)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, timeCheckInToEnd: 'กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (!createResident.timeCheckOutToStart) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckOutToStart: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      }
      else if (isNaN(createResident.timeCheckOutToStart)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, timeCheckOutToStart: 'กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (!createResident.timeCheckOutToEnd) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckOutToEnd: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      }
      else if (isNaN(createResident.timeCheckOutToEnd)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, timeCheckOutToEnd: 'กรุณากรอกจำนวนวันที่สามารถยกเลิกการจองก่อนหน้าการยกเลิกที่ไม่มีเสียค่าธรรมเนียมของที่พักของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (!createResident.cancelDate) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          cancelDate: "กรุณากรอกจำนวนวันที่สามารถยกเลิกการจองก่อนหน้าการยกเลิกที่ไม่มีเสียค่าธรรมเนียมของที่พักของท่าน",
        }));
      }
      else if (isNaN(createResident.cancelDate)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, cancelDate: 'กรุณากรอกจำนวนวันที่สามารถยกเลิกการจองก่อนหน้าการยกเลิกที่ไม่มีเสียค่าธรรมเนียมของที่พักของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (createResident.bankAccept === false) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          bankAccept: "กรุณากดยินยอมข้อตกลง",
        }));
      }
      if (!createResident.accName) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          accName: "กรุณากรอกชื่อธนาคารของบัญชีของท่าน",
        }));
      }
      if (!createResident.accNumber) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          accNumber: "กรุณากรอกเลขบัญชีธนาคารของท่าน",
        }));
      }
      else if (isNaN(createResident.accNumber)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, accNumber: 'กรุณากรอกเลขบัญชีธนาคารของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (createResident.accNumber.length !== 10) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          accNumber: "กรุณากรอกเลขบัญชีธนาคารของท่านให้ถูกต้อง",
        }));
      }
      if (!createResident.bankName) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          bankName: "กรุณากรอกชื่อธนาคารของบัญชีของท่าน",
        }));
      }
      if (!createResident.bankImgUrl) {
        allPase = false;
        setCreateResidentError((curr) => ({
          ...curr,
          bankImgUrl: "กรุณาเพิ่มรูปภาพหน้าบัญชีของท่าน",
        }));
      }

      if (allPase) {
        const resResident = await axios.put(
          `/residents/editResident/${location.state.resident.id}`,
          {
            typeOf: createResident.residentTypeOf,
            name: createResident.residentName,
            rateStar: +createResident.rateStar,
            address: createResident.address,
            subDistrict: createResident.subDistrict,
            district: createResident.district,
            description: createResident.description,
            province: createResident.province,
            postalCode: createResident.postalCode,
            timeCheckInStart: createResident.timeCheckInToStart,
            timeCheckInEnd: createResident.timeCheckInToEnd,
            timeCheckOutStart: createResident.timeCheckOutToStart,
            timeCheckOutEnd: createResident.timeCheckOutToEnd,
            canCancle: createResident.cancelDate,
            // hotelOwnerId: createResident,
            services: createResident.serviceCollection,
          }
        );

        const formImageResident = new FormData();
        formImageResident.append(
          "cloudInput",
          createResident.residentImageFile
        );
        formImageResident.append("residentId", resident.id);
        const resImageResident = await axios.put(
          "/residentImgs",
          formImageResident
        );

        // createResident.roomCollection.forEach(async item => {
        //   const formRoom = new FormData();
        //   formRoom.append("cloudInput", item.roomImageFile);
        //   formRoom.append("typeOf", item.roomTypeOf);
        //   formRoom.append("roomAmount", item.roomAmount);
        //   formRoom.append("size", item.roomSize);
        //   formRoom.append("optionalRoomDetail", item.optionRoomDetail);
        //   formRoom.append("noSmoking", item.noSmoking);
        //   formRoom.append("petAllowed", item.petAllowed);
        //   formRoom.append("pricePerNight", item.pricePerNigth);
        //   formRoom.append("maxGuest", item.maxGuest);
        //   formRoom.append("imgURL", item.imgURL);
        //   formRoom.append("residentId", resident.id);

        // // conflict1
        //   const resRoom = await axios.put(`/rooms/${item.id}`, formRoom);
        // });

        // conflict2
        createResident.roomCollection.forEach(async (item) => {
          if ("id" in item) {
            const formRoom = new FormData();
            formRoom.append("cloudInput", item.roomImageFile);
            formRoom.append("typeOf", item.roomTypeOf);
            formRoom.append("roomAmount", item.roomAmount);
            formRoom.append("size", item.roomSize);
            formRoom.append("optionalRoomDetail", item.optionRoomDetail);
            formRoom.append("noSmoking", item.noSmoking);
            formRoom.append("petAllowed", item.petAllowed);
            formRoom.append("pricePerNight", item.pricePerNigth);
            formRoom.append("maxGuest", item.maxGuest);
            formRoom.append("imgURL", item.imgURL);
            formRoom.append("residentId", resident.id);
            const resRoom = await axios.put(`/rooms/${item.id}`, formRoom);
          } else {
            const formRoom = new FormData();
            formRoom.append("cloudInput", item.roomImageFile);
            formRoom.append("typeOf", item.roomTypeOf);
            formRoom.append("roomAmount", item.roomAmount);
            formRoom.append("size", item.roomSize);
            formRoom.append("optionalRoomDetail", item.optionRoomDetail);
            formRoom.append("noSmoking", item.noSmoking);
            formRoom.append("petAllowed", item.petAllow);
            formRoom.append("pricePerNight", item.pricePerNigth);
            formRoom.append("maxGuest", item.maxGuest);
            formRoom.append("residentId", location.state.resident.id);

            const resRoom = await axios.post("/rooms/createRoom", formRoom);
          }
        });

        const formBank = new FormData();
        formBank.append("bankName", createResident.bankName);
        formBank.append("AccountNumber", createResident.accNumber);
        formBank.append("AccountName", createResident.accName);
        formBank.append("cloudInput", createResident.bankImageFile);
        formBank.append("residentId", resident.id);

          const resBank = await axios.put(
            `/backAccounts/${location.state.resident.BankAccount.id}`,
            formBank
          );
          handleOpenSnackBar({
            vertical: 'top',
            horizontal: 'center',
          })
          setOpenSnackEditResident(true)
    
          history.push({ pathname: "/ownerhistory" });
        }

    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <Header />
      
      <Snackbar 
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal} />

      <CreateResidentHeader />
      <ResidentDetailForm />
      <ServicesInresident />
      <TransactionDetail />
      <RoomsInResident status="EDIT" />
      <SubmitButton handleSubmit={handleSubmit} />

      <Footer />
    </>
  );
}

export default EditResident;
