import axios from "../config/axios"

import { createContext, useState } from "react"

const CreateResidentContext = createContext();

function CreateResidentProvider ({ children }) {

    const [values, setValues] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName: "",
        lastName: "",
        phone:"",
        idCard:"",
        idCardImgUrl:"",
        typeof: "",
        residentName: "",
        rateStar:"",
        address: "",
        subDistrict:"",
        district:"",
        province:"",
        postalCode:"",
        policy:"",
        residentImgUrl:"",
        timeCheckInToStart:"",
        timeCheckInToEnd:"",
        timeCheckOutToStart:"",
        timeCheckOutToEnd:"",
        cancelDate: "",
        description: "",
        roomCollection: [],
        roomTypeOf: "",
        roomAmount:"",
        roomSize: "",
        optionRoomDetail:"",
        noSmoking:false,
        petAllow:false,
        pricePerNigth:"",
        roomImgUrl:"",
        maxGuest:"",
        serviceCollection: [],
        serviceName: "",
        serviceIsFree: "",
        servicePricePerTime:"",
        bankName: "",
        accNumber: "",
        accName:"",
        bankImgUrl: "null",
    })

    // useEffect(() => {
        
    // }, [])

    return <CreateResidentContext.Provider 
                value={{ 
                    values, setValues
                 }}>
                {children}
            </CreateResidentContext.Provider>

}

export { CreateResidentContext, CreateResidentProvider }
