import { Typography } from '@mui/material'

//concerned in apperance of text 

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      
      //h4 tag will become as h1 beacouse of component, gutterBottom has by default value as false but if given it will provide bottom border to the tag
      <Typography variant='h4' component='h1' gutterBottom>
        h4 Heading
      </Typography> 
      
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>
      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>
      
      //act as a paragraph tag with default font size of 16 px, it has variant='body1'
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam saepe
        magnam illo quas illum minus, aperiam, iusto optio quisquam veniam
        obcaecati quasi libero aspernatur alias quia modi minima excepturi ad.
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum
        quam deserunt optio atque illo iste! Qui ullam ut nisi. Porro adipisci
        eius nesciunt excepturi id! Eius nemo asperiores natus?
      </Typography>
    </div>
  )
}
