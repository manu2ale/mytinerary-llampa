import { useState,ReactDOM } from "react";
import { useDispatch } from "react-redux";
import comments_actions from "../store/actions/comments";
const { update_comment, delete_comment } = comments_actions;

export default function OneComment({ comment, user_id }) {
    const [menuToogle, setMenuToogler] = useState(false);
    const dispatch = useDispatch();

    function deleteComment() {
        dispatch(delete_comment(comment._id))
            .then(res => {
                if (res.payload.commentDeleted) {
                    let container = ReactDOM.findDOMNode(this).parentNode;
                    ReactDOM.unmountComponentAtNode(container);
                }
                
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="flex my-2">
            <img className="inline-block select-none mr-3 ring-1 ring-purple-600 to ring-offset-1 rounded-full object-cover w-8 h-8 group-hover:drop-shadow-md" src={comment.user_id.photo} alt="profile photo" />
            <div className="p-2 rounded-lg w-full bg-slate-100">
                <div className="flex justify-between relative">
                    <span className="font-bold select-none">{comment.user_id.name + ' ' + (comment.user_id.lastName || '')}</span>
                    {user_id == comment.user_id._id &&
                        <>
                            <svg onClick={() => setMenuToogler(!menuToogle)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 border-black/50 rounded-full hover:border-2 hover:cursor-pointer " + (menuToogle && "border-2")}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            {menuToogle &&
                                <ul className="absolute flex flex-col right-0 top-6 rounded-lg border-2 divide-y-1 text-right bg-white hover:cursor-pointer">
                                    <li onClick={()=>console.log('edit')} className="px-3 py-1 hover:bg-slate-200">Edit</li>
                                    <li onClick={deleteComment} className="px-3 py-1 text-rose-600 hover:bg-slate-200">Delete</li>
                                </ul>
                            }
                        </>
                    }
                </div>
                <p className="break-words">{comment.text}</p>
            </div>
        </div>
    )
}
