import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Set from "./Set";
import {Count} from "./Count";
import Inputs from "./Inputs";
import a from './root.module.css'

function App() {
    let [count, setCount] = useState(0);
    let [startValue, setStartValue] = useState(0)
    let [maxCount, setMaxCount] = useState(0)
    let [error, setError] = useState('')


    const item = (value: number) => {
        setStartValue(value)
        if (value) {
            setError("Введите число")
            if (value < 0 || value === maxCount || (value === startValue && value != 0)) {
                setError("Ошибка")
            }
        }
    }

    const itemMax = (value: number) => {
        setMaxCount(value)
        if (value) {
            setError("Введите число")
            if (value < 0 || value === maxCount || (value === startValue && value != 0)) {
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
        localStorage.setItem("counterValueStart", JSON.stringify(startValue));
        localStorage.setItem("counterValueMax", JSON.stringify(maxCount));
    }

    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        let start = +e.currentTarget.value;
        item(start)
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let max = +e.currentTarget.value;
        itemMax(max)
    }

    useEffect(() => {
        let max = localStorage.getItem("counterValueMax")
        let min = localStorage.getItem("counterValueStart")
        if (max && min) {
            setMaxCount(+max)
            setStartValue(+min)
        }
    }, [])

    let disButton = false

    if (startValue < 0 || maxCount < 0 || count === maxCount ||
        startValue === maxCount || startValue > maxCount) {
        disButton = true
    }

    return (
        <div className={a.block}>
            <div className={a.root}>
                <div className={a.firstBlock}>
                   <Inputs
                        onChange={onChangeStart}
                        startValue={startValue}
                        onChangeMax={onChangeMax}
                        error={error}
                        item={item}
                        itemMax={itemMax} />
                    <div className={a.set}>
                        <Set disable={disButton} forSet={forSet}/>
                    </div>
                </div>
                <div className={a.secondBlock}>
                    <Count error={error} setError={setError} count={count}
                           startValue={startValue}
                           setCount={setCount}
                           maxCount={maxCount}/>
                    <div className={a.set}>
                        <button className={a.button} disabled={disButton} onClick={increment}>inc</button>
                        <button className={a.button} onClick={reset}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

