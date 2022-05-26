import React, {useState} from 'react';

import './App.css';
import {Input} from "./Input";
import {Button} from "./Button";
import {FilterButton} from "./FilterButton";

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter]=useState('All')

    let currentFilter = money

    if (filter === 'RUBLS' ) {
        currentFilter= money.filter((filterMoney)=>filterMoney.banknots==='RUBLS')
    }

    if (filter === 'Dollars' ) {
        currentFilter= money.filter((filterMoney)=>filterMoney.banknots==='Dollars')
    }

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        setMoney([{banknots: title, value: 100, number: ' a1234567890'},...money])
        setTitle('')
    }

    return (
        <div className="App">
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} addMessage={addMessage} title={title}/>
            <div>
                {currentFilter.map((el) => {
                    return (
                        <li>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </div>
            <FilterButton setFilter={setFilter} />
        </div>
    );
}

export default App;
