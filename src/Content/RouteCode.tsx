import { 
  Stack, 
  Heading, 
  Text, 
  Box, 
  Code, 
  Accordion, 
  AccordionButton, 
  AccordionIcon, 
  AccordionItem, 
  AccordionPanel, 
  Divider 
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  method: string;
  url: string;
  output: any;
}

const RouteCode: React.FC<Props> = ({ title, method, url, output })=> {
  return(
    <Stack spacing={5}>
      <Heading 
        color="brand.50" 
        fontSize="3xl" 
        opacity={0.6} 
        id={encodeURIComponent(title)}
      >
        {title}
      </Heading>
      <Stack 
        direction="row" 
        border="1px solid gray" 
        width={200} 
        alignItems="center"
      >
        <Text px={2} fontSize="xl" bg="brand.200" color="white">{method.toUpperCase()}</Text>
        <Text color="brand.50" fontWeight={500}>{url}</Text>
      </Stack>
      <Code>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box>
                  Output
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel overflowX="scroll" pb={4}>
              <pre>{output}</pre>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Code>
      <Divider />
    </Stack>
  )
}
export default RouteCode