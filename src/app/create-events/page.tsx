import EventForm from "@/components/create-events/EventForm";

export default function CreateEvents() {
  return (
    <section>
      <div className="text-center my-7 sm:my-14 md:my-28 space-y-2 md:space-y-8">
        <h1 className={`font-dmsans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>Create an Event</h1>
        <h4 className="text-lg sm:text-xl md:text-xl lg:text-2xl">Enter your event details</h4>
      </div>

      <EventForm/>
    </section>
  )
}

