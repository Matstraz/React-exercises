import React from "react";

export class TodoList extends React.Component{

    state = {
        name: '',
        items: ['Nino', 'Mario', 'Michela', 'Fabio']
    }

    handleInputChange = (event) =>{
        this.setState({name: event.target.value})
    }

    handleAddValue = () =>{
        this.setState((state) => ({items: state.items.concat(this.state.name)}))
        this.setState({name: ''})
    }

    handleResetArray = () =>{
        this.setState({items: []})
    }

    handleRemoveItem = (event) =>{
         const toRemove = event.target.previousSibling.textContent
         this.setState((state) => ({items: state.items.filter((item) => item !== toRemove)}))
         console.log(event.target)
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.items.map((name, index) => (<li key={name + index}>{name}<button onClick={this.handleRemoveItem}>Remove Item</button> </li>))}
                </ul>
                <input name='name' type='text' value={this.state.name} onChange={this.handleInputChange}/>
                <button onClick={this.handleAddValue}>Add Yuor Name</button>
                <button onClick={this.handleResetArray}>Reset</button>
            </div>
        )
    }

/*     state = {                                            //Metodo alternativo utilizzando un uncontrolled component
        items: ['Nino', 'Mario', 'Michela', 'Fabio']
    }



    handleAddValue = (event) =>{
        event.preventDefault()
        this.setState((state) => ({items: state.items.concat(event.target.elements.name.value)}))
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleAddValue}>
                <ul>
                    {this.state.items.map((name, index) => (<li key={name + index}>{name}</li>))}
                </ul>
                <input name='name' type='text' />
                <button>Add Yuor Name</button>
                </form>
            </div>
        )
    } */
}