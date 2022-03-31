import type { NextPage } from 'next'
import Navbar from "../src/Navbar/index"
import HomeContent from "../src/Home/index"
import Aside from "../src/Aside/index"
import { Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container maxW='container.lg'>
      <Navbar />
      <HomeContent />
    </Container>
  )
}

export default Home
