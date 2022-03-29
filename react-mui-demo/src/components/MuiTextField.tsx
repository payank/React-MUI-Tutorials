import { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

//text fields in user registration/logic form etc.
export const MuiTextField = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Stack spacing={4}>
      
      <Stack spacing={2} direction='row'>
        <TextField label='Outlined' variant='outlined' />
        <TextField label='Filled' variant='filled' />
        <TextField label='Standard' variant='standard' />
      </Stack>
      
      <Stack spacing={2} direction='row'>
        <TextField label='Small secondary' size='small' color='secondary' />
      </Stack>
      
      <Stack spacing={2} direction='row'>
        //required will place astrisk on the label
        //handelling error state as well with the help of required, error and helperText props
        <TextField
          label='Form Input'
          required
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone'
          }
          type='password'
          //disabled
          error={!value}
          value={value}
          onChange={handleChange}
        />
      </Stack>
      
      
      <Stack spacing={2} direction='row'>
        //InputAdorment hels to suffix/prefix text, icons etc  (like visibilty icon for password)
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
            //readOnly:true
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}
