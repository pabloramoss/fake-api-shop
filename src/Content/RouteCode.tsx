import { Stack, Heading, Text, Box, Code, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Divider } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  method: string;
  url: string;
  output: string;
}

const RouteCode: React.FC<Props> = ({ title, method, url, output })=> {
  return(
    <Stack spacing={5}>
      <Heading fontSize="3xl" opacity={0.6}>{title}</Heading>
      <Stack direction="row" border="1px solid teal" width={200} alignItems="center">
        <Text px={2} fontSize="xl" bg="teal" color="white">{method.toUpperCase()}</Text>
        <Text fontWeight={500}>{url}</Text>
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
            <AccordionPanel pb={4}>{output}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Code>
      <Divider />
    </Stack>
  )
}
export default RouteCode