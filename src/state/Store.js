import { createStore } from "redux";
import { counterReducer } from "./CounterState";
/* import { counterWithToolkit } from "./CounterStateUsingToolkit"; */

export const store = createStore(counterReducer) //Create store, passandogli il reducer, ritornerà lo STORE.
/* export const store = createStore(counterWithToolkit.reducer) */