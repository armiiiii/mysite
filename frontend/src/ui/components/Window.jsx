import { Paper, Stack, Typography } from "@mui/material";

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';


function WindowButton({ icon }) {
    return (
        <Paper variant="Window" sx={{m: 0.25}}>
            {icon}
        </Paper>
    );
}


function Menubar({name}) {
    return (
        <Stack direction="row" justifyContent="space-between" bgcolor="#187795">
            <Typography ml={1} fontWeight="bold" variant="titlebar2">
                {name}
            </Typography>
            <Stack direction="row">
                <WindowButton icon={<RemoveIcon />}/>
                <WindowButton icon={<FullscreenIcon />}/>
                <WindowButton icon={<CloseIcon />}/>
            </Stack>
        </Stack>
    );
}

function Window({width, height, name, component}) {
    return (
        <Paper variant="Window" sx={{width: width, height: height}}>
            <Menubar name={name}/> 
            <Stack direction="column" alignItems="center" mt={5}>
                {component}
            </Stack>   
        </Paper>
    );
}

export default Window;
