import { Link } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';


export default function HeaderLink({href, text, icon}) {
  return (
    <Link href={href}>
      <Stack direction="row" bgcolor="#E9F1F7" alignItems="center" ml={1}
        sx={{
          minWidth: '150px',
          height: 'fit-content',
          borderTop: '1px solid white',
          borderLeft: '1px solid white',
          borderBottom: '1px solid black',
          borderRight: '1px solid black',
        }}
      >
        <Stack direction="row" flexGrow={1} alignItems="center" p={0.25}>
          {icon}
          <Typography color="black" textDecoration="none" variant='body2'>
            {text}
          </Typography>
        </Stack>
        <CloseIcon />
      </Stack>
    </Link>
  )
}
