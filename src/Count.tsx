import React, {Dispatch, SetStateAction} from 'react';
import s from './Counter.module.css'

type countPropsType = {
    setError: Dispatch<SetStateAction<string>>
    error: string
    count:number
    startValue: number
    setCount: (startValue:number)=>void
    maxCount: number
}


export const Count= (props: countPropsType) => {

    return (
   <>
       {props.error ? props.error: props.count}
   </>
    );
};

// {error && <div className={error ? s.someClass: ''}>warning</div>}
