import { Button, Stack } from '@mui/material'
import React from 'react'

const GenerateTab = () => {
  return (
    <Stack spacing={1} sx={{px: 1}}>
      <Button variant="contained" color='secondary'>Generate</Button>
    </Stack>
  )
}

export default GenerateTab