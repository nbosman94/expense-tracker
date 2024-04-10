import React from 'react'
import { VStack, StackDivider, Box } from '@chakra-ui/react'


const TrackingList = () => {
  return (
    <VStack
  divider={<StackDivider borderColor='whiteAlpha.300' />}
  spacing={4}
  align='stretch'
>
  <Box h='40px' bg='whiteAlpha.200' pl={4} >
    1
  </Box>
  <Box h='40px' bg='whiteAlpha.200'pl={4}>
    2
  </Box>
  <Box h='40px' bg='whiteAlpha.200'pl={4}>
    3
  </Box>
</VStack>
  )
}

export default TrackingList
