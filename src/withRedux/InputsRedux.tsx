import React, {ChangeEvent} from 'react';
import a from './../root.module.css'

export type InputType = {
    settingMaxValue: number
    settingMinValue: number
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
}
const InputsRedux = (props: InputType) => {
    return (
         <div className={a.inputs}>
            <div>
                <span className={a.span}>start value:</span>
                <input type="number"
                       className={a.input}
                       onChange={props.onChangeMin}
                       value={props.settingMinValue}
                       max={props.settingMaxValue}
                /></div>
            <div>
                <span className={a.span}>max value:</span>
                <input type="number"
                       value={props.settingMaxValue}
                       onChange={props.onChangeMax}
                       className={a.input}
                       min={props.settingMinValue}
                />
            </div>
        </div>
    );
};

export default InputsRedux;