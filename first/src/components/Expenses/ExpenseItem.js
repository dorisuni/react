import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

function ExpenseItem(props) {
    return( 
    <Card className='expense-item'>
       <ExpenseDate date={props.items.date} />
        <div className='expense-item__description'>
            <h2>{props.items.title}</h2>
            <div className='expense-item__price'>${props.items.amount}</div>
        </div>
    </Card>
    );
}

export default ExpenseItem;

