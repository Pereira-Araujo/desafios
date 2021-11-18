import { useState,useContext } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import IconButton from "@mui/material/IconButton";
import GlobalStateContext from "../../../global/GlobalStateContext";

export default function ButtonChangeView() {
    const { view, setView } = useContext(GlobalStateContext);

    return (
        <>
            <IconButton onClick={()=>setView('list')} color="primary"
                value="list" aria-label="list">
                <ViewListIcon />
            </IconButton>

            <IconButton onClick={()=>setView('card')} color="primary"
                value="module" aria-label="module">
                <ViewModuleIcon />
            </IconButton>
        </>
    );
}