import { Link as Anchor } from "react-router-dom"
export default function LoginButton({ to }) {
  return (
    <Anchor to={to} className="bg-[#4F46E5] py-2 px-5 rounded-lg text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 24" fill="currentColor" className="m-1 w-4 h-6 inline">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>Login
    </Anchor>
  )
}
