import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

function MapPage() {
  return (
    <>
      <div>
        <div className="w-full h-full overflow-hidden">
          <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
            <Map
              style={{ width: "640px", height: "80vh" }}
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
      </div>
    </>
  );
}

export default MapPage;
