import React from 'react'
import { useFormContext } from 'react-hook-form'
import Grid from '@mui/material/Grid'
// import OutlinedInput from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'

export default function Intro() {
  const { register } = useFormContext()
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <OutlinedInput fullWidth  size="small" placeholder='First Name' {...register('firstName')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedInput fullWidth size="small" placeholder='Last Name' {...register('lastName')} />
        </Grid>

        <Grid item xs={12}>
          <OutlinedInput fullWidth size="small" placeholder='Position' {...register('position')} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <OutlinedInput fullWidth size="small" placeholder='Email' {...register('email')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedInput fullWidth  size="small" placeholder='Phone' {...register('phone')} />
        </Grid>

        <Grid item xs={12}>
          <OutlinedInput fullWidth size="small" placeholder='City' {...register('city')} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <OutlinedInput fullWidth size="small" placeholder='Linkedin' {...register('linkedin')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedInput fullWidth size="small" placeholder='GitHub' {...register('github')} />
        </Grid>
      </Grid>
    </div>
  )
}
