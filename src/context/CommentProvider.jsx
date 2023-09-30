import React, { useState } from "react";
import { commentContext } from "./commentContext";

export default function CommentProvider({ children }) {
    const [editableComment, setEditableComment] = useState(false);
    const setEditable = () => {
        setEditableComment(!editableComment)
    };

    return (
        <commentContext.Provider value={{setEditable, editableComment}}>
            {children}
        </commentContext.Provider>
    )
}
