import React, {Dispatch, SetStateAction} from 'react';
import a from './root.module.css'

type countPropsType = {
    setError?: Dispatch<SetStateAction<string>>
    error?: string
    value?:number
    startValue?: number
    setCount?: (startValue:number)=>void
    maxValue?: number
}


export const Count= (props: countPropsType) => {

    return (
  <div className={a.count}>
      {props.error ? props.error: props.value}
  </div>
    );
};

// {error && <div className={error ? s.someClass: ''}>warning</div>}
