import { useContext, useEffect, useRef, forwardRef } from "react"
import { useDispatch } from "react-redux";
import comments_actions from "../store/actions/comments"
const { update_comment } = comments_actions;
import { Context } from "./OneComment";
import Swal from "sweetalert2";
// console.log(Context)
function EditComment( {comment_id}, ref) {
    const [editableComment,setEditableComment] = useContext(Context);
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
            dispatch(update_comment({data:data, comment_id:comment_id}))
            .then(res=>{
                if (res.payload.success) {
                    ref.current.textContent = editedText.current.value.trim();
                    setEditableComment(!editableComment);
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Comment edited'
                      })
                };
            })
            .catch( err => console.log(err))
        } else {
            editedText.current.focus();
        }
    };

    return (
        <form className="flex flex-col" onSubmit={updateComment}>
            <input type="text" ref={editedText} />
            <button className="self-end" type="submit">Save</button>
            <button className="inline self-end" onClick={()=>setEditableComment(!editableComment)}>Cancel</button>
        </form>
    )
};

const forwardedRef = forwardRef(EditComment);
export default forwardedRef;
