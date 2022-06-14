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
                {this.props.render(this.state.items)}
               
{/*                     {this.state.items.map((name, index) => (<li key={name + index}>{name}<button onClick={this.handleRemoveItem}>Remove Item</button> </li>))}
             */}
            </div>
        )
    }
}