import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{

    const[enteredTitle,setEnteredTitle]=useState('');     // 1st Approach
    const[enteredAmount,setEnteredAmount]=useState('');   // 1st Approach
    const[enteredDate,setEnteredDate]=useState('');       // 1st Approach

    /*const[userInput,setUserInput]=useState({   //2nd and 3rd Approach
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });*/ 
    
    const titleChangeHandler=(event) => {
        event.preventDefault();
        setEnteredTitle(event.target.value);
        
            // 1st Approach
        /*setUserInput({                            2nd Approach
            ...userInput, //fetches all existing  key-value pairs and these values can be
            enteredTitle:(event.target.value) //override in this way. All other key-value
        }); */                                  // pair remains the same. 

        /*setUserInput((prevState)=>{              //3rd Approach
            return {...prevState,       //When the state depends on the previous states,
            enteredTitle:(event.target.value)}; //use this method as react ensure that
            //PrevState holds the latest values
        });*/
    };

    const amountChangeHandler=(event)=>{
        event.preventDefault();
        setEnteredAmount(event.target.value);   // 1st Approach
        /*setUserInput({                        // 2nd Approach
            ...userInput, 
            enteredAmount:(event.target.value) 
        });*/
    };
    const dateChangeHandler=(event)=>{
        event.preventDefault();
        setEnteredDate(event.target.value);      // 1st Approach
        /*setUserInput({                        // 2nd Approach
            ...userInput, 
            enteredDate:(event.target.value) 
        });*/
    };
    
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    
        return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="cancel" onClick={props.onCancel}>Cancel</button>
            <button type="submit" onClick={props.onCancel}>Add Expense</button>
        </div>
    </form>

    }

export default ExpenseForm;