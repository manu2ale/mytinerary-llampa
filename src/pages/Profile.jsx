import { Outlet, Link as Anchor } from "react-router-dom";

export default function Profile() {

  return (
    <main className="flex grow justify-center divide-x-2 mt-[50px]  bg-cover bg-center sm:mt-[70px]" style={{ backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url('../img/profile.jpg')` }}>

      <ul className="flex flex-col gap-3 bg-white pt-5 px-6 font-semibold">
        <li><Anchor to={'/profile'} className="block">My Profile</Anchor></li>
        <li><Anchor to={'/profile/edit'} className="block">Edit</Anchor></li>
        {/* <li><Anchor to={'/profile/passchange'} className="block">Change Password</Anchor></li> */}
      </ul>

      <Outlet />
    </main>
  )
}
