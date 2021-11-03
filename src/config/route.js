import AddCom from "../pages/AddCom";
import BookingConfirmationPage from "../pages/BookingConfirmationPage";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import OwnerDetailPage from "../pages/OwnerDetailPage";
import OwnerHistoryPage from "../pages/OwnerHistoryPage";
import OwnerLoginPage from "../pages/OwnerLoginPage";
import OwnerRegisterPage from "../pages/OwnerRegisterPage";
import RegisterPage from "../pages/RegisterPage";
import ShowResultPage from "../pages/ShowResultPage";
import UserHistoryPage from "../pages/UserHistoryPage";
import ResidentRegisterPage2Page from "../pages/ResidentRegisterPage2Page";
import ResidentRegisterPage3Page from "../pages/ResidentRegisterPage3Page";
import ResidentRegisterPage4Page from "../pages/ResidentRegisterPage4Page";
import ResidentRegisterPage5Page from "../pages/ResidentRegisterPage5Page";
import ResidentRegisterPage6Page from "../pages/ResidentRegisterPage6Page";
import ResidentRegisterPage8Page from "../pages/ResidentRegisterPage8Page";
import CardOwnerHistoryList from "../component/CardOwnerHistoryList";

// Edit create resident
import CreateResident2 from "../pages/CreateResident";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ResetForNewPassword from "../pages/ResetForNewPassword";

const route = {
  guest: [
    {
      path: "/",
      component: Homepage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/register",
      component: RegisterPage,
    },
    {
      path: "/mainmenu/:resident/:checkIn/:room",
      component: ShowResultPage,
    },
    {
      path: "/addcom",
      component: AddCom,
    },
    {
      path: "/ownerlogin",
      component: OwnerLoginPage,
    },
    {
      path: "/ownerregister",
      component: OwnerRegisterPage,
    },
    // {
    //   path: "/ownerhistory",
    //   component: OwnerHistoryPage,
    // },
    {
      path: "/ownerdetail",
      component: OwnerDetailPage,
    },
    {
      path: "/reset",
      component: ResetPasswordPage,
    },
    {
      path: "/reset/:token",
      // path: "/ResetForNewPassword",
      component: ResetForNewPassword,
    },
    // {
    //   path: "/createresident",
    //   component: CreateResident2,
    // },
    {
      path: "/addcom",
      component: AddCom,
    },
    {
      redirect: "/",
    },
  ],
  CUSTOMER: [
    {
      path: "/",
      component: Homepage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/register",
      component: RegisterPage,
    },
    {
      path: "/mainmenu/:resident/:checkIn/:room",
      component: ShowResultPage,
    },
    {
      path: "/addcom",
      component: AddCom,
    },
    {
      path: "/history",
      component: UserHistoryPage,
    },
    {
      path: "/BookingConfirmation",
      component: BookingConfirmationPage,
    },
    {
      path: "/Reset",
      component: ResetPasswordPage,
    },
    {
      redirect: "/",
    },
  ],
  OWNER: [
    {
      path: "/",
      component: Homepage,
    },
    {
      path: "/ownerlogin",
      component: OwnerLoginPage,
    },
    {
      path: "/ownerregister",
      component: OwnerRegisterPage,
    },
    {
      path: "/ownerdetail",
      component: OwnerDetailPage,
    },
    {
      path: "/residentregisterpage2",
      component: ResidentRegisterPage2Page,
    },
    {
      path: "/residentregisterpage3",
      component: ResidentRegisterPage3Page,
    },
    {
      path: "/createresident",
      component: CreateResident2,
    },
    {
      path: "/residentregisterpage4",
      component: ResidentRegisterPage4Page,
    },
    {
      path: "/residentregisterpage5",
      component: ResidentRegisterPage5Page,
    },
    {
      path: "/residentregisterpage6",
      component: ResidentRegisterPage6Page,
    },
    {
      path: "/residentregisterpage8",
      component: ResidentRegisterPage8Page,
    },
    {
      path: "/ownerdetail",
      component: OwnerDetailPage,
    },
    {
      path: "/ownerdetail",
      component: OwnerDetailPage,
    },
    {
      path: "/ownerdetail",
      component: OwnerDetailPage,
    },
    {
      path: "/ownerdetail",
      component: OwnerDetailPage,
    },
    {
      path: "/ownerdetail",
      component: OwnerDetailPage,
    },

    {
      path: "/ownerhistory",
      component: OwnerHistoryPage,
    },
    // {
    //   redirect: "/ownerhistory",
    // },

    // {
    //   redirect: "/ownerhistory",
    //   component: OwnerHistoryPage,
    // },
  ],
};

export default route;
