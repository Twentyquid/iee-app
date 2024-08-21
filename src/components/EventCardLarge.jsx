import eventImage from "@/assets/event.jpg";

function EventCardLarge() {
  return (
    <>
      <div className="w-full bg-red-100 rounded-2xl px-4 py-3">
        <div className="h-[100px] w-full overflow-hidden">
          <img className="object-cover w-full h-full" src={eventImage} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Event Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            sapiente sit veniam enim perspiciatis, veritatis, illo non odit
            magnam eaque impedit quia reprehenderit fuga numquam suscipit error.
            Distinctio, corrupti fugit!
          </p>
          <div className="flex justify-between items-end">
            <button className="px-6 font-medium bg-violet-300 rounded-full mt-1 h-9">
              Read more
            </button>
            <div className="flex flex-col">
              <p className="font-medium text-sm justify-end items-end">
                KE Block Auditorium
              </p>
              <button className="bg-slate-800 text-white px-2 py-1 rounded-full w-fit ml-auto text-sm">
                12:30 pm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCardLarge;
