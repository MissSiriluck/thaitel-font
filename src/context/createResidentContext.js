import axios from "../config/axios"

import { createContext, useState } from "react"

const CreateResidentContext = createContext();

function CreateResidentProvider ({ children }) {

    const [values, setValues] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName: "",
        lastNAme: "",
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
        timeCheckInToStart:"",
        timeCheckInToEnd:"",
        timeCheckOutToStart:"",
        timeCheckOutToEnd:"",
        cancelDate: "",
        description: "",
        roomTypeOf: "",
        roomAmount:"",
        roomSize: "",
        optionRoomDetail:"",
        noSmoking:false,
        petAllow:false,
        pricePerNigth:"",
        roomImgUrl:"",
        maxGuest:"",
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
