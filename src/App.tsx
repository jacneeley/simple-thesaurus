import React, { useState } from 'react'
import './App.css'
import { useFetchWords } from './hooks/useFetchWords';

function App() {
  const [word, setWord] = useState("");
  const {isLoad,synonyms,getWord} = useFetchWords();

  const handleFetchRequest = (e: React.FormEvent) => {
    e.preventDefault(); // stop refresh on submit
    getWord(word);
  };

  const handleSynClicked = (newWord: string) => {
    //prevent overloading and pass in a 'new word.'
    setWord(newWord);
    getWord(word);
  };

  return (
    <div className="App">
      <form onSubmit={handleFetchRequest}> 
        <label htmlFor='word-input'>Search:</label>
        <input
          value={word} //controlled value
          id='word-input' onChange={(e) => setWord(e.target.value)}
        ></input>
        <button>submit</button>
      </form> 

      {isLoad ? <div>Loading...</div>
      : (
        <ul>
        {synonyms.map(synonym => (
          <ul onClick={() => handleSynClicked(synonym.word)} key={synonym.word}>{synonym.word}
          </ul>))}
        </ul>
      )}
    </div>
  )
}

export default App
