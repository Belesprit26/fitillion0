import React, { useState } from "react";
import axios from 'axios'
//import { Octokit } from "@octokit/core";
import Results from "./Results";
import Commits from "./Commits";
import SearchCommits from "./SearchCommits";


//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

const SearchBar = () => {
    //const octokit = new Octokit({ auth: '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' });
    const [searchInput, setSearchInput] = useState('');
    const [searchInput2, setSearchInput2] = useState('');
    const [searchCommit, setSearchCommit] = useState('');
    const [repos, setRepos] = useState([]);
    const [commits, setCommits] = useState([]);
    const [commit, setCommit] = useState([]);
   
    

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    };
    const handleChange2 = (e) => {
        setSearchInput2(e.target.value)
    };
    const handleChange3 = (e) => {
        setSearchCommit(e.target.value)
    };

    const handleClick = async () => {
        console.log(searchInput);

        try {

            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
            setRepos(result);

        }
        catch(errors){
            console.log(errors);
        }        
    };
    const handleClick2 = async () => {
        console.log(searchInput);
        console.log(searchInput2);

        try {

            const result2 = await axios(`https://api.github.com/repos/${searchInput}/${searchInput2}/commits`);
            setCommits(result2);

        }
        catch(errors){
            console.log(errors);
        }        
    };
    const handleClick3 = async () => {
        console.log(searchInput);
        console.log(searchInput2);
        console.log(searchCommit);

        try {

            const result3 = await axios(`https://api.github.com/search/commits?q=${searchCommit} repo:${searchInput}/${searchInput2}`);
            setCommit(result3);
            

        }
        catch(errors){
            console.log(errors);
        }        
    };


   return (
       <>
   <div style={{ padding: '20px' }}>
       <input 
       type="text" 
       placeholder="enter username" 
       value={searchInput} 
       onChange={handleChange}
       />
       <button 
       onClick={handleClick}>Search
       </button>
   </div>
   <Results repos={repos}/>
   <div style={{ padding: '20px' }}>
       <input 
       type="text" 
       placeholder="enter repo name" 
       value={searchInput2} 
       onChange={handleChange2}
       />
       <button 
       onClick={handleClick2}>Search
       </button>
   </div>
   <Commits commits={commits}/>
   <div style={{ padding: '20px' }}>
       <input 
       type="text" 
       placeholder="search commit by name" 
       value={searchCommit} 
       onChange={handleChange3}
       />
       <button 
       onClick={handleClick3}>Search
       </button>
   </div>
   <SearchCommits commit={commit}/>
   </>
   );
};

export default SearchBar;