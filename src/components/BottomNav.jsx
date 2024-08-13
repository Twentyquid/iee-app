import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <>
      <div className="mt-auto">
        <div className="flex justify-between items-center">
          <Link to={""}>
            <div>
              <i className="ri-home-2-line"></i>
            </div>
          </Link>
          <Link to={"/map"}>
            <div>
              <i className="ri-map-pin-line"></i>
            </div>
          </Link>
          <Link to={"#"}>
            <div>
              <i className="ri-calendar-event-line"></i>
            </div>
          </Link>
          <Link to={"#"}>
            <div>
              <i className="ri-ticket-line"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
