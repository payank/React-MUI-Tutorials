import { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([])
  console.log(countries)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    
    //Box is similar to div tag on which we can apply css properties like height and width
    //instead of textField we could have also used 'select' which material ui provides
    //select prop is used for dropdown
    //SelectProps is used for multi select drop down
    //fullWidth props expands the dropdwon to maximum allowed width in our case 250px
    <Box width='250px'>
      <TextField
        label='Select country'
        select
        SelectProps={{
          multiple: true
        }}
        size='small'
        color='secondary'
        helperText='Please select your country'
        value={countries}
        onChange={handleChange}>
        fullWidth
        
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}
