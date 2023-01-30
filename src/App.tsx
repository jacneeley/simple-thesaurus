import React, { useState } from 'react'
import './App.css'
import { Header } from './assets/components/common'
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

  // reset
  const handleClear = () => {
    setWord("");
  }

  return (
    <div className="fade-in">

      <Header/>
      <section className='content fade-in-2'>
        <section>
          <form onSubmit={handleFetchRequest}> 
            <label htmlFor='word-input'>Search:</label>
            <input
              value={word} //controlled value
              id='word-input' onChange={(e) => setWord(e.target.value)}
            ></input>
            <button>submit</button><button onClick={()=>handleClear()}>clear</button>
          </form> 
        </section>

        <section>
          {isLoad ? <div>Loading...</div>
          : (
            <ul className='fade-in'>
              {synonyms.map(synonym => (
                <ul onClick={() => handleSynClicked(synonym.word)} key={synonym.word}>{synonym.word}</ul>
              ))}
            </ul>
          )}
        </section>
      </section>
    </div>
  )
}

export default App
