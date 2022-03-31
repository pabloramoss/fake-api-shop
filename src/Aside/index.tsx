import React from 'react';
import Link from "next/link"
import { Stack } from '@chakra-ui/react';

const Aside: React.FC = ()=> {

  return(
    <Stack spacing={10} bg="teal.50" p={10} h="100%">
      <Link href="introduction">
        <a>Introduction</a>
      </Link>
      <Link href="#sampleCode">
        <a>Sample code</a>
      </Link>
      <Link href="#getAllProducts">
        <a>Get all products</a>
      </Link>
      <Link href="#getProduct">
        <a>Get a single product</a>
      </Link>
    </Stack>
  )
}
export default Aside