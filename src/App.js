import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointments from "./pages/appointments/Appointments";
import BusinessRegistration from "./pages/business/businessregister/BusinessRegistration";
import BusinessHome from './pages/business/businesshome/BusinessHome';
import BusinessAccount from "./pages/business/businessaccount/BusinessAccount";
import BusinessPhotos from './pages/business/businessphotos/BusinessPhotos';
import BusinessAppointments from './pages/business/businessappointments/BusinessAppointments';
import BusinessNotifications from './pages/business/businessnotifications/BusinessNotifications';
import BusinessSupport from './pages/business/businesssupport/BusinessSupport';
import { Home } from "./pages/home/Home";
import Logout from "./pages/logout/Logout";
import MyAccount from "./pages/myaccount/MyAccount";
import Notifications from "./pages/notifications/Notifications";
import Shop from "./pages/shop/Shop";
import Support from "./pages/support/Support";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/myaccount" element={<MyAccount/>}/>
      <Route path="/appointments" element={<Appointments/>}/>
      <Route path="/notifications" element={<Notifications/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/businesshome" element={<BusinessHome/>}/>
      <Route path="/businesshome/registration" element={<BusinessRegistration/>}/>
      <Route path="/businesshome/account" element={<BusinessAccount/>}/>
      <Route path="/businesshome/photos" element={<BusinessPhotos/>}/>
      <Route path="/businesshome/appointments" element={<BusinessAppointments/>}/>
      <Route path="/businesshome/notifications" element={<BusinessNotifications/>}/>
      <Route path="/businesshome/support" element={<BusinessSupport/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
