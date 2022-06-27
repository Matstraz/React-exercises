const defaultState = 0

const INCREMENT = "COUNTER@INCREMENT"    //QUESTI SONO GLI ACTION TYPES (LE ACTIONS)
const DECREMENT = "COUNTER@DECREMENT"
const RESET = "COUNTER@RESET"

export function incrementCounter(by= 1){  //QUESTE SONO LE ACTION CRESTORS (delle helper functions). Il payload può essere indicato o meno.
    return{
        type: INCREMENT,
        payload: by
    }
}

export function decrementCounter(by= 1){
    return{
        type: DECREMENT,
        payload: by
    }
}

export function resetCounter(){
    return{
        type: RESET
    }
}

export function CounterReducer(state = defaultState, action){ //QUESTO E' IL REDUCER (RICEVE IL CURRENT VLAUE DELLO STATE ED UN ACTION E RITORNA UN NUOVO VALORE DELLO STATE)
    switch (action.type) {
        case INCREMENT:
            return  +1
            
        case DECREMENT:
            return defaultState -1

        case RESET:
                return defaultState
    
        default:
            return state
            break;
    }

}