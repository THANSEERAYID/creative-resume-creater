import { useFormContext, useFieldArray } from 'react-hook-form'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { Fragment } from 'react'
import ChipButton from './components/chipButton'
import CardFieldArray from './CardFieldArray'
// import CardActionHeader from './components/cardActionHeader'

const Skills = () => {
  const { register, control } = useFormContext()
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'skills'
  })

  return (
    <CardFieldArray
      title='Skills'
      
      action={<ChipButton  size='small' color='primary' variant='outlined' label={<AddRoundedIcon />} onClick={() => append()} />}
      fields={fields}
    >
      {fields.length ? (
        <CardContent>
          <Grid container spacing={2}>
            {fields.map((item, index) => {
              return (
                <Fragment key={item.id}>
                  <Grid item xs={12}>
                    <FormControl fullWidth >
                      <OutlinedInput
                        size="small"
                        type='text'
                        placeholder='Skill'
                        endAdornment={
                          <InputAdornment position='end'>
                            <ChipButton
                             size='small'
                              color='primary'
                              onClick={() => remove(index)}
                              label={<RemoveRoundedIcon />}
                              variant='outlined'
                            />
                          </InputAdornment>
                        }
                        {...register(`skills.${index}.value`)}
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

export default Skills
