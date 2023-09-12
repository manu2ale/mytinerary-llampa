import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from '../store/actions/users';
const { signin } = user_actions;
import Swal from "sweetalert2";

export default function SingIn() {
    const navigate = useNavigate();
    const mail= useRef();
    const password=useRef();
    const dispatch = useDispatch();

    function handleSingIn(e) {
        e.preventDefault();
        let data = {
            mail: mail.current.value.trim(),
            password: password.current.value,
        };
        dispatch(signin({data}))
        .then(res=>{
            if (res.payload.token){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged In',
                    showConfirmButton: false,
                    timer: 2000
                  })
                navigate('/')
            } else if (res.payload.messages.length>0){
                let html = res.payload.messages.map(each=>`<p>${each}</p>`).join('')
                Swal.fire({
                    title: 'Something went wrong',
                    icon: 'error',
                    html
                  })
            }
            })
        .catch(err=>console.log(err))
        
    }
    
    return (
        <div className="flex w-full min-h-screen flex-wrap  justify-center items-center bg-cover bg-center md:gap-12 xl:gap-48" style={{backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url('../img/background.jpg')`}}>
            <div>
                <img className="w-[512px] hidden md:inline" src="/img/whitelogo.png" alt="Logo" />
                <p className="text-[#FAF9F6] text-2xl text-center w-[512px] md:mt-8">Find your perfect trip, designed by insiders who know and love their cities!</p>
            </div>
            <div className="flex flex-col w-[476px] m-3 p-12 rounded-md bg-[#FAF9F6] lg:mr-16">
                <h1 className="text-4xl font-semibold text-[#343231]">Sign In</h1>
                <p className="my-6">Need an account? <Anchor to={'/signup'} className="text-blue-600">Sign Up</Anchor></p>
                <form onSubmit={handleSingIn} className="flex flex-col text-gray-600">
                    <label>Email:</label>
                    <input className="mb-3 outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={mail} type="email" name="mail" id="mail"/>
                    <label>Password:</label>
                    <input className="mb-3 outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={password} type="password" name="password" id="password"/>
                    <input className="self-end mt-7 w-fit bg-teal-500 hover:bg-teal-600 py-2 px-2 rounded-lg text-lg font-semibold text-white cursor-pointer sm:text-xl sm:px-10" type="submit" value="Sign In"/>
                </form>
                <button className="flex w-full justify-center items-center mt-8 hover:bg-slate-200 py-2 border border-gray-600 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" className="border-2 rounded-full" viewBox="0 0 48 48">
                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <span>Sign In With Google</span>
                </button>
            </div>
        </div>
    )
}