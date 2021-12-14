import Main from '../components/layouts/main'
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Tollbar,
  Container,
  Stack,
  Button,
  Divider
} from '@mui/material'
import PhotoCamera from '@mui/icons-material';

const Home = () => {

  return (
    <>
      <CssBaseline />
      <Main title="index cpage">
        <Typography variant="h1">Hello, World</Typography>
        <Stack
          my={2}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography as="span" fontWeight="bold">Redux</Typography>
          <Button variant="contained" sx={{textTransform: "none"}}>Сменить тему</Button>
        </Stack>
        <Divider />
        <Stack
          p={1}
          mt={2}
          sx={{ border: "1px solid lightgray"}}
          direction="row"
          alignItems="center"
          gap={1}
        >
          <Typography as="span">
            Счетчик:
            <Typography as="span" id="counter"></Typography>
          </Typography>
          <Button variant="contained" sx={{textTransform: "none"}} color="success">Добавить</Button>
          <Button variant="contained" sx={{textTransform: "none"}} color="error">Убрать</Button>
          <Button variant="contained" sx={{textTransform: "none"}}>Async</Button>
        </Stack>
      </Main>
    </>
  )
}

export default Home;
