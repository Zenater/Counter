import React from 'react';
import a from './root.module.css'

type SetType = {
    disable: boolean
    forSet: ()=>void
}

const Set = (props: SetType) => {

    return (
        <div>
          <button className={a.button}
                  disabled={props.disable}
                  onClick={props.forSet}>
              set
          </button>
        </div>
    )
};

export default Set;
