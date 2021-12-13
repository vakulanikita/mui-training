import NextLink from 'next/link'
import Main from '../components/layouts/main'
import {
  Box,
  Stack,
  Typography,
  Button,
  Divider 
} from '@mui/material'
import React from 'react';

export default function Home() {

  let state = 3;

  React.useEffect(() => {
    const counter = document.getElementById("counter")
  }, [])

  // console.log(spanRef);
  
  const render = () => {
    counter.textContent = state.toString();
  }

  render()

  return (
    <Main title="index page">
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
  )
}
