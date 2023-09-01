import CityItineraries from "./CityItineraries";

export default function ShowItineraries({data}) {
  console.log(data);
  return (
    <div>
      {data.length > 0 ? <CityItineraries />
      :
        <div className="flex flex-col justify-center items-center text-3xl">
          <img src="https://i.im.ge/2023/09/01/w73EfY.no-itineraries.png" alt="Not Found" />
          <p>No itineraries found</p>
        </div>
      }
    </div>
  )
}
