import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import React, {useState } from 'react';

function ExpenseItem(props) {
    
    const [title,setTitle] = useState(props.items.title);
    const clickHandler = () => {
        setTitle('updated!!!')
        console.log('clicked!!')
    };

    return( 
    <Card className='expense-item'>
       <ExpenseDate date={props.items.date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.items.amount}</div>
        </div>
        <button onClick={ clickHandler }>Change title</button>
    </Card>
    );
}

export default ExpenseItem;

