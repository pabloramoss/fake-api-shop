import React from 'react';
import Link from "next/link"
import { Stack } from '@chakra-ui/react';

const Aside: React.FC = ()=> {

  return(
    <Stack spacing={6} bg="brand.300" p={10} h="100%" minW="150px" color="brand.50">
      <Link href="#introduction">
        <a>Introduction</a>
      </Link>
      <Link href="#sampleCode">
        <a>Sample code</a>
      </Link>
      <Link href={`#${encodeURIComponent("Get all products")}`}>
        <a>Get all products</a>
      </Link>
      <Link href={`#${encodeURIComponent("Get a single product")}`}>
        <a>Get a single product</a>
      </Link>
    </Stack>
  )
}
export default Aside