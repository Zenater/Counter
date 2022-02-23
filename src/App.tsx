import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Set from "./Set";
import {Count} from "./Count";

function App() {
    let [count, setCount] = useState(0);
    let [startValue, setStartValue] = useState(0)
    let [maxCount, setMaxCount] = useState(0)

    let [disButton, setDisButton] = useState<boolean>(false)
    let [error, setError] = useState('')


    const increment = () => {
        count++
        setCount(count)
    };

    const reset = () => {
        if (count === maxCount) {
            setCount(startValue)
        }
    };

    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        let start = +e.currentTarget.value;
        setStartValue(start)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let max = +e.currentTarget.value;
        setMaxCount(max)
    }

    const forSet = () => {
        if (startValue > 0) {
            setCount(startValue)
        }
    }

    if (startValue < 0 || maxCount < 0) {
        disButton = (true)
    }

    return (
        <div className="App">

            <Count error={error} setError={setError} count={count}
                   startValue={startValue} setCount={setCount} forSet={forSet}
            />
            <button disabled={count === maxCount} onClick={increment}>inc</button>
            <button onClick={reset}>reset</button>
            <span>start value</span>
            <input type="number" value={startValue} onChange={onChangeStart}/>
            <span>max value</span>
            <input type="number" value={maxCount} onChange={onChangeMax}/>
            <Set disable={disButton} forSet={forSet}/>
        </div>
    );
}

export default App;

//
//
// const addUser = () => {
//     if (name !== '') {
//         addUserCallback(name)
//         alert(`Hello ${name} !`)
//         setName('')
//     } else {
//         alert('warning!')
//         setError(true)
//     }
// }