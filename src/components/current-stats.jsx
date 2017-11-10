import React from 'react';
import { connect } from 'react-redux';

import {
  showDetails,
  hideDetails
} from '../actions/action-creators.js';

class CurrentStats extends React.Component {

  render() {
    let phrase = this.props.currentPhrase;
    return (
      <div>
        <b>{phrase.charCount}</b> character{phrase.charCount !== 1 ? 's' : ''},
        <b>{phrase.wordCount}</b> word{phrase.charCount !== 1 ? 's' : ''},
        <b>{phrase.sentCount}</b> sentence{phrase.charCount !== 1 ? 's' : ''}
      </div>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStats);
