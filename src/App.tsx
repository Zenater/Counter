import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Set from "./Set";
import {Count} from "./Count";
import Inputs from "./Inputs";

function App() {
    let [count, setCount] = useState(0);
    let [startValue, setStartValue] = useState(0)
    let [maxCount, setMaxCount] = useState(0)
    let [error, setError] = useState('')



    const item =(value:number)=> {
        setStartValue(value)
        if (value) {
            setError("Введите число")
            if (value < 0 ||value===maxCount ||(value === startValue && value != 0)) {
                setError("Ошибка")
            }
        }
    }
    const itemMax =(value:number)=> {
        setMaxCount(value)
        if (value) {
            setError("Введите число")
            if (value < 0 ||value===maxCount || (value === startValue && value != 0)) {
                setError("Ошибка")
            }
        }
    }

    const increment = () => {
        count++
        setCount(count)
    };

    const reset = () => {
        if (count === maxCount) {
            setCount(startValue)
        }
    };
    const forSet = () => {
        if (startValue > 0) {
            setCount(startValue)
            setError("")
        }
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        let start = +e.currentTarget.value;
        item(start)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let max = +e.currentTarget.value;
        itemMax(max)
    }

    let disButton = false

    if (startValue < 0 || maxCount < 0 || count === maxCount ||
        startValue === maxCount || startValue > maxCount) {
        disButton = true
    }

    return (
        <div className="App">
            <div>
                <Inputs onChange={onChangeStart}
                        startValue={startValue}
                        maxCount={maxCount}
                        onChangeMax={onChangeMax}
                        error={error}
                        item={item}
                        itemMax={itemMax}
                />
                <Set disable={disButton} forSet={forSet}/>
                <Count error={error} setError={setError} count={count}
                       startValue={startValue}
                       setCount={setCount}
                       maxCount={maxCount}/>
            </div>

            <button disabled={disButton} onClick={increment}>inc</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default App;

