import React, { Component } from 'react';
import * as github from '../../services/github';



export default class GistItem extends Component { 
    constructor() { 
        super(); 
        this.state = { 
            loading: true,
            gist: null
        }
    }
    componentDidMount() { 
        const { match: { params } } = this.props;
        console.log('useParams: ', params)
        return github.getGistById(params.id)
            .then(gist => {
                console.log('gist: ', gist)
                this.setState({
                    loading: false,
                    gist
                })
            });
    }
    render() { 
        const { gist, loading } = this.state; 
        return (
            <section>
                {loading ? 
                    <h1>Loading</h1> : 
                    <h1>GistItem {gist.id}</h1> 
                }
                
            </section>
        );
    }

}