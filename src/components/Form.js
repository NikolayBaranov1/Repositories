import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getRepos}>
        <input type="text" name="recipeName" className="input_search"/>
        <button>Search</button>
    </form>
);

export default Form;