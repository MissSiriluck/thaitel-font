import { createContext, useState } from 'react';

const CreateResidentContext2 = createContext();

const CreateResidentProvider2 = ({ children }) => {

  const [createResidentError, setCreateResidentError] = useState({ 
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
   });

  const [createResident, setCreateResident] = useState({
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
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'อาหารเช้า',
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'Wifi',
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'สระว่ายน้ำ',
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'แผนกต้อนรับส่วนหน้า 24 ชั่วโมง',
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'บาร์',
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'ห้องซาวน่า',
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'roomService',
        isFree: true,
        pricePerTime: '',
      },
      {
        serviceName: 'gym',
        isFree: true,
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
