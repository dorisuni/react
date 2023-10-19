import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2020');

    let filterInfoText = '2019,2021,2022 & 2023'

    if (filteredYear === '2019'){
        filterInfoText=('2020,2021,2022 & 2023');
        }else if((filteredYear === '2020')){
            filterInfoText=('2019,2021,2022 & 2023');
        }else if((filteredYear === '2021')){
            filterInfoText=('2019,2020,2022 & 2023');
        }else if((filteredYear === '2022')){
            filterInfoText=('2019,2020,2021 & 2023');
        }else{
            filterInfoText=('2019,2020,2021 & 2022')
        }

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
        
    };
    const items = props.items;
    return(
        <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
            <p className='expenses-filter'>Data for years { filterInfoText }  is hidden.</p>
                <ExpenseItem 
            items = {items[0]}></ExpenseItem>
                <ExpenseItem 
            items = {items[1]}></ExpenseItem>
                <ExpenseItem 
            items = {items[2]}></ExpenseItem>
                <ExpenseItem 
            items = {items[3]}></ExpenseItem>
        </Card>
        </div>

    );
      
}


export default Expenses;