import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const BookingContext = createContext();

function BookingContextProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [bookingIten, setBookingIten] = useState({
    CheckInDate: "",
    CheckOutDate: "",
    serviceFee: "",
    totalPrice: "",
  });

  useEffect(() => {
    const fetchBookingItem = async () => {
      try {
        const res = await axios.get(`/bookings/${user.id}`);
        setBookingIten(res.data.booking);
      } catch (err) {
        console.dir(err);
      }
    };
    // fetchBookingItem();
  }, []);

  return (
    <>
      <BookingContext.Provider value={{ bookingIten, setBookingIten }}>
        {children}
      </BookingContext.Provider>
    </>
  );
}

export { BookingContextProvider, BookingContext };
