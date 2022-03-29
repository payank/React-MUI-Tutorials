import { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio
} from '@mui/material'

export const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log(value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Box>
      
      //formcontrol is wrapper components
      //Formlabel is used to specify the label for groups of radio button
      //formcontrollabel for individual label
      <FormControl>
        
        <FormLabel id='job-experience-group-label'>
          Years of experience
        </FormLabel>
        
        //name of radiogroup and id is to match to connect 
        //row proprs allign radio button in a row as opposed to column
        <RadioGroup
          row
          aria-labelledby='job-experience-group-label'
          name='job-experience-group'
          value={value}
          onChange={handleChange}>
          
          <FormControlLabel
            labelPlacement='start'
            value='0-2'
            control={<Radio size='small' color='secondary' />}
            label='0-2 years'
          />
          
          <FormControlLabel
            labelPlacement='start'
            value='3-5'
            control={<Radio size='small' color='secondary' />}
            label='3-5 years'
          />
          
          <FormControlLabel
            labelPlacement='start'
            value='6-10'
            control={<Radio size='small' color='secondary' />}
            label='6-10 years'
          />
        </RadioGroup>
        
        <FormHelperText> Invalid selection </FormHelperText>
      </FormControl>
    </Box>
  )
}
