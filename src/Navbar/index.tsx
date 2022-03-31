import React from 'react';
import Link from "next/link"
import { Stack, Image } from '@chakra-ui/react';


const Navbar: React.FC = ()=> {

  return(
    <Stack justifyContent="space-between" direction="row" alignItems="center">
      <Image height={50} width={100} src="https://via.placeholder.com/100x50" alt='api logo' />
      <Stack direction="row" spacing={5}>
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