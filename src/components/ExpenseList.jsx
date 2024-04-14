import React from 'react'
import { Box, List, ListItem, Button, Flex } from '@chakra-ui/react'
import { useExpenseStore } from '../store/expenseStore';
import { useTotalStore } from '../store/totalsStore';

const ExpenseList = () => {


  const {expenseList, deleteExpense} = useExpenseStore((state)=>({
    expenseList: state.expenseList,
    deleteExpense: state.deleteExpense,
  }));

  const { decreaseTotal} = useTotalStore((state) => ({

    decreaseTotal: state.decreaseTotal
  }))

  const handleDeleteExpense = (expenseId, amount) => {
    deleteExpense(expenseId);
    decreaseTotal(amount);

  }


  return (
    <Flex>
    <Box  w='100%' p={4} >
    <List>
      {expenseList.map(expense => (
          <ListItem key={expense.id}>{expense.amount}{' '}{expense.category}   
          <Button bg={"red.300"} ml={5} size={"sm"} onClick={() => handleDeleteExpense(expense.id, expense.amount)}>Delete</Button>
          </ListItem>   
      ))}
      </List>   
      </Box>
    </Flex>
  )
}

export default ExpenseList
