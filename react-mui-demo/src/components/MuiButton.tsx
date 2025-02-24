import { useState } from 'react'
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([])
  console.log(formats)

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats)
  }
  return (
    <Stack spacing={4}>
      
      //stack is nothing but dev tag
      <Stack spacing={2} direction='row'>
        
        //for less attention
        //with href, button will asc as anchor tag
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        
        //for more attention
        <Button variant='contained'>Contained</Button>
        
        //for normal attention
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      
      
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
      </Stack>
      
      //dispay='flex; is default value, so we need to specify the display='block'
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>
      
      
      <Stack spacing={2} direction='row'>
        //disable default ripple effect on button click
        <Button
          variant='contained'
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('Clicked')}>
          Send
        </Button>
        
        //disbale default button elevation
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        
        //just a icon which act as button
        <IconButton color='success' size='small' aria-label='send'>
          <SendIcon />
        </IconButton>
      </Stack>
      
      
      <Stack direction='row'>
        
        //button group to control the buttons props from a main button group, see different props:
        //aria-label is added for accessibility
        <ButtonGroup
          variant='text'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='alignment button group'>
          <Button onClick={() => alert('Left clicked')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      
      
      <Stack direction='row'>
        //toggle button group which handles onchange of different buttons in a group
        //handleFormateChanges acceppts two args, one is event, another is responsible for updating the format state on button click/unclick
        //exclusive props enable to format(toggle) only one button at a time
        <ToggleButtonGroup
          exclusive
          value={formats}
          onChange={handleFormatChange}
          color='success'
          size='small'
          aria-label='text formatting'>
          
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          
          <ToggleButton value='underlined' aria-label='underline'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}
