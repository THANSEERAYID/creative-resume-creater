import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography';

const CardFieldArray = props => {
  const { fields, title, action, children } = props
  return (
    <Card variant='outlined'>
      <CardHeader 
      title={
        <Typography variant="h6" style={{ fontSize: '15px' }}>
        {title}
      </Typography>
        }
       action={fields.length === 0 && action} />
      {fields.length > 0 && children}
      {fields.length > 0 && <CardHeader sx={{ paddingTop: 0 }} action={action} />}
    </Card>
  )
}

export default CardFieldArray
