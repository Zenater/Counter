import React, {ChangeEvent} from 'react';
import s from './Inputs.module.css'
import a from "./root.module.css";

export type InputType = {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    startValue?: number
    maxValue?: number
    onChangeMax?: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string
    item?: (value: number) => void
    itemMax?: (value: number) => void
}
const Inputs = (props: InputType) => {

    const inputClass = !props.error ? "" : s.red

    return (
         <div className={a.inputs}>
            <div>
                <span className={a.span}>start value:</span>
                <input type="number"
                       value={props.startValue}
                       onChange={props.onChange}
                       // className={inputClass}
                       className={a.input}
                /></div>
            <div>
                <span className={a.span}>max value:</span>
                <input type="number"
                       value={props.maxValue}
                       onChange={props.onChangeMax}
                       className={a.input}

                    // className={inputClass}
                />
            </div>
        </div>
    );
};

export default Inputs;