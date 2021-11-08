import axios from "../config/axios";
import React, { useContext, useEffect, useState } from "react";
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
import SpaceforHead from "../component/SpaceforHead";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CreateResident() {
  const history = useHistory();
  
  const {
    createResident,
    setCreateResident,
    createResidentError,
    setCreateResidentError,
  } = useContext(CreateResidentContext2);

  const [openCreateResident, setOpenCreateResident] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenCreateResident(false);
  };
    
  useEffect(() => {
    setCreateResidentError({
      residentTypeOf: "",
    residentName: "",
    rateStar: "",
    address: "",
    subDistrict: "",
    district: "",
    province: "",
    postalCode: "",
    description: "",
    optionRoomDetail: "",
    residentImageFile: "",
    residentImageUrl: "",
    timeCheckInToStart: "",
    timeCheckInToEnd: "",
    timeCheckOutToStart: "",
    timeCheckOutToEnd: "",
    cancelDate: "",
    bankAccept: false,
    bankName: "",
    accNumber: "",
    accName: "",
    bankImgUrl: "",
    bankImageFile: null,
    })
    
    setCreateResident({
      residentTypeOf: "",
      residentName: "",
      rateStar: "",
      address: "",
      subDistrict: "",
      district: "",
      province: "",
      postalCode: "",
      description: "",
      optionRoomDetail: "",
      residentImageFile: null,
      residentImageUrl: null,
      timeCheckInToStart: "",
      timeCheckInToEnd: "",
      timeCheckOutToStart: "",
      timeCheckOutToEnd: "",
      cancelDate: "",
      roomCollection: [],
      serviceCollection: [
        {
          serviceName: "parking",
          isHaving: false,
          isFree: true,
          pricePerTime: 0,
        },
        {
          serviceName: "breakFast",
          isFree: true,
          isHaving: false,
          pricePerTime: 0,
        },
        {
          serviceName: "wifi",
          isFree: true,
          isHaving: false,
          pricePerTime: 0,
        },
        {
          serviceName: "swimingPool",
          isHaving: false,
          isFree: true,
          pricePerTime: 0,
        },
        {
          serviceName: "bar",
          isFree: true,
          isHaving: false,
          pricePerTime: 0,
        },
        {
          serviceName: "sauna",
          isFree: true,
          isHaving: false,
          pricePerTime: 0,
        },
        {
          serviceName: "reception",
          isFree: true,
          isHaving: false,
          pricePerTime: 0,
        },
        {
          serviceName: "roomService",
          isFree: true,
          isHaving: false,
          pricePerTime: 0,
        },
        {
          serviceName: "fitnessRoom",
          isFree: true,
          isHaving: false,
          pricePerTime: 0,
        },
      ],
      bankAccept: false,
      bankName: "",
      accNumber: "",
      accName: "",
      bankImgUrl: "",
      bankImageFile: null,
    })
  }, [])

  const [openCreateResidentModal, setOpenCreateResidentModal] = React.useState(false);
  const handleOpenCreateResidentModal = () => setOpenCreateResidentModal(true);
  const handleCloseCreateResidentModal = () => setOpenCreateResidentModal(false);

  const handleSubmit = async e => {
    try {
      let allPase = true;

      if (!createResident.residentTypeOf) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          residentTypeOf: "กรุณาเลือกประเภทที่พักของท่าน",
        }));
      }
      if (!createResident.residentName) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          residentName: "กรุณากรอกชื่อที่พักของท่าน",
        }));
      }
      
      if (!createResident.rateStar) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          rateStar: "กรุณากรอกจำนวนดาวของท่าน",
        }));
      } else if (isNaN(createResident.rateStar)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, rateStar: 'กรุณากรอกจำนวนดาวของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }

      if (!createResident.address) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          address: "กรุณากรอกที่อยู่ของที่พักของท่าน",
        }));
      }
      if (!createResident.subDistrict) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          subDistrict: "กรุณากรอกตำบล/แขวงของที่พักของท่าน",
        }));
      }
      if (!createResident.district) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          district: "กรุณากรอกอำเภอ/เขตของที่พักของท่าน",
        }));
      }
      if (!createResident.province) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          province: "กรุณากรอกจังหวัดของที่พักของท่าน",
        }));
      }
      if (!createResident.postalCode) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          postalCode: "กรุณากรอกรหัสไปรษณีย์ของที่พักของท่าน",
        }));
      } 
      if (isNaN(createResident.postalCode)) {
        allPase = false;
        setCreateResidentError(curr => ({
          ...curr,
          postalCode: "กรุณากรอกรหัสไปรษณีย์ของที่พักของท่านเป็นข้อมูลประเภทตัวเลข",
        }));
      }
      if (createResident.postalCode.length !== 5) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, postalCode: 'กรุณากรอกไปรษณีย์ของที่พักของท่านให้ครบ 5 หลัก' }))
      }
      if (!createResident.residentImageUrl) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          residentImageUrl: "กรุณาเลือกรูปภาพของที่พักของท่าน",
        }));
      }
      if (!createResident.timeCheckInToStart) {
        allPase= false;
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
        allPase= false;
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
        allPase= false;
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
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          timeCheckOutToEnd: "กรุณากรอกจำนวนวันที่สามารถยกเลิกการจองก่อนหน้าการยกเลิกที่ไม่มีเสียค่าธรรมเนียมของที่พักของท่าน",
        }));
      } else if (isNaN(createResident.timeCheckOutToEnd)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, timeCheckOutToEnd: 'กรุณากรอกจำนวนวันที่สามารถยกเลิกการจองก่อนหน้าการยกเลิกที่ไม่มีเสียค่าธรรมเนียมของที่พักของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (!createResident.cancelDate) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          cancelDate: "กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่าน",
        }));
      } else if (isNaN(createResident.cancelDate)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, cancelDate: 'กรุณากรอกเวลาเช็คอินสิ้นสุดของที่พักของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (createResident.bankAccept === false) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          bankAccept: "กรุณากดยินยอมข้อตกลง",
        }));
      }
      if (!createResident.accName) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          accName: "กรุณากรอกชื่อธนาคารของบัญชีของท่าน",
        }));
      }
      if (!createResident.accNumber) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          accNumber: "กรุณากรอกเลขบัญชีธนาคารของท่าน",
        }));
      }
        else if (isNaN(createResident.accNumber)) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, accNumber: 'กรุณากรอกเลขบัญชีธนาคารของท่านเป็นข้อมูลประเภทตัวเลข' }))
      }
      if (createResident.accNumber.length !== 10 ) {
        allPase= false;
        setCreateResidentError((curr) => ({ ...curr, accNumber: 'กรุณากรอกเลขบัญชีธนาคารของท่านเป็นจำนวน 10 หลัก' }))
      }
      if (!createResident.bankName) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          bankName: "กรุณากรอกชื่อธนาคารของบัญชีของท่าน",
        }));
      }
      if (!createResident.bankImgUrl) {
        allPase= false;
        setCreateResidentError((curr) => ({
          ...curr,
          bankImgUrl: "กรุณาเพิ่มรูปภาพหน้าบัญชีของท่าน",
        }));
      }

      if(allPase) {

      const resResident = await axios.post("/residents/createResident", {
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
        services: createResident.serviceCollection,
        description: createResident.description
      });

      const formImageResident = new FormData()
      formImageResident.append('cloudInput',createResident.residentImageFile)
      formImageResident.append('residentId',resResident.data.resident.id)
      const resImageResident = await axios.post('/residentImgs',formImageResident)

      createResident.roomCollection.forEach(async(item)=>{
        const formRoom = new FormData()
        formRoom.append('cloudInput',item.roomImageFile)
        formRoom.append('typeOf',item.roomTypeOf)
        formRoom.append('roomAmount',item.roomAmount)
        formRoom.append('size',item.roomSize)
        formRoom.append('optionalRoomDetail', item.optionRoomDetail)
        formRoom.append('noSmoking', item.noSmoking)
        formRoom.append('petAllowed', item.petAllow)
        formRoom.append('pricePerNight', item.pricePerNigth)
        formRoom.append('maxGuest', item.maxGuest)
        formRoom.append('residentId', resResident.data.resident.id)
        // console.log({
        //   typeOf:item.roomTypeOf,
        //   // roomDetail: item.optionalRoomDetail,
        //   roomAmount: item.roomAmount,
        //   size: item.roomSize,
        //   optionalRoomDetail: item.optionRoomDetail,
        //   noSmoking: item.noSmoking,
        //   petAllowed: item.petAllow,
        //   pricePerNight: item.pricePerNigth,
          
        //   maxGuest: item.maxGuest,
        //   residentId:resResident.data.resident.id,
        // })
        const resRoom = await axios.post('/rooms/createRoom', formRoom)
      })

      const formBank = new FormData()
      formBank.append('bankName', createResident.bankName)
      formBank.append('AccountNumber', createResident.accNumber)
      formBank.append('AccountName', createResident.accName)
      formBank.append('cloudInput', createResident.bankImageFile)
      formBank.append('residentId', resResident.data.resident.id)

      const resBank = await axios.post('/backAccounts', formBank)
      
      setOpenCreateResidentModal(true)

       setCreateResident ({
        residentTypeOf: "",
        residentName: "",
        rateStar: "",
        address: "",
        subDistrict: "",
        district: "",
        province: "",
        postalCode: "",
        description: "",
        optionRoomDetail: "",
        residentImageFile: null,
        residentImageUrl: null,
        timeCheckInToStart: "",
        timeCheckInToEnd: "",
        timeCheckOutToStart: "",
        timeCheckOutToEnd: "",
        cancelDate: "",
        roomCollection: [],
        serviceCollection: [
          {
            serviceName: "parking",
            isHaving: false,
            isFree: true,
            pricePerTime: 0,
          },
          {
            serviceName: "breakFast",
            isFree: true,
            isHaving: false,
            pricePerTime: 0,
          },
          {
            serviceName: "wifi",
            isFree: true,
            isHaving: false,
            pricePerTime: 0,
          },
          {
            serviceName: "swimingPool",
            isHaving: false,
            isFree: true,
            pricePerTime: 0,
          },
          // {
          //   serviceName: "แผนกต้อนรับส่วนหน้า 24 ชั่วโมง",
          //   isFree: true,
          //   isHaving: false,
          //   pricePerTime: "",
          // },
          {
            serviceName: "bar",
            isFree: true,
            isHaving: false,
            pricePerTime: 0,
          },
          {
            serviceName: "sauna",
            isFree: true,
            isHaving: false,
            pricePerTime: 0,
          },
          {
            serviceName: "reception",
            isFree: true,
            isHaving: false,
            pricePerTime: 0,
          },
          {
            serviceName: "roomService",
            isFree: true,
            isHaving: false,
            pricePerTime: 0,
          },
          {
            serviceName: "fitnessRoom",
            isFree: true,
            isHaving: false,
            pricePerTime: 0,
          },
        ],
        bankAccept: false,
        bankName: "",
        accNumber: "",
        accName: "",
        bankImgUrl: "",
        bankImageFile: null,
      });

      setOpenCreateResident(true)
      history.push("/ownerhistory");
    }
    } catch (err) {
      console.dir(err);
    } 
  };

  return (
    <>
      <SpaceforHead />
      <Header />
      
      <Snackbar open={openCreateResident} anchorOrigin={{horizontal: 'center',vertical: 'top'}} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          การสร้างที่พักของคุณได้ดำเนินการสำเร็จแล้ว
        </Alert>
      </Snackbar>

      <CreateResidentHeader />
      <ResidentDetailForm />
      <ServicesInresident />
      <TransactionDetail />
      <RoomsInResident status='ADD'/>
      <SubmitButton handleSubmit={handleSubmit} />

      <Footer />
    </>
  );
}

export default CreateResident;
