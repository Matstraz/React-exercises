import React from "react";

export class ClickTracker extends React.Component{

    state = {
        lastClick: []
    }

    wichFirst = (event) =>{
         this.setState({lastClick: []})
         this.setState((state) => ({lastClick: state.lastClick.concat(event.target.innerHTML)}))
    }

    wichFirst2 = (event) =>{
        console.log(event.currentTarget.lastChild.alt)
   }

    
   //Modifiy the ClickTracker so that each button contains an image instead of a text. How does this affect the event handler?
   //Cliccando sull'immagine si avranno le info relativi all'elemento che ha lanciato l'evento (l'immagine stessa)
   //Bisognerà richiamare event.currentTarget per continuare a ricevere le info sul Bottone, l'elemento del DOM a cui l'event handler è effitivamente legato. 

    render(){
        return (
            <div>
                <button onClick={this.wichFirst2}><img src="https://images.all-free-download.com/images/graphicwebp/animal_antarctica_galapagos_head_lion_marine_nature_599166.webp" alt="Button 1"></img></button>
                <button onClick={this.wichFirst}>Button 2</button>
                <button onClick={this.wichFirst}>Button 3</button>
                <h1>Last pressed button: {this.state.lastClick}</h1>
            </div>
        )
    }
}