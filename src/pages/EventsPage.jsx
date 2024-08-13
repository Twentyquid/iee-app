import EventCard from "@/components/EventCard";

function EventsPage() {
  return (
    <>
      <div className="flex-1 w-full">
        <h1>Events Page</h1>
        <div className="flex flex-nowrap overflow-x-auto">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  );
}

export default EventsPage;
