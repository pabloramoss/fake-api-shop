import React from 'react';
import Link from "next/link"
import Image from "next/image"
import { Box, Stack } from '@chakra-ui/react';


const Navbar: React.FC = ()=> {

  return(
    <Stack justifyContent="space-between" direction="row" alignItems="center" className='card' height="6vh">
      <Box mt={2}>
        <Link href="/">
          <a>
            <Image height={40} width={80} src="/logo.png" alt='api logo' />
          </a>
        </Link>
      </Box>
      <Stack direction="row" spacing={5} pe={4} color="brand.50">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/docs">
          <a>Docs</a>
        </Link>
        <Link href="https://github.com/pabloramoss/fake-api-shop">
          <a>Github</a>
        </Link>
      </Stack>
    </Stack>
  )
}
export default Navbar