import {
  Box,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material';

const Home = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <Box as="main">
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hello everyone. This is a photo album and Im trying to make this sentence as long
            as possible so we can see how does it look like on the screen
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Home;
