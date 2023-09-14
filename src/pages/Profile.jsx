import { useEffect, useRef, useState } from "react"
import Swal from "sweetalert2";
import { useSelector,useDispatch } from "react-redux";

export default function Profile() {
	const user = useSelector(store=>store.users?.user);
    let name = useRef();
    let lastName = useRef();
    let mail = useRef();
    let photo = useRef();
    let password = useRef();
    let country = useRef();
    let [edit,setEdit] = useState(false)
	  console.log(user)

    function cancel () {
      setEdit(!edit)
      // window. location. reload()
    }

    function updateUser(e) {
        e.preventDefault();
        try {
          let data ={}
          if (name.current.value) {
            data.name=name.current.value
          }
          if (lastName.current.value) {
            lastName.name=lastName.current.value
          }
          if (photo.current.value) {
            data.photo=photo.current.value
          }
          if (country.current.value) {
            data.country=country.current.value
          }
          // Swal.fire({
          //     position: 'center',
          //     icon: 'success',
          //     title: `Updated ${user.name}`,
          //     showConfirmButton: false,
          //     timer: 2000
          //   })
        } catch (error) {
          console.log(error)
      }
    } 

  return (
    <main className="flex grow justify-center items-center bg-cover bg-center" style={{backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url('../img/profile.jpg')`}}>
        <div className="bg-white rounded-md p-6">
			<h1 className="text-center text-3xl">Profile</h1>
			<form onSubmit={updateUser} className="flex flex-col text-xl gap-y-3">
				<label >Name: <input className="border-2" disabled={!edit} ref={name} type="text" defaultValue={user.name}/></label>
				<label >Last Name: <input className="border-2" disabled={!edit} ref={lastName} type="text" defaultValue={user.lastName}/></label>
				<label >Email: <input className="border-2" disabled={!edit} ref={mail} type="text" defaultValue={user.mail}/></label>
				<label >Photo URL: <input className="border-2" disabled={!edit} ref={photo} type="text" defaultValue={user.photo}/></label>
				<label >Password: </label>
				<label >Country: <input className="border-2" disabled={!edit} ref={country} type="text" defaultValue={user.country}/></label>

				{!edit?
				<input onClick={()=>setEdit(!edit)} className="self-end w-28 py-1 px-4 rounded-full text-[#FAF9F6] font-bold bg-teal-500 hover:bg-teal-600 active:bg-teal-700 cursor-pointer" type="button" value="Edit" />
				:
				<div className="flex self-end gap-x-2">
					<input className="w-28 py-1 px-4 rounded-full text-[#FAF9F6] font-bold bg-teal-500 hover:bg-teal-600 active:bg-teal-700 cursor-pointer" type="submit" value="Save" />
					<input onClick={()=>cancel()} className="w-28 py-1 px-4 rounded-full border-2 border-rose-600 text-rose-600 font-bold hover:bg-rose-600 hover:text-slate-50 active:bg-rose-700 cursor-pointer" type="button" value="Cancel" />
				</div>
				}
		</form>
		</div>
    </main>
  )
}
