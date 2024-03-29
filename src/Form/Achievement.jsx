import { useFormContext, useFieldArray } from 'react-hook-form'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { Fragment } from 'react'
import ChipButton from './components/chipButton'
import CardFieldArray from './CardFieldArray'
import { InputAdornment } from '@mui/material'
// import CardActionHeader from './components/cardActionHeader'

const Achievement = () => {
  const { register, control } = useFormContext()
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'achievement'
  })
  return (
    <CardFieldArray
      title='Achievement'
      action={<ChipButton  size='small' color='secondary' variant='outlined' label={<AddRoundedIcon />} onClick={() => append()} />}
      fields={fields}
    >
      {fields.length ? (
        <CardContent>
          <Grid container spacing={2}>
            {fields.map((item, index) => {
              return (
                <Fragment key={item.id}>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant='outlined'>
                      <OutlinedInput
                        type='text'
                        size='small'
                        placeholder='Achievement'
                        endAdornment={
                          <InputAdornment position='end'>
                            <ChipButton
                             size='small'
                              color='primary'
                              variant='outlined'
                              label={<RemoveRoundedIcon />}
                              onClick={() => remove(index)}
                            />
                          </InputAdornment>
                        }
                        {...register(`achievement.${index}.value`)}
                      />
                    </FormControl>
                  </Grid>
                </Fragment>
              )
            })}
          </Grid>
        </CardContent>
      ) : null}
    </CardFieldArray>
  )
}

export default Achievement
