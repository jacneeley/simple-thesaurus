const API_URL = import.meta.env.VITE_API_URL ?? `https://api.datamuse.com`; //use env or Fall back on URL

export const fetchWords = (word: String) => {
    return fetch(`${API_URL}/words?rel_syn=${word}`)
      .then(response => response.json());
  };
