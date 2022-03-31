import { Code, Heading, Stack, Text } from '@chakra-ui/react'
import RouteCode from './RouteCode'
import content from "../content"

const Content: React.FC = () => {
  return (
    <Stack ps={10} pe={10} overflowY="scroll" maxH="90vh">
      <Stack>
        <Heading color="teal">Base URL</Heading>
        <Code p={5} fontSize="xl" fontWeight={600} textAlign="center" rounded={5}>http://simpleapistore.vercel.app</Code>
      </Stack>
      <Stack>
        <Heading color="teal">Products</Heading>
        <Text>{`We currently have 30 permanent products in our database ("id":"1", "id":"2" ... "id":"30").`}</Text>
        <Stack spacing={10}>
          {content.map( item => <RouteCode key={item.title} title={item.title} method={item.method} url={item.url} output={item.output} />)}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Content
