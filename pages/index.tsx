import type { NextPage } from 'next'
import Navbar from "../src/Navbar/index"
import HomeContent from "../src/Home/index"
import { Box, Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Box bg="brand.400">
      <Container maxW='container.lg' p={0}>
        <Navbar />
        <HomeContent />
      </Container>
    </Box>
  )
}

export default Home
