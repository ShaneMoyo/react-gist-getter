import React, { Component } from 'react';

export default class GetGists extends Component { 
    constructor() { 
        super(); 
        this.state = { 
            username: ''
        }
    }

    handleChange = username => { 
        this.setState({ username });
    }
    validateUsername = username => { 
        const reg = /^[0-9a-zA-Z]+$/i; 
        if(reg.test(username)) {
            return true; 
        } else { 
            return false; 
        }
    }
    handleSubmit = event => { 
        event.preventDefault(); 
        this.setState({ error: "" });
        const { username } = this.state; 
        console.log('submitting: ', username ); 
        if(this.validateUsername(username)) {
            this.setState({ username: "" });
        } else { 
            this.setState({ error: "username must only include letters and numbers" });
            return false; 
        }
        
    }

    render() { 
        const { username, error } = this.state
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <fieldset>
                    <label>Search Gists</label>
                    <input 
                        type="text"
                        placeholder="username"
                        onChange={({ target: { value }}) => this.handleChange(value)}
                        value={username}/>
                    { error ? <p style={{ color: "red" }}>{error}</p> : null}
                    <button type="submit">Search</button> 
                </fieldset>
            </form>
        ); 
    }
}