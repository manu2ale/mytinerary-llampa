import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from '../store/actions/users';
const { signin } = user_actions;
import Swal from "sweetalert2";
import Google from "../components/Google";

export default function SingIn() {
    const navigate = useNavigate();
    const mail = useRef();
    const password = useRef();
    const dispatch = useDispatch();

    function handleSingIn(e) {
        e.preventDefault();
        let data = {
            mail: mail.current.value.trim(),
            password: password.current.value,
        };
        dispatch(signin({ data }))
            .then(res => {
                if (res.payload.token) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Logged In',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    // window.location.reload();
                    navigate(-1, { replace: true })
                } else if (res.payload.messages.length > 0) {
                    let html = res.payload.messages.map(each => `<p>${each}</p>`).join('')
                    Swal.fire({
                        title: 'Something went wrong',
                        icon: 'error',
                        html
                    })
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="flex w-full content-center min-h-screen flex-wrap  justify-center items-center bg-cover bg-center md:gap-12 xl:gap-48" style={{ backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),url('../img/background.jpg')` }}>
            <div className="animate-fade-right">
                <img className="w-[512px] hidden md:inline" src="/img/whitelogo.png" alt="Logo" />
                <p className="text-[#FAF9F6] text-2xl text-center max-w-[512px] md:mt-8">Find your perfect trip, designed by insiders who know and love their cities!</p>
            </div>
            <div className="flex flex-col w-[476px] m-3 p-12 animate-fade-left rounded-md bg-[#FAF9F6] lg:mr-16">
                <h1 className="text-4xl font-semibold text-[#343231]">Sign In</h1>
                <p className="my-6">Need an account? <Anchor to='/signup' replace className="text-blue-600">Sign Up</Anchor></p>
                <form onSubmit={handleSingIn} className="flex flex-col text-[#343231]">
                    <label>Email:</label>
                    <input className="mb-3 outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={mail} type="email" name="mail" id="mail" />
                    <label>Password:</label>
                    <input className="mb-3 outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={password} type="password" name="password" id="password" />
                    <input className="self-end mt-7 w-fit bg-teal-500 hover:bg-teal-600 py-2 px-10 rounded-lg text-lg font-semibold text-white cursor-pointer sm:text-xl" type="submit" value="Sign In" />
                </form>
                <div className="flex justify-center items-center mt-4 pt-4 border-t-2">
                    <Google text={'signin_with'} />
                </div>
            </div>
        </div>
    )
}