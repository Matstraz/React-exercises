export function Sum ({numbers}){
    return <h1>{numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</h1>
}