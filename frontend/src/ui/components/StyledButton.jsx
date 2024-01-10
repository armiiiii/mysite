import { Button } from "@mui/material";

import styled from "@emotion/styled";


const StyledButton = styled(Button)(() => ({
    width: "100px",
    height: "25px",
    backgroundColor: "#E9F1F7",
    borderTop: "1px solid white",
    borderLeft: "1px solid white",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderRadius: 0,
    transition: "all 0s",
    
    "&:hover": {
        borderTop: "1px solid black",
        borderLeft: "1px solid black",
        borderBottom: "1px solid white",
        borderRight: "1px solid white",
        backgroundColor: "#757575"
    },
}))


export default StyledButton;
