import { Route, Routes } from "react-router-dom";
import EventsPage from "./EventsPage";
import MapPage from "./MapPage";
import BottomNav from "@/components/BottomNav";
import AllEvents from "./AllEvents";

function Dashboard() {
  return (
    <>
      <div className="overflow-y-auto pb-[66px] px-4">
        <div>
          <div className="text-2xl">
            <i class="ri-arrow-left-line"></i>
          </div>
        </div>
        <Routes>
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
