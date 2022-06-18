import { useRef, /* useState */ } from "react"

export function  CarDetails({initialData}){

  /*   const [data, setData] = useState() */

    const formRef = useRef ()

    function handleFormSubmit(event){
        event.preventDefault()

        const model = event.target.elements.model.value
        const year = event.target.elements.year.value
        const color = event.target.elements.color.value

        /* setData((c)=> <p>{c} <strong>Model:</strong> {model} <strong>Year:</strong> {year} <strong>Color:</strong> {color}</p> ) */
        formRef.current.reset()

        console.log({model, year, color}) 
    }                                               

    function handleFormAutofill(){
        formRef.current.elements.model.value = "Volvo V60"
        formRef.current.elements.year.value = "2019"
        formRef.current.elements.color.value = "Black"
    }
    
    return (
            <div>
                <h3>Car Details</h3>

            {/* {data} */}

                <form ref={formRef} onSubmit={handleFormSubmit}>
                    <input name="model" type="text" defaultValue={initialData.model}/>
                    <input name="year" type="number" defaultValue={initialData.year}/>
                    <input name="color" type="text" defaultValue={initialData.color}/>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                    <button type="button" onClick={handleFormAutofill}>Autofill</button>
                </form>
            </div>
        )
}
/* Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to
 insert details about a car, such as the model, the year and the color. Allow the form to 
 receive a initialData prop that contains the
 default values of each input, and reset the form every time the initialData value changes. */


    