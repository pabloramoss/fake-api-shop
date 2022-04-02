import { Code, Heading, Stack, Text } from '@chakra-ui/react'
import RouteCode from './RouteCode'
import content from "../content"
import { homeSample } from '../content'

const Content: React.FC = () => {
  return (
    <Stack p={10} overflowY="auto" maxH="94vh">
      <Stack>
        <Heading color="brand.50" id="introduction">Introduction</Heading>
        <Text color="brand.50">Simple store API can be used in shopping projects that needs products in JSON format. This API can provide an array of 30 products or an object with a single product. You can use examples below to check how it works.</Text>
      </Stack>
      <Stack>
        <Heading color="brand.50" id='sampleCode'>Sample code</Heading>
          <pre>
            <Code w="100%" rounded={5} overflowX="auto" >
              {homeSample}
            </Code>
          </pre>
      </Stack>
      <Stack>
        <Heading color="brand.50">Base URL</Heading>
        <Code p={5} fontSize="xl" fontWeight={600} textAlign="center" rounded={5}>http://simpleapistore.vercel.app</Code>
      </Stack>
      <Stack>
        <Heading color="brand.50">Products</Heading>
        <Text color="brand.50">{`We currently have 30 permanent products in our database ("id":"1", "id":"2" ... "id":"30").`}</Text>
        <Stack spacing={10}>
          {content.map( item => <RouteCode key={item.title} title={item.title} method={item.method} url={item.url} output={item.output} />)}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Content
