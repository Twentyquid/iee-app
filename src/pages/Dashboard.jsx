import { Route, Routes } from "react-router-dom";
import EventsPage from "./EventsPage";
import MapPage from "./MapPage";
import BottomNav from "@/components/BottomNav";

function Dashboard() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route path="/map/" element={<MapPage />} />
        </Routes>
        <BottomNav />
      </div>
    </>
  );
}

export default Dashboard;
