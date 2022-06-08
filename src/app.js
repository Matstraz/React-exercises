import React from "react";
import { Container } from "./Container";
import { Hello } from "./hello";

export class App extends React.Component{
    render(){
        return (
            <Container>
                <Hello/>
            </Container>
        )
    }
}