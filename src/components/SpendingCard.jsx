import React from 'react'
import { Card, CardHeader, Heading, CardBody, Text, CardFooter,Button } from '@chakra-ui/react'

const SpendingCard = ({title, amount}) => {
  return (
    <Card p={2} m={4}>
                    <CardHeader>
                    <Heading size='md'> {title}</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text>$ {amount} </Text>
                    </CardBody>
                    <CardFooter>
                        {/* This will click to a graph of spending in each category */}
                    <Button>View trends</Button> 

                    </CardFooter>
    </Card>
  )
}

export default SpendingCard
