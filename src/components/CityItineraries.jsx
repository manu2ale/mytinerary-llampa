import CardItinerary from "./CardItinerary";

export default function CityItineraries({data}) {
  return (
    <div id="itinerary" className="flex flex-col justify-center backdrop-blur-md w-full items-center py-6">
      <h1 className="my-6 text-5xl uppercase font-bold">Itineraries</h1>
      {data.map((itinerary,index)=> <CardItinerary data={itinerary} key={index} />)}
    </div>
  )
}
