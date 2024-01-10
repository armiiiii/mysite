import { AppBar, Toolbar, Typography, Stack } from "@mui/material";

import HeaderLink from "./HeaderLink";
import Timer from "./Timer";
import { links } from "./links.logic";

export default function Header() {
  return (
    <AppBar position="static" sx={{backgroundColor: "#FFF308", color: "#6A03B9"}}>
      <Toolbar>
        <Stack direction="row" flexGrow={1}>
          <Typography borderRight={"3px solid black"} fontFamily={'DotGothic16'} variant="h6">BloodyPixel</Typography>
          <Stack direction="row">
            {links.map((link) => (
              <HeaderLink key={link.id} text={link.text} icon={link.icon} href={link.href} />
            ))}
          </Stack>
        </Stack>
        <Timer />
      </Toolbar>
    </AppBar>
  );
}
