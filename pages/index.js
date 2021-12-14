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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
            {cards.map((item) => (
              <Grid key={item} item xs={12} sm={6} md={4}>
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
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to descrime the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Send</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            
          </Grid>
        </Container>
      </Box>
      <Box as="footer" className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </>
  )
}

export default Home;
