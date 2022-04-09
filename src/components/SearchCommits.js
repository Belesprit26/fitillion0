import React from "react";
//import axios from 'axios'

const SearchCommits = (props) => {
    const {commit} = (props);
    console.log("Matchin commits are: ", commit.data);

    const listSearchedCommit = 
    commit.length !== 0 ? (
        commit.data.items.map((item) => <li key={item.url}>
        {item.committer.login}: {item.repository.name}: {item.commit.message}</li>)) 
        : 
        (<li>Please enter a valid commit search key word</li>);

   return <ul>
       <h3>Commits by keyword</h3>
        {listSearchedCommit}
           </ul>
}

export default SearchCommits;