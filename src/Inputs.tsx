import React, {ChangeEvent} from 'react';
import s from './Inputs.module.css'

export type InputType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: number
    maxCount:number
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    item:(value:number)=>void
    itemMax:(value:number)=>void
}
const Inputs = (props: InputType) => {

    const inputClass =!props.error ? "" : s.red

    return (
        <div>
            <span>start value:</span>
            <input type="number"
                   value={props.startValue}
                   onChange={props.onChange}
                   className={inputClass}
            />
            <span>max value:</span>
            <input type="number"
                   value={props.maxCount}
                   onChange={props.onChangeMax}
                   className={inputClass}
            />
        </div>
    );
};

export default Inputs;