import React, { Component } from 'react'; 


export default class GistList extends Component { 
    render() { 
        const { gists } = this.props; 
        console.log('gists from gistlist: ', gists); 
        const gistList = gists.map(gist => { 
            return <li key={gist.id}>{gist.id}</li>
        })
        return (
            <ul>
                {gistList}
            </ul> 
        )
    }
}