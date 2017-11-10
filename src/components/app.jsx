import React from 'react';
import PhraseInput from './phrase-input.jsx';
import CurrentStats from './current-stats.jsx';
import SavedPhrases from './saved-phrases.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>phrase stats app</h1>
        <PhraseInput/>
        <CurrentStats/>
        <SavedPhrases/>
      </div>
    )
  }
}
