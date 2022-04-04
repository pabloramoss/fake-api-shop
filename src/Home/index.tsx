import { Container, Stack, Heading, HStack, Button, Box, Text, Code } from '@chakra-ui/react';
import { FaGithub, FaBook } from 'react-icons/fa';
import React from 'react';
import Link from "next/link"
import Image from "next/image"

const HomeContent: React.FC = ()=> {

  return(
    <Container maxW="container.lg" pb={20}>
      <Stack direction={{ base: "column", md: "row" }} alignItems="center" justifyContent={{base: "normal", md: "space-between"}} h="90vh" >
        <Stack mt={{base: 100, md: 0}}>
          <Heading color="brand.50">Fake gaming store app</Heading>
          <Text color="brand.50" opacity={0.8}>Simple fake store API for your e-commerce website prototype</Text>
          <HStack>
            <Link href='https://github.com/pabloramoss/fake-api-shop'>
              <a>
                <Button colorScheme="gray" leftIcon={<FaGithub />}>
                  Github
                </Button>
              </a>
            </Link>
            <Link href='/docs'>
              <a>
                <Button colorScheme="gray" leftIcon={<FaBook />}>
                Docs
              </Button>
              </a>
            </Link>
          </HStack>
        </Stack>
        <Image height={300} width={300} src="/homeImage.png" alt='simple api home image'/>
      </Stack>
      <Stack spacing={10} mb={30}>
        <Stack>
          <Heading color="brand.50">Example code</Heading>
          <Stack rounded={5} spacing={0} bg="gray.100" p={5}>
            <Code>{`fetch('https://simpleapistore.vercel.app/api/products/1')`}</Code>
            <Code ps={5}>{`.then(res=>res.json())`}</Code>
            <Code ps={5}>{`.then(json=>console.log(json))`}</Code>
          </Stack>
        </Stack>
        <Stack>
          <Heading color="brand.50">Resources</Heading>
          <Text color="brand.50">This simple api comes with only 1 resource:</Text>
          <Stack color="brand.50" direction="row" justifyContent="space-between" maxW={400}>
            <Link href="/api/products">
              <a>
                <Text fontWeight={500}>Products</Text>
              </a>      
            </Link>
            <Text>30 products</Text>
          </Stack>
          <Box>
            <Link href="/docs">
              <a>
                <Button>View details</Button>
              </a>
            </Link>
          </Box>
        </Stack>
        <Stack>
          <Heading color="brand.50">Routes</Heading>
          <Text color="brand.50">HTTP methods supported:</Text>
          <Stack color="brand.50" direction="row" justifyContent="space-between" maxW={400}>
            <Text fontWeight={600}>GET</Text>
            <Link href='/api/products'>
              <a>
                <Text fontWeight={500}>/api/products</Text>
              </a>
            </Link>
          </Stack>
          <Stack color="brand.50" direction="row" justifyContent="space-between" maxW={400}>
            <Text fontWeight={600}>GET</Text>
            <Link href='/api/products/1'>
              <a>
                <Text fontWeight={500}>/api/products/1</Text>
              </a>
            </Link>
          </Stack>
          <Box>
            <Link href='/docs'>
              <a>
                <Button>View details</Button>
              </a>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}
export default HomeContent