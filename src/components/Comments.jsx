import { createContext,useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import OneComment from "./OneComment";
import comments_actions from "../store/actions/comments";
const { read_comments, create_comment } = comments_actions;

export const ReloadContext = createContext(); 

export default function Comments({ itinerary_id, user }) {
    const [allComments, setAllComments] = useState([]);
    const [reloadComment, setReloadComment] = useState(true);
    let inputComment = useRef();
    const dispatch = useDispatch();
    const defaultPhoto = 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png'

    useEffect(
        () => {
            dispatch(read_comments(itinerary_id))
                .then(res => setAllComments(res.payload.comments))
                .catch(err => console.log(err))
        }, [reloadComment]
    )
    // console.log(allComments)
    function createComment(e) {
        e.preventDefault();
        if (user.name) {
            if (inputComment.current.value.trim()) {
                let data = {
                    text: inputComment.current.value.trim(),
                    itinerary_id: itinerary_id
                };
                dispatch(create_comment(data))
                    .then(res => {
                        if (res.payload.commentCreated) {
                            setReloadComment(!reloadComment);
                            inputComment.current.value = ''
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'bottom-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                              })
                              
                              Toast.fire({
                                icon: 'success',
                                title: 'Comment created'
                              })
                        }
                    })
                    .catch(err => console.log(err))
            } else {
                inputComment.current.focus()
            }
        } else {
            Swal.fire({
                title: 'Please sign in to comment',
                // text: "You won't be able to revert this!",
                icon: 'info',
                confirmButtonColor: '#14b8a6',
                confirmButtonText: 'Sign In',
                showCancelButton: true,
                footer: "Need an account?<a href='/signup' style='color:#5e8bee'> Sign Up!</a>"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/signin";
                }
            })
        }

    }

    return (
        <div className="flex flex-col w-11/12 mb-6 p-2 text-sm border border-gray-400 rounded-xl shadow-lg">
            <h1 className="font-bold text-xl text-center">Comments <span className="text-sm bg-teal-500 text-white px-3 py-1 rounded-full">{allComments.length}</span></h1>
            <div className="flex flex-col h-52 gap-3 border-2 rounded-lg p-2 my-2 overflow-y-auto overscroll-contain" style={{ scrollbarWidth: "thin" }}>
                {allComments.length > 0 ?
                    allComments.map((comment, index) => 
                    <ReloadContext.Provider value={[reloadComment, setReloadComment]}>
                        <OneComment comment={comment} user_id={user._id} key={index} />
                    </ReloadContext.Provider>
                    )
                    :
                    <p className="italic opacity-50">No comments</p>
                }
            </div>
            <div className="flex items-center">
                <img className="inline select-none mr-3 ring-2 ring-purple-600 rounded-full object-cover w-8 h-8 group-hover:drop-shadow-md" src={user.photo || defaultPhoto} alt="profile photo" />
                <form className="flex w-full relative">
                    <input ref={inputComment} maxLength={200} className="flex pl-4 pr-14 py-3 w-full outline-none bg-slate-200 rounded-full text-base focus:outline-teal-500 focus:bg-slate-100" type="text" placeholder="Leave a comment..." />
                    <button onClick={createComment} type="submit" className="absolute right-4 top-2 border bg-slate-50 border-neutral-400 rounded-full p-1 hover:text-white hover:bg-teal-500 active:bg-teal-300">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}
