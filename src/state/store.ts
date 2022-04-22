import {combineReducers, createStore} from 'redux';
import {countReducer} from "./countReducer";

// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
count: countReducer
})


// export const store = createStore(rootReducer, loadState(),)
export const store = createStore(rootReducer)

/*store.subscribe(() => {
    saveState({
        count: store.getState().count
    })
})*/

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppRootStore = typeof store

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;