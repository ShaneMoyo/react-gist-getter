import React, { Component } from 'react'; 
import GetGists from './GetGists'; 

export default class Gists extends Component { 
    render() { 
        return (
            <section>
                <h1>Gist Getter</h1> 
                <GetGists />
            </section>
        );
    }
}