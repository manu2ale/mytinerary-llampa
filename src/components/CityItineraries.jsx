import CardItinerary from "./CardItinerary";

export default function CityItineraries({data}) {
  return (
    <div id="itinerary" className="flex flex-col justify-center items-center py-6 bg-gradient-to-b from-transparent to-slate-500">
      <h1 className="my-6 text-5xl font-bold">Itineraries</h1>
      {data.map((itinerary,index)=> <CardItinerary data={itinerary} key={index} />)}
    </div>
  )
}
