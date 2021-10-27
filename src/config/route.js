import AddCom from "../pages/AddCom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import OwnerDetailPage from "../pages/OwnerDetailPage";
import OwnerLoginPage from "../pages/OwnerLoginPage";
import OwnerRegisterPage from "../pages/OwnerRegisterPage";
import RegisterPage from "../pages/RegisterPage";
import ShowResultPage from "../pages/ShowResultPage";
import UserHistoryPage from "../pages/UserHistoryPage";

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
      redirect: "/",
    },
  ],
  customer: [
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
      redirect: "/",
    },
  ],
  ownerHotel: [
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
      redirect: "/ownerhistory",
    },
  ],
};

export default route;
