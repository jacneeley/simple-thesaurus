# Simple Thesaurus

## Goal
Build a Thesaurus using an API.<br>
Idea is that a User types in a word and the Thesaurus will return relevant information relating to the query.<br>

### Project Outline

#### Simple:

- App fetches synonyms from a thesaurus API
- Object is created using the type alias to handle data from the Thesaurus API
- User can query words using the textbox

#### Detailed:

Simple React app that fetches data from a Backend.<br>
The Page is dynamic, if a user clicks on another word, data will be refetched.<br>
There is a custom hook to display a loading message.<br>
API was abstracted away and given it's own Directory, so that our data is not coupled to how the data is fetched. All it cares about is how the data gets there.<br>
TypeScript was used to create objects. <br>
