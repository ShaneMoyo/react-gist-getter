import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'
import GetGists from './GetGists'; 
import GistList from './GistList'; 
import GistItem from './GistItem'; 
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
                <Switch>
                    <Route path="/gist/:id" component={GistItem}/>
                    <Route path="/">
                        <GistList gists={this.state.gists}/>
                    </Route>
                    
                </Switch>
            </section>
        );
    }
}