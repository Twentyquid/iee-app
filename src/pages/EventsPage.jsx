import EventCard from "@/components/EventCard";

function EventsPage() {
  return (
    <>
      <div className="w-full">
        <h1>Events Page</h1>
        <div className="h-fit flex overflow-x-auto gap-1 px-1">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  );
}

export default EventsPage;
