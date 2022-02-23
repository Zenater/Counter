import React, {Dispatch, SetStateAction} from 'react';


type countPropsType = {
    setError: Dispatch<SetStateAction<string>>
    error: string
    count:number
    startValue: number
    setCount: (startValue:number)=>void
    forSet:()=>void

}


export const Count= (props: countPropsType) => {



    if (props.startValue < 0) {
        props.setError('incorect')
    } else if (props.startValue > 0) {
        props.setError('enter values and press set')

    }



    return (
   <>
       {props.error ? props.error:props.startValue}
   </>
    );
};
