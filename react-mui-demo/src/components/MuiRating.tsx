import { Stack, Rating } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


//for rating in stars (*), like glassdoor/google etc
export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3)
  console.log(value)
  
  //accept two parms, 1 is the event and another one is the new value to be set
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue)
  }
  return (
    <Stack spacing={2}>
      //precision props allows us to select rating in decimal points
      //icon props allows to use custom icons instead of start
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size='large'
        icon={<FavoriteIcon fontSize='inherit' color='error' />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        readOnly
        highlisghSelectedOnly //highlight only tha maximum selected rating, used for happy/sad for max/min rating
      />
    </Stack>
  )
}
