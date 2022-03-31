import React from 'react';
import Aside from "../src/Aside/index"
import Navbar from "../src/Navbar/index"
import Content from "../src/Content/index"
import { Container, Grid, GridItem } from '@chakra-ui/react';

const docs: React.FC = ()=> {

  return(
    <Container maxW="container.lg">
      <Grid    
        gridTemplateAreas = {{
          base: `
          "navbar navbar"
          "aside content"`, 
          sm: `
          "navbar navbar"
          "aside content"` 
          }}
          templateColumns='25% 1fr'
          maxW="container.lg"
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
  )
}
export default docs