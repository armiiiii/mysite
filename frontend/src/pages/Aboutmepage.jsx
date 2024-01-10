import { Stack, Container, Typography } from '@mui/material';

import Window from '../ui/components/Window';
import StyledButton from '../ui/components/StyledButton';

export default function Aboutmepage() {
  return (
    <Container>
      <Stack direction={{sm: 'column', md: 'row'}} alignItems="center" justifyContent="center">
        <Window 
          width={300} 
          height={350} 
          name={"C:\\About me.txt"} 
          component={
            <>
            <Typography variant='p'>
              Lorem ispum dollar sit ammet
            </Typography>
            <StyledButton sx={{mt: 4}} variant='windowButton' disableRipple>Ok</StyledButton>
            </>
          }
        />
        <Window 
          width={300} 
          height={400} 
          name={"C:\\Beautifulguy.png"}
          component={<></>}
        />
      </Stack>
    </Container>
  )
}
