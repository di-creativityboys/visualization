import { Button, Stack, TextField } from '@mui/material'
import React from 'react'

const GenerateTab = () => {
  return (
    <Stack spacing={1} sx={{px: 1}}>
      <TextField
          id="outlined-multiline-static"
          label="Prompt"
          multiline
          rows={4}
          defaultValue=""
          disabled={true}
        />
      <Button variant="contained" color='secondary'>Generate</Button>
      <TextField
          id="outlined-multiline-static"
          label="Your Tweet"
          multiline
          rows={4}
          defaultValue=""
        />
      <Button variant="contained" color="warning">Post to X</Button>
    </Stack>
  )
}

export default GenerateTab