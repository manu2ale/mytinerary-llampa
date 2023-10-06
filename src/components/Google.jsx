import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import user_actions from "../store/actions/users";
const { google } = user_actions;
import Swal from "sweetalert2";

export default function ({ text }) {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    let googleButton = useRef();
    const handleCredentialResponse = async (response) => {
        const data = { token_google: response.credential };
        dispatch(google(data))
            .then(res => {
                if (res.payload.token) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Welcome',
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setTimeout(function () {
                        window.location.reload();
                    }, 100);
                    navigate(-1, { replace: true });
                }
            })
            .catch(err => console.log(err))
    };
    useEffect(() => {
        // window.onload = function () {
        if (window.google) {
            /* global google */
            window.google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_ID,
                callback: handleCredentialResponse,
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { theme: "filled_white", size: "large", type: "standard", text: text, shape: "pill", locale: "en-EN" }
            );
        };
    }, []);
    return <div ref={googleButton}></div>;
}