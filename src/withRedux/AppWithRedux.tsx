import React, {ChangeEvent} from 'react';
import '../App.css';
import a from '../root.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {errorAC, incrementAC, resetAC, setAC, setMaxAC, setMinAC} from "../state/countReducer";
import InputsRedux from "./InputsRedux";
import {CountRedux} from "./CountRedux";

export function AppWithRedux() {

    const value = useSelector<AppRootStateType, number>(state => state.count.value)
    const settingMinValue = useSelector<AppRootStateType, number>(state => state.count.settingMinValue)
    const settingMaxValue = useSelector<AppRootStateType, number>(state => state.count.settingMaxValue)
    const errorSetting = useSelector<AppRootStateType, boolean>(state => state.count.errorSetting)

    const dispatch = useDispatch()

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinAC(+e.currentTarget.value))
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxAC(+e.currentTarget.value));
    }

    const forSet = () => {
        dispatch(setAC())
        dispatch(errorAC(false))
        if (settingMinValue < 0 || value < 0 || settingMinValue > settingMaxValue
            || value === settingMaxValue ||
            (value === settingMaxValue && value != 0)) {
            dispatch(errorAC(true))
        }

    }

    const increment = () => {
        dispatch(incrementAC())
    };

    const reset = () => {
        dispatch(resetAC())
    };


    let disButton = false

    if (value < 0 || settingMaxValue < 0 ||
        value === settingMaxValue || value > settingMaxValue) {
        disButton = true
    }

    return (
        <div className={a.block}>
            <div className={a.root}>
                <div className={a.firstBlock}>
                    <InputsRedux
                        onChangeMin={onChangeMin}
                        onChangeMax={onChangeMax}
                        settingMaxValue={settingMaxValue}
                        settingMinValue={settingMinValue}
                    />
                    <div className={a.set}>
                        <button disabled={disButton} className={a.button} onClick={forSet}>set</button>
                    </div>
                </div>
                <div className={a.secondBlock}>
                    <CountRedux value={value}
                                errorSetting={errorSetting}
                    />
                    <div className={a.set}>
                        <button disabled={disButton} className={a.button} onClick={increment}>inc</button>
                        <button className={a.button} onClick={reset}>reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*const itemMax = (value: number) => {
    dispatch(setAC())
    if (value) {
        dispatch(errorTextAC("Введите число"))
        if (value < 0 || value === settingMaxValue || settingMinValue < 0 || (value === settingMaxValue && value != 0)) {
            dispatch(errorTextAC('error'))
        }
    }
}*/

