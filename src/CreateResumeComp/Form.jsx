import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ProfileSummary from '../Form/ProfileSummary'
import Intro from '../Form/Intro'
import Skills from '../Form/Skills'
import EmploymentHistory from '../Form/EmploymentHistory'
import Projects from '../Form/Projects'

import Education from '../Form/Education'
import Extras from '../Form/Extras'
import Languages from '../Form/Languages'
import Achievement from '../Form/Achievement'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Stack } from '@mui/material'
import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from './ResumePreview'
import Typography from '@mui/material/Typography';



const AddForm = ({ handleFormChange }) => {
  //   const dispatch = useDispatch();

  const methods = useForm({
    defaultValues: {
      employmentHistory: [
        {
          position: '',
          companyName: '',
          startDate: '',
          endDate: '',
          loaction: '',
          projects: []
        }
      ],
      education: [
        {
          course: '',
          institution: '',
          startDate: '',
          endDate: '',
          location: '',
          percentage: ''
        }
      ]
    }
  })

  const onSubmit = data => {
    console.log(data)
    handleFormChange(data)

    // dispatch(addRecord(data))
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(0,0,0)'
      },
      secondary: {
        main: 'rgb(0, 0, 0)'
      },

      blue: 'rgb(0, 57, 172)',
      orange: 'rgb(243, 137, 11)'
    },


    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(0, 31, 90, 0.50)'
            }
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            '&:last-child': {
              paddingBottom: 16
            }
          }
        }
      },
      MuiCardHeader: {
        styleOverrides: {
          action: {
            margin: 0
          }
        }
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true
        }
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: '2rem'
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            '&:active': {
              boxShadow: 'unset'
            }
          }
        }
      }
    }
  })

  return (
    <div className='max-w-4xl'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card variant='outlined'>
                  <CardHeader title={ 
                  <Typography variant="h6" style={{ fontSize: '15px' }}>
                    Intro
                  </Typography>} />
                  <CardContent>
                    <Intro />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={12} order={{ xs: 2, md: 1 }}>
                <Stack spacing={2} direction='column'>
                  <Skills />
                  <Projects />
                  <Languages />
                  <Achievement />
                </Stack>
              </Grid>

              <Grid item xs={12} md={12} order={{ xs: 1, md: 2 }}>
                <Stack spacing={2} direction='column'>
                  <Card variant='outlined'>
                    <CardHeader 
                    
                    title={ 
                    <Typography variant="h6" style={{ fontSize: '15px' }}>
                    Profile Summary
                  </Typography>} 
                    />
                    <CardContent>
                      <ProfileSummary />
                    </CardContent>
                  </Card>
                  <EmploymentHistory />
                  <Education />
                  <Extras />
                </Stack>
              </Grid>

              {/* <div className="col-md-4 order-md-1 order-2">
            <div className="card mb-4">
              <Skills />
            </div>
            <div className="card mb-4">
              <Projects />
            </div>
            <div className="card mb-4">
              <Languages />
            </div>
            <div className="card mb-4">
              <Achievement />
            </div>
          </div> */}
              {/* <div className="col-md-8 order-md-2 order-1">
            <div className="card mb-4">
              <ProfileSummary />
            </div>
            <div className="card mb-4">
              <EmploymentHistory />
            </div>
            <div className="card mb-4">
              <Education />
            </div>
            <div className="card mb-4">
              <Extras />
            </div>
          </div> */}
              <Grid item xs={12} order={{ xs: 3 }} justifyContent='center' >
                  <Box display='flex' justifyContent='space-between' className=' fixed right-[50%] left-2 bottom-2 w-1/2 '>
                    <Button type="submit" variant='contained'>
                      Preview
                    </Button>
                  </Box>
                  <Box className="flex justify-end">
                  <Button type="submit" variant='contained'>
                      <PDFDownloadLink
                        document={<Resume />}
                        fileName="Resume.pdf">
                        {({ blob, url, loading, error }) =>
                          loading ? "Loading document..." : "Download now!"
                        }
                      </PDFDownloadLink>
                    </Button> </Box>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </ThemeProvider>
    </div>
  )
}

export default AddForm
