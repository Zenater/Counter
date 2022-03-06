import React, {Dispatch, SetStateAction} from 'react';
import s from './Counter.module.css'

type countPropsType = {
    setError: Dispatch<SetStateAction<string>>
    error: string
    count:number
    startValue: number
    setCount: (startValue:number)=>void
    // forSet:()=>void
    maxCount: number
}


export const Count= (props: countPropsType) => {



    if (props.startValue < 0 ||
        props.startValue=== props.maxCount ||
        props.startValue > props.maxCount) {
        props.setError('incorect value')
        props.setCount(+'')
    }
    else if (props.startValue > 0 || props.maxCount>0 ) {
       props.setError('enter values and press set')
    }

    return (
   <>
       {props.count || <div className={props.error ? s.red : '' }>{props.error} </div>}
       {/*{props.error ? props.error: props.startValue}*/}
   </>
    );
};
// const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`

// {error && <div className={error ? s.someClass: ''}>warning</div>}
