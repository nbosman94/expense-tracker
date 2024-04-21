import React from 'react'
import { Flex, Collapse, Box, Card, CardHeader, Heading, CardBody, Text, CardFooter,Button, useDisclosure } from '@chakra-ui/react'

const SpendingCard = ({title, amount}) => {

  const {isOpen, onToggle} = useDisclosure()
  return (
    <>
    <Card p={2} m={4}>
                    <CardHeader>
                    <Heading size='md'> {title}</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text>$ {amount} </Text>
                    </CardBody>
                    <CardFooter>
                        {/* This will click to a graph of spending in each category */}
                    <Button onClick={onToggle}>View trends</Button> 

                    </CardFooter>

                    
    </Card>
    
    <Collapse in={isOpen} animateOpacity>
    <Flex flexDir={"column"}>
      <Box
        p={"40px"}
        color={"whiteSmoke.300"}
        mt={4}
        bg={"white"}
        rounded={"md"}
        shadow={"md"}
      >


      </Box>
      </Flex>
    </Collapse>
    
    </>
  )
}

export default SpendingCard
