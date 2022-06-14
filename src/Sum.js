export function Sum ({numbers=[1, 2, 3, 4, 5, 6]}){
    return <h1>{numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</h1>
}

//What happens if the numbers prop of the Sum component is not set?
//Non viene renderizzato nulla