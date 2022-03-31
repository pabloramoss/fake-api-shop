import { Container, Stack, Heading, HStack, Button, Box, Text, Image, Link, Code } from '@chakra-ui/react';
import { FaGithub, FaBook } from 'react-icons/fa';
import React from 'react';

const HomeContent: React.FC = ()=> {

  return(
    <Container maxW="container.lg">
      <HStack justifyContent="space-between" h="95vh" >
        <Stack>
          <Heading>Fake gaming store app</Heading>
          <Text>Simple fake store rest API for your e-commerce website prototype</Text>
          <HStack>
            <Link _hover={{textDecoration:"none"}} href='https://github.com/pabloramoss/fake-api-shop'>
              <Button variant="outline" colorScheme='teal' leftIcon={<FaGithub />}>
                Github
              </Button>
            </Link>
            <Link _hover={{textDecoration:"none"}} href='/docs'>
              <Button colorScheme='teal' leftIcon={<FaBook />}>
              Docs
            </Button>
            </Link>

          </HStack>
        </Stack>
        <Image src="https://via.placeholder.com/300" alt='logo'/>
      </HStack>
      <Stack spacing={10} mb={30}>
        <Stack>
          <Heading>Example code</Heading>
          <Stack spacing={0} bg="gray.100" p={5}>
            <Code>{`fetch('https://simplestoreapi.vercel.app/api/products/1')`}</Code>
            <Code ps={5}>{`.then(res=>res.json())`}</Code>
            <Code ps={5}>{`.then(json=>console.log(json))`}</Code>
          </Stack>
        </Stack>
        <Stack>
          <Heading>Resources</Heading>
          <Text>This simple api comes with only 1 resource:</Text>
          <Stack direction="row" justifyContent="space-between" maxW={400}>
            <Link fontWeight={500}>Products</Link>
            <Text>30 products</Text>
          </Stack>
          <Box>
            <Link href='/docs'>
              <Button>View details</Button>
            </Link>
          </Box>
        </Stack>
        <Stack>
          <Heading>Routes</Heading>
          <Text>HTTP methods supported:</Text>
          <Stack direction="row" justifyContent="space-between" maxW={400}>
            <Text fontWeight={600}>GET</Text>
            <Link href='/api/products' fontWeight={500} textColor="teal">/api/products</Link>
          </Stack>
          <Stack direction="row" justifyContent="space-between" maxW={400}>
            <Text fontWeight={600}>GET</Text>
            <Link href='/api/products/1' fontWeight={500} textColor="teal">/api/products/1</Link>
          </Stack>
          <Box>
            <Link href='/docs'>
              <Button>View details</Button>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}
export default HomeContent