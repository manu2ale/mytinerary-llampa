import { Link as Anchor } from "react-router-dom"
export default function NotFound() {
  return (
    <div className="flex flex-col grow justify-center items-center">
      <img className="animate-pulse" src="https://i.im.ge/2023/09/01/w73EfY.no-itineraries.png" alt="Not Found" />
      <h1 className="text-4xl">Page not found</h1>
      <Anchor to={'/'} className="mt-5 py-2 px-4 rounded-full border-2 font-semibold border-teal-500 hover:bg-teal-500 hover:text-white" replace>BACK</Anchor>
      </div>
  )
}
