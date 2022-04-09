import React from "react";

const Results = (props) => {
    const {repos} = (props);
    console.log("Repos are: ", repos.data);

    const listRepos = 
    repos.length !== 0 ? (
        repos.data.map((item) => <li key={item.id}>
            {item.name}</li>)) 
        : 
        (<li>Please enter username for Github Repositories</li>);
   return <ul>
       <h3>Public Repos</h3>
        {listRepos}
           </ul>
}

export default Results;