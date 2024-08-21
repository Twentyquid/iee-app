import EventCard from "@/components/EventCard";
import EventCardLarge from "@/components/EventCardLarge";

function AllEvents() {
  return (
    <>
      <div className="space-y-3">
        <EventCardLarge />
        <EventCardLarge />
        <EventCardLarge />
        <EventCardLarge />
      </div>
    </>
  );
}

export default AllEvents;
