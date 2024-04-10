import React from 'react'
import { InputGroup, InputLeftElement, Button, Stack, Input, Text, Box, Flex, getToastPlacement} from '@chakra-ui/react'
import TrackingList from '../components/TrackingList'
import { useState } from 'react'

const Tracker = () => {
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    
    const handleAddAmount = () => {

        setTotal(Number(total)+Number(amount))
    }

  return (
      <>
      <Flex alignItems={"center"} justifyContent={"center"} p={4}>
      <Box h='140px' >
      <Text as='b' fontSize='4xl' >$ {total} </Text>
   
    <Text as='sub'>Total</Text>
      </Box>
      </Flex>
      <TrackingList/>
   
   <Stack spacing={4}>
    

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
    >
      $
    </InputLeftElement>
    <Input placeholder='Enter amount' value={amount} onChange={e => setAmount(e.target.value)} />
   <Button onClick={handleAddAmount}>Add</Button>
  </InputGroup>
</Stack>

    </>
  )
}

export default Tracker
