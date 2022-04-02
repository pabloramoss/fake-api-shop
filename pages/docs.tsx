import React from 'react';
import Aside from "../src/Aside/index"
import Navbar from "../src/Navbar/index"
import Content from "../src/Content/index"
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';

const docs: React.FC = ()=> {

  return(
    <Box bg="brand.400" overflowX="auto">
      <Container maxW="container.lg" p={0}>
        <Grid    
          gridTemplateAreas = {{
            base: `
            "navbar navbar"
            "content content"`, 
            md: `
            "navbar navbar"
            "aside content"` 
            }}
            templateColumns={{base: "1fr", md:'25% 1fr'}}
        >
          <GridItem gridArea="navbar">
            <Navbar />
          </GridItem>
          <GridItem gridArea="aside">
            <Aside />
          </GridItem>
          <GridItem gridArea="content">
            <Content />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
export default docs