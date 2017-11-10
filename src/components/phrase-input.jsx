import React from 'react';
import { connect } from 'react-redux';

import {
  updatePhrase,
  savePhrase
} from '../actions/action-creators.js';

class PhraseInput extends React.Component {

  onPhraseChange = (event) => {
    this.props.updatePhrase(event.target.value);
  }

  onPhraseSave = (event) => {
    event.preventDefault();
    this.props.savePhrase();
  }

  render() {
    return (
      <form onSubmit={this.onPhraseSave}>
        <input placeholder="enter a phrase" value={this.props.currentPhrase.text} onChange={this.onPhraseChange}/>
        <button type="submit">save phrase</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPhrase: state.currentPhrase
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePhrase: value => dispatch(updatePhrase(value)),
    savePhrase: () => dispatch(savePhrase())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhraseInput);
