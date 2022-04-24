export type initialStateType = typeof initialState

const initialState = {
    startValue: 0,
    maxValue: 0,
    value: 0,
    minValue: 0,
    settingMinValue: 0,
    settingMaxValue: 0,
    errorSetting:false,

}

export const countReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1
            };
        case 'RESET':
            return {
                ...state,
                value: state.minValue,
            }
        case 'SET':
            return {
                ...state,
                value: state.settingMinValue,
                minValue: state.settingMinValue,
                maxValue: state.settingMaxValue,
            };
        case 'SET_MAX':
            return {...state,
                settingMaxValue: action.max
            };
        case 'SET_MIN':
            return {...state,
                settingMinValue: action.min,
            };
        case "ERROR":
            return {
                ...state,
                errorSetting: action.error,
            }

        default:
            return state
    }
}

export const incrementAC = () => ({type: 'INCREMENT'} as const)
export const resetAC = () => ({type: 'RESET'} as const)
export const setAC = () => ({type: 'SET'} as const);
export const setMaxAC = (max: number) => ({type: 'SET_MAX', max} as const);
export const setMinAC = (min: number) => ({type: 'SET_MIN', min} as const);
export const errorAC = (error:boolean) => ({type: 'ERROR',error} as const);
// export const errorTextAC = (text:string) => ({type: 'ERROR3',text} as const);

type ActionsType = ReturnType<typeof incrementAC> |
    ReturnType<typeof resetAC> |ReturnType<typeof setMinAC> |
    ReturnType<typeof setAC> |   ReturnType<typeof errorAC> |
    ReturnType<typeof setMaxAC>
