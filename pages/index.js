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
  Container,
  Button,
  ButtonGroup
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material';
import useStyles from '../lib/styles.js';

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <Box as="main">
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hello everyone. This is a photo album and Im trying to make this sentence as long
            as possible so we can see how does it look like on the screen
          </Typography>
          <Grid container spacing={2} justifyContent="center" className={classes.buttons}>
            <Grid item>
              <Button variant="contained" color="primary">
                See my photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
          {/* <ButtonGroup>
            <Button>one</Button>
            <Button>two</Button>
          </ButtonGroup> */}
        </Container>
        <Container maxWidth="md" className={classes.cardGrid}>
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent
                  className={classes.cardContent}
                >
                  <Typography variant="h5" gutterBottom>
                    Photo Album
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Home;
