import { composeWithDevTools } from "@redux-devtools/extension";  //Installato redux-devtools per monitorare più facilmente ,attraverso il browser, i nuovi state
import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";
import { todoList } from "./TodoState";

const rootReducer = combineReducers({ //Questa funzione combina i reducers in uno solo,
    counter: counterReducer,          // counter e list saranno i domini dello store
    list: todoList.reducer})

export const store = createStore(rootReducer, composeWithDevTools())