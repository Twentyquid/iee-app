import EventCard from "@/components/EventCard";

function AllEvents() {
  return (
    <>
      <div className="space-y-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
}

export default AllEvents;
