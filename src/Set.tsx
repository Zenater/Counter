import React from 'react';

type SetType = {
    disable: boolean
    forSet: ()=>void
}

const Set = (props: SetType) => {


    return (
        <div>
          <button disabled={props.disable} onClick={props.forSet}>
              set</button>
        </div>
    )
};

export default Set;
