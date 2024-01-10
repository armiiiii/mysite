import { Container, Stack, Typography } from '@mui/material'
import React from 'react'


export default function Footer() {
  return (
    <Container sx={{position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <footer >
          <Stack direction="column">
            <Typography variant='p'>
              VK - @armii17
            </Typography>
            <Typography variant='p'>
              GitHub - @armiiiii
            </Typography>
            <Typography variant='p'>
              Discord - @.iglka.
            </Typography>
          </Stack>
      </footer>
    </Container>
  )
}
