import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props){
    const items = props.items;
    return(
        <Card className='expenses'>
                <ExpenseItem 
            items = {items[0]}></ExpenseItem>
                <ExpenseItem 
            items = {items[1]}></ExpenseItem>
                <ExpenseItem 
            items = {items[2]}></ExpenseItem>
                <ExpenseItem 
            items = {items[3]}></ExpenseItem>
        </Card>
    );
      
}


export default Expenses;