import { createContext, useState } from 'react';

const CreateResidentContext2 = createContext();

const CreateResidentProvider2 = ({ children }) => {

  const [createResidentError, setCreateResidentError] = useState({ 
    residentTypeOf: '',
    residentName: '',
    rateStar: '',
    address: '',
    subDistrict: '',
    district: '',
    province: '',
    postalCode: '',
    optionRoomDetail: '',
    residentImageFile: '',
    residentImageUrl: '',
    timeCheckInToStart: '',
    timeCheckInToEnd: '',
    timeCheckOutToStart: '',
    timeCheckOutToEnd: '',
    cancelDate: '',
    bankAccept: false,
    bankName: '',
    accNumber: '',
    accName: '',
    bankImgUrl: '',
    bankImageFile: null,
   });

  const [createResident, setCreateResident] = useState({
    residentTypeOf: '',
    residentName: '',
    rateStar: '',
    address: '',
    subDistrict: '',
    district: '',
    province: '',
    postalCode: '',
    optionRoomDetail: '',
    residentImageFile: null,
    residentImageUrl: null,
    timeCheckInToStart: '',
    timeCheckInToEnd: '',
    timeCheckOutToStart: '',
    timeCheckOutToEnd: '',
    cancelDate: '',
    roomCollection: [],
    serviceCollection: [
      {
        serviceName: 'ที่จอดรถ',
        isHaving: false,
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'อาหารเช้า',
        isFree: true,isHaving: false,
        pricePerTime: '',
      },
      {
        serviceName: 'Wifi',
        isFree: true,isHaving: false,
        pricePerTime: '',
      },
      {
        serviceName: 'สระว่ายน้ำ',isHaving: false,
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'แผนกต้อนรับส่วนหน้า 24 ชั่วโมง',
        isFree: true,isHaving: false,
        pricePerTime: '',
      },
      {
        serviceName: 'บาร์',
        isFree: true,isHaving: false,
        pricePerTime: '',
      },
      {
        serviceName: 'ห้องซาวน่า',
        isFree: true,isHaving: false,
        pricePerTime: '',
      },
      {
        serviceName: 'roomService',
        isFree: true,isHaving: false,
        pricePerTime: '',
      },
      {
        serviceName: 'gym',
        isFree: true,isHaving: false,
        pricePerTime: '',
      },
    ],
    bankAccept: false,
    bankName: '',
    accNumber: '',
    accName: '',
    bankImgUrl: '',
    bankImageFile: null,
  });

  return (
    <CreateResidentContext2.Provider value={{ createResident, setCreateResident, createResidentError, setCreateResidentError }}>
      {children}
    </CreateResidentContext2.Provider>
  );
};

export { CreateResidentProvider2, CreateResidentContext2 };
