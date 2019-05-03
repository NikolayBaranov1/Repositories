import React, { Component } from 'react';

import Form from './Form';
import Repos from './Repos';

class Home extends Component {
    state = {
        data: []    
      }
    
      getRepos = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        
        const api_call = await fetch(`https://api.github.com/users/${recipeName}/repos`);
        const data = await api_call.json();
        this.setState({ data });
        console.log(this.state.data);
      }
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Search</h1>
                </header>
                <Form getRepos={this.getRepos}/>
                <Repos repos={this.state.data}/>
            </div>
        )
    }
} 

export default Home;