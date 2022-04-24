import React from 'react';
import a from './../root.module.css'

type countPropsType = {
    errorSetting: boolean
    value:number
}


export const CountRedux= (props: countPropsType) => {

    return (
  <div className={a.count}>
      {/*{props.errorSetting ? props.errorSetting: props.value}*/}
      {props.errorSetting ? <div>MAX and MIN should not be equal</div> : props.value}

      {/*{props.errorSetting3 ? props.errorSetting3: props.value}*/}
  </div>
    );
};

// {error && <div className={error ? s.someClass: ''}>warning</div>}
