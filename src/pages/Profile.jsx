import { useRef } from "react"
import Swal from "sweetalert2";
import { useSelector,useDispatch } from "react-redux";

export default function Profile() {
    const user = useSelector(store=>store.users.user)
    const dispatch = useDispatch();
    let name = useRef();
    let lastName = useRef();
    let mail = useRef();
    let photo = useRef();
    let password = useRef();
    let country = useRef();
    
    function updateUser(e) {
        e.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Updated ${user.name}`,
            showConfirmButton: false,
            timer: 2000
          })
    } 

  return (
    <main className="flex grow justify-center items-center bg-cover bg-center" style={{backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url('../img/profile.jpg')`}}>
        <h1>Profile</h1>
        <form onSubmit={updateUser} className="flex flex-col">
            <label >Name</label>
            <input ref={name} type="text" />
            <input type="submit" value="Save" />
        </form>
    </main>
  )
}
