import { useContext } from 'react';
import GlobalStateContext from "../../../global/GlobalStateContext";

import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import IconButton from "@mui/material/IconButton";

export default function ButtonChangeView() {
    const {setView } = useContext(GlobalStateContext);

    return (
        <main>
            <IconButton onClick={()=>setView('list')} color="primary"
                value="list" aria-label="list">
                <ViewListIcon />
            </IconButton>

            <IconButton onClick={()=>setView('card')} color="primary"
                value="module" aria-label="module">
                <ViewModuleIcon />
            </IconButton>
        </main>
    );
}