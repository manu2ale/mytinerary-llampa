import React, { useState } from "react";
import { reloadCommentsContext } from "./reloadCommentsContext";

export default function ReloadCommentsProvider({ children }) {
    const [reloadComment, setReloadComments] = useState(false);
    const setReload = () => {
        setReloadComments(!reloadComment)
    };

    return (
        <reloadCommentsContext.Provider value={{ reloadComment, setReload }}>
            {children}
        </reloadCommentsContext.Provider>
    )
}
