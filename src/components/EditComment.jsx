import React, { useContext, useEffect, useRef, forwardRef } from "react"
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import comments_actions from "../store/actions/comments"
const { update_comment } = comments_actions;
import { commentContext } from "../context/commentContext";

export function EditComment({ comment_id }, ref) {
    const { setEditable } = useContext(commentContext)
    const editedText = useRef();
    const dispatch = useDispatch();

    useEffect(
        () => {
            editedText.current.value = ref.current.textContent;
            editedText.current.focus();
        }, []
    );

    function updateComment(e) {
        e.preventDefault();
        if (editedText.current.value.trim()) {
            let data = { text: editedText.current.value.trim() }
            dispatch(update_comment({ data: data, comment_id: comment_id }))
                .then(res => {
                    if (res.payload.success) {
                        ref.current.textContent = editedText.current.value.trim();
                        setEditable();
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'bottom-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true
                        })
                        Toast.fire({
                            icon: 'success',
                            title: 'Comment Edited'
                        })
                    };
                })
                .catch(err => console.log(err))
        } else {
            editedText.current.focus();
        }
    };

    return (
        <form className="flex gap-1" onSubmit={updateComment}>
            <input type="text" ref={editedText} maxLength={200} className="w-full break-words rounded-full px-2 outline-none border-full border-2 border-teal-300 text-[#343231] bg-[#FAF9F6] focus:border-teal-500" />
            <button title="Save" className=" px-2.5 bg-teal-500 rounded-full text-white text-lg font-bold hover:bg-teal-400" type="submit">✓</button>
            <button title="Cancel" className="py-1 px-2 border-2 border-[#343231] rounded-full font-bold bg-white hover:border-dashed" onClick={() => setEditable()}>✕</button>
        </form>
    )
};

const forwardedRef = forwardRef(EditComment);
export default forwardedRef;
