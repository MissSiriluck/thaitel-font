import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ResidentContext = createContext();

function ResidentContextProvider({ children }) {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const res = await axios.get("/residents");
        setResidents(res.data.resident);
        // console.log(res.data.resident);
      } catch (err) {
        console.log(err);
      }
    };
    fetchResident();
  }, []);

  return (
    <>
      <ResidentContext.Provider value={{ residents, setResidents }}>
        {children}
      </ResidentContext.Provider>
    </>
  );
}
export { ResidentContextProvider, ResidentContext };

// ใช้ like...... or ......

//ห้องว่าง
// หาวันที่
// ห้องว่างกี่ห้อง
