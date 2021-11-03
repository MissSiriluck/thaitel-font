import { createContext, useState } from "react";

const OwnerDetailContext = createContext();

const OwnerDetailProvider = ({ children }) => {
  const [ownerDetailErrors, setOwnerDetailErrors] = useState({
    residentTypeOf: "",
    residentName: "",
    rateStar: "",
    address: "",
    subDistrict: "",
    district: "",
    province: "",
    postalCode: "",
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
  });

  const [ownerDetail, setOwnerDetail] = useState({
    residentTypeOf: "",
    residentName: "",
    rateStar: "",
    address: "",
    subDistrict: "",
    district: "",
    province: "",
    postalCode: "",
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
  });

  return (
    <OwnerDetailContext.Provider
      value={{
        ownerDetailErrors,
        setOwnerDetailErrors,
        ownerDetail,
        setOwnerDetail,
      }}
    >
      {children}
    </OwnerDetailContext.Provider>
  );
};

export { OwnerDetailProvider, OwnerDetailContext };
