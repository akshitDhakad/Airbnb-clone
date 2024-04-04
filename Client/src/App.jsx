import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Pages/Navbar";
import AddPlace from "./Pages/AddPlace";
import Place from "./Pages/Places";
import CardDetail from "./Pages/CardDetail";
import ReservePlace from "./Pages/ReservePlace";
import { AuthProvider } from "./AuthContext";
import Bookings from "./Pages/Bookings";
import UpdateCard from "./Pages/UpdateCard";
import Page404 from "./Pages/page404";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addplace" element={<AddPlace />} />
        <Route path="/place" element={<Place />} />
        <Route path="/card-detail/:id?" element={<CardDetail />} />
        <Route path="/reserve-place" element={<ReservePlace />} />
        <Route path="/booking" element={<Bookings />} />
        <Route path="/updatecard/:id?" element={<UpdateCard />} />
        <Route path="*" element={<Page404/>} />

      </Routes>
    </AuthProvider>
  );
}

export default App;
