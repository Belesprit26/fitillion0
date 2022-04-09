import React, {useState} from "react";

const savedFromStorage = JSON.parse(localStorage.getItem("saved") || "[]")

export const Commits = (props) => {
    const {commits} = (props);
    console.log("Commits are: ", commits.data);
    const [saved, setSaved] = useState(savedFromStorage);

    

    const addSaved = (e) => {
        setSaved(
            [ ...saved, {
            id: saved.length,
            value: e.target.value}])
        localStorage.setItem("saved", JSON.stringify(saved))
        console.log("Saved Commits are ",saved)
    }

    const DeleteSaved = (savedID) => {
       const newSaved = [ ...saved]

       const index = saved.findIndex((saved) => saved.id === savedID);

       newSaved.splice(index, 1);

       setSaved(newSaved)
       localStorage.setItem("saved", JSON.stringify(saved))
       console.log("Saved Commits are ",saved);
    };


   const listCommits = 
    commits.length !== 0 ? (
        commits.data.map((item) => <li key={item.sha}><input
        type='button'
        onClick={addSaved}
        value={item.committer.login + " - " + item.commit.message}
        onChange={e => setSaved({commit: e.target.value})}
        />
        </li>)) 
        : 
        (<li>Please enter repo name commits from Github Repositories</li>);

    const result =
    saved.length !== 0 ? (
        saved.map((item) => 
        <li key={item.id}><input
        type='button'
        onClick={DeleteSaved}
        value='Delete'
        onChange={e => setSaved({commit: e.target.value})}
        />{item.value}</li>)) 
        :
    (<li>No commits saved</li>);
    

   return <div>
       
       <ul>
       <h3>All Commits (Click to save)</h3>
           {listCommits}

        </ul>
        <form>
            <ul>
            <h3>Saved Commits</h3>
                {result}  
            </ul>
        </form>
        

        </div>
}

export default Commits;

// {saved.map(item => (
 //   <li key={item.id}>{item.value}</li>
  //  ))}
 