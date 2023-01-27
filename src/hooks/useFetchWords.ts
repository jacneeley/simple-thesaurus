import React, { useState } from 'react'
import { fetchWords } from '../api/fetchRequest';

type Synonym = {
    word: string;
    score: number;
};

export const useFetchWords = () => {
    //we meed to store results and display them
  const [synonyms, setSyn] = useState<Synonym[]>([])
  const [isLoad, setLoad] = useState(false);

  const getWord = (word: string) => {
    setLoad(true);
    fetchWords(word)
    .then(setSyn)
    .then( () => setLoad(false));
  };

  return {isLoad,synonyms,getWord};

};



