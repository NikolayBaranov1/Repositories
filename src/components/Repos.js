import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Repos = props => (
    <div className="row">            
        { props.repos.map((repo) => {
            return (
            <div key={repo.id} className="col-lg-4 m-auto list-group-item">
                <h6 className="h6_id">id: {repo.id}</h6>
                <a href={repo.html_url} className="repos_link">{repo.name}</a>                    
            </div>
            );
        }) }            
    </div>
    
);



  export default Repos;