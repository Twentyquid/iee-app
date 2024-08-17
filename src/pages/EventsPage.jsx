import EventCard from "@/components/EventCard";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

function EventsPage() {
  return (
    <>
      <div className="w-full">
        <div className="overflow-hidden rounded-lg my-4 shadow-md">
          <h3 className="text-xl">Map</h3>
          <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
            <Map
              style={{ width: "640px", height: "30vh" }}
              defaultCenter={{ lat: 9.993661145062388, lng: 76.35812308207957 }}
              mapId="d5151093c0f1c9b1"
              defaultZoom={18}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            >
              <AdvancedMarker
                position={{ lat: 9.993661145062388, lng: 76.35812308207957 }}
              ></AdvancedMarker>
              <AdvancedMarker
                position={{ lat: 9.993693, lng: 76.358732 }}
              ></AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
        <div>
          <h3 className="text-xl">Events</h3>
          <div className="h-fit flex overflow-x-auto gap-1 px-1">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsPage;
