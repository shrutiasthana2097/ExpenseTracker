//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES=[
  {id:'e1',title:'Car Insurance', amount:239,date:new Date(2020,7,6) },
  {id:'e2',title:'Health Insurance', amount:639,date:new Date(2020,9,6) },
  {id:'e3',title:'Toilet Paper', amount:5.67,date:new Date(2020,7,6) },
  {id:'e4',title:'Electricity Bill', amount:89.67,date:new Date(2020,5,8) },
];

const App = () => {
  const[expenses, setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler=(expense)=>{
    console.log(expense);
    setExpenses(prevExpenses =>{
      console.log(prevExpenses);
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
