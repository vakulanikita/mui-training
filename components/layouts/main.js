import Head from 'next/head'
// import { useColorModeValue } from '@chakra-ui/react'
import {
  Container
} from '@mui/material'

export default function Main({ children, title = "starter" }) {
  return (
    <>
      <Head>
        <title>Next | {title}</title>
      </Head>

      <Container
        pt={5}
        maxWidth="sm"
        // color={useColorModeValue('spacejelly', '#fff')}
      >
        { children }
      </Container>

    </>

  )
}