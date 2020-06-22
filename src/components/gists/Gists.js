import React, { Component } from 'react'; 
import GetGists from './GetGists'; 
import GistList from './GistList'; 
import * as github from '../../services/github'; 

export default class Gists extends Component { 
    constructor() { 
        super(); 
        this.state = {
            gists: []
        }
    }

    handleGetGists = async username => { 
        this.setState({ loading: true, error: false }); 
        try { 
           const gists = await github.getGistsByUsername(username); 
           console.log('gists: ', gists);
           this.setState({ 
                loading: false,
                gists 
            }); 
        } catch(error) { 
            this.setState({ loading: false, error: true });
        }
    }
    render() { 
        return (
            <section>
                <h1>Gist Getter</h1> 
                <GetGists search={this.handleGetGists}/>
                <GistList gists={this.state.gists}/> 
            </section>
        );
    }
}