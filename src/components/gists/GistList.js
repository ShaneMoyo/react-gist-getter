import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 


export default class GistList extends Component { 
    render() { 
        const { gists } = this.props; 
        console.log('gists from gistlist: ', gists); 
        const gistList = gists.map(gist => { 
            return (
                <li key={gist.id}>
                    <Link to={`/gist/${gist.id}`}>
                        {gist.id}
                    </Link>   
                </li>
            )
        })
        return (
            <ul>
                {gistList}
            </ul> 
        )
    }
}