import { useState } from 'react'
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log(skills)

  //this is for single checkbox element
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked)
  }
  
  //this function is for handling state of multipl checkboxes
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter(skill => skill !== event.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptTnC}
              onChange={handleChange}
              size='small'
              color='secondary'
            />
          }
          label='Accept terms and conditions'
        />
      </Box>
      
      <Box>
        //icon as a checkbox
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      
      //for checkbox group we need FromGroup, FormControl, FormLabel 
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          
          //row props allign checkboxes in a row
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  value='html'
                  checked={skills.includes('html')}
                  onChange={handleSkillChange}
                />
              }
              label='HTML'
            />
            <FormControlLabel
              control={
                <Checkbox
                  value='css'
                  checked={skills.includes('css')}
                  onChange={handleSkillChange}
                />
              }
              label='CSS'
            />
            <FormControlLabel
              control={
                <Checkbox
                  value='javascript'
                  checked={skills.includes('javascript')}
                  onChange={handleSkillChange}
                />
              }
              label='JavaScript'
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}
