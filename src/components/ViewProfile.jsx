import { useSelector } from "react-redux"

export default function ViewProfile() {
    const user = useSelector(store => store.users?.user)
    return (
        <div className='bg-white p-4 w-[672px]'>
            <h1 className="text-center text-2xl mb-6">My Profile</h1>
            <div className="flex justify-center flex-col items-center ">
                <p className="font-semibold">Name:</p>
                <p className="mb-6 border-b  border-slate-400">{user.name}</p>

                {user.lastName &&
                    <>
                        <p className="font-semibold">Last Name:</p>
                        <p className="mb-6 border-b  border-slate-400">{user.lastName}</p>
                    </>}

                <p className="font-semibold">Country: </p>
                <p className="mb-6 ml-2 border-b border-slate-400">{user.country}</p>

                <p className="font-semibold">Photo:</p>
                <img className="w-44 h-44 mt-6 object-cover m-auto rounded-full" src={user.photo||'https://i.im.ge/2023/09/28/N6umIh.guest.png'} alt="profile pic" />

            </div>
        </div>
    )
}
