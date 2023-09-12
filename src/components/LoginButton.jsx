import { Link as Anchor } from "react-router-dom"
export default function LoginButton({ to,title }) {
  return (
    <Anchor to={to} className="py-4 px-5 rounded-lg hover:shadow-md active:bg-slate-100">
      {title}
    </Anchor>
  )
}
