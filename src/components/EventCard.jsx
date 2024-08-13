function EventCard() {
  return (
    <>
      <div className="min-w-[358px] bg-red-100 rounded-2xl px-4 py-3">
        <div className="h-[70px] w-full">{/* image section  */}</div>
        <div>
          <h3 className="text-2xl font-bold">Event Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            sapiente sit veniam enim perspiciatis, veritatis, illo non odit
            magnam eaque impedit quia reprehenderit fuga numquam suscipit error.
            Distinctio, corrupti fugit!
          </p>
          <div className="flex justify-between items-end">
            <button className="px-6 text-sm bg-violet-300 rounded-full mt-1 h-9">
              Read more
            </button>
            <div className="">
              <p className="font-medium text-sm">KE Block Auditorium</p>
              <button className="bg-black text-white px-2 py-1 rounded-full flex-grow-0">
                12:30 pm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
