import React from 'react';
import { Stack, Text, Link } from '@chakra-ui/react';


const Footer: React.FC = ()=> {

  return(
    <Stack 
      justifyContent="center" 
      direction="row" 
      alignItems="center" 
      className="card" 
      height="6vh"
    >
      <Stack spacing={0}>
        <Text color="gray.400" fontSize="sm">Made with ❤ by</Text>
        <Link _hover={{textDecoration: "none"}} href="https://twitter.com/rpablo_dev" isExternal>
          <Text textAlign="center" color="white" fontSize="sm">Pablo Ramos</Text>
        </Link>
      </Stack>
    </Stack>
  )
}
export default Footer