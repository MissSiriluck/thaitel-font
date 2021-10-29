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
      path: "/mainmenu",
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
    {
      path: "/ownerhistory",
      component: OwnerHistoryPage,
    },
    {
      path: "/ownerdetail",
      component: OwnerDetailPage,
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
      path: "/mainmenu",
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
      redirect: "/ownerhistory",
    },
  ],
};

export default route;
