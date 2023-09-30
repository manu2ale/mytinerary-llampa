import React, { useState } from "react";
import { commentContext } from "./CommentContext";

export default function CommentProvider({ children }) {
    // const [reloadComment, setReloadComment] = useState(true);
    const [editableComment, setEditableComment] = useState(false);
    // const setReload = () => {
    //     setReloadComment(!reloadComment)
    // };
    const setEditable = () => {
        setEditableComment(!editableComment)
    };

    return (
        <commentContext.Provider value={{setEditable,editableComment}}>
            {children}
        </commentContext.Provider>
    )
}
