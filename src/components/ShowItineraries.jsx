import CityItineraries from "./CityItineraries";

export default function ShowItineraries({data}) {
  // console.log(data);
  return (
      <>
      {data.length > 0 ? <CityItineraries data={data} />
      :
        <div id="itinerary" className="flex h-[552px] w-full flex-col justify-center items-center text-3xl">
          <img className="animate-pulse" src="https://i.im.ge/2023/09/01/w73EfY.no-itineraries.png" alt="Not Found" />
          <p>No itineraries found</p>
        </div>
      }
      </>
  )
}
