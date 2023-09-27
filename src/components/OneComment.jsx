import { useContext, createContext, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import EditComment from "./EditComment";
import comments_actions from "../store/actions/comments";
const { delete_comment } = comments_actions;

import { ReloadContext } from "./Comments";
export const Context = createContext();

export default function OneComment({ comment, user_id }) {
    // console.log(ReloadContext)
    const [reloadComment, setReloadComment] = useContext(ReloadContext,null)
    const commentMenu = useRef();
    const commentText = useRef();
    const [menuToogle, setMenuToogle] = useState(false);
    const [hideComment, setHideComment] = useState(false);
    const [editableComment, setEditableComment] = useState(false);
    const dispatch = useDispatch();

    function handleCloseCommentMenu(event) {
        if (commentMenu) {
            const isClickInside = commentMenu.current?.contains(event.target)
            if (commentMenu.current !== event.target && !isClickInside) {
                setMenuToogle(false)
            }
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleCloseCommentMenu)
        return () => document.removeEventListener('click', handleCloseCommentMenu)
    }, []);

    function deleteComment() {
        setMenuToogle(!menuToogle);
        dispatch(delete_comment(comment._id))
            .then(res => {
                if (res.payload.commentDeleted) {
                    setReloadComment(!reloadComment)
                    setHideComment(true)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Comment deleted'
                      })                }
            })
            .catch(err => console.log(err))
    };

    function showEdit() {
        setMenuToogle(!menuToogle);
        setEditableComment(true);
    }

    return (
        <div className={"flex my-2 " + (hideComment && "hidden")}>
            <img className="inline-block select-none mr-3 ring-1 ring-purple-600 to ring-offset-1 rounded-full object-cover w-8 h-8 group-hover:drop-shadow-md" src={comment.user_id.photo} alt="profile photo" />
            <div className="p-2 rounded-lg w-full bg-slate-100">
                <div className="flex justify-between relative">
                    <span className="font-bold select-none">{comment.user_id.name + ' ' + (comment.user_id.lastName || '')}</span>
                    {user_id == comment.user_id._id &&
                        <div ref={commentMenu}>
                            <svg onClick={() => setMenuToogle(!menuToogle)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 border-black/50  rounded-full hover:border-2 hover:cursor-pointer " + (menuToogle && "border-2")}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            {menuToogle &&
                                <ul className="absolute flex flex-col right-0 top-6 rounded-lg border-2 divide-y-2 font-semibold text-center bg-white hover:cursor-pointer">
                                    <li onClick={showEdit} className="px-3 py-1 hover:bg-slate-200">Edit</li>
                                    <li onClick={deleteComment} className="px-3 py-1 text-rose-600 hover:bg-slate-200">Delete</li>
                                </ul>
                            }
                        </div>
                    }
                </div>
                <p ref={commentText} className="break-words max-w-md">{comment.text}</p>

                {editableComment &&
                    <div className="flex flex-col">
                        <Context.Provider value={[editableComment, setEditableComment]}>
                            <EditComment comment_id={comment._id} ref={commentText}/>
                        </Context.Provider>
                    </div>}

            </div>
        </div>
    )
}
