import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const BookingContext = createContext();

function BookingContextProvider({ children }) {
  // const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState([]);

  // const [bookingIten, setBookingIten] = useState({
  //   CheckInDate: "",
  //   CheckOutDate: "",
  //   serviceFee: "",
  //   totalPrice: "",
  // });

  // useEffect(() => {
  //   const fetchBookingItem = async () => {
  //     try {
  //       const res = await axios.get(`/bookings/${user.id}`);
  //       setBookingIten(res.data.booking);
  //     } catch (err) {
  //       console.dir(err);
  //     }
  //   };
  //   fetchBookingItem();
  // }, []);

  //.........................................

  // useEffect(() => {
  //   const fetchBookingItem = async () => {
  //     try {
  //       const res = await axios.get(`/bookings/getByUserId`);
  //       setBooking(res.data.booking);
  //       console.log("res.data.booking................", res.data.booking);
  //     } catch (err) {
  //       console.dir(err);
  //     }
  //   };
  //   fetchBookingItem();
  // }, []);

  return (
    <>
      <BookingContext.Provider value={{ booking, setBooking }}>
        {children}
      </BookingContext.Provider>
    </>
  );
}

export { BookingContextProvider, BookingContext };
