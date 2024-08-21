import { Route, Routes, useNavigate } from "react-router-dom";
import EventsPage from "./EventsPage";
import MapPage from "./MapPage";
import BottomNav from "@/components/BottomNav";
import AllEvents from "./AllEvents";
import Login from "@/components/Login";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="overflow-y-auto pb-[66px] px-4">
        <div>
          <div
            className="text-2xl"
            onClick={() => {
              navigate(-1);
            }}
          >
            <i class="ri-arrow-left-line"></i>
          </div>
        </div>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/" element={<EventsPage />} />
          <Route path="/allevents" element={<AllEvents />} />
          <Route path="/map/" element={<MapPage />} />
        </Routes>
        <BottomNav />
      </div>
    </>
  );
}

export default Dashboard;
