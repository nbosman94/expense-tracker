import React from 'react'
import { Box, List, ListItem } from '@chakra-ui/react'

const ExpenseList = ({expenses}) => {
  return (
    <div>

<Box bg='' w='100%' p={4} color='black'>
    

    <List>
      {expenses.map(expense => (
          <ListItem key={expense.id}>{expense.expense}{' '}{expense.category}</ListItem>
      ))}
      </List>

      
      </Box>
    </div>
  )
}

export default ExpenseList
