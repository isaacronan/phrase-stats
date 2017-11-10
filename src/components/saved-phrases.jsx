import React from 'react';
import { connect } from 'react-redux';

import {
  removePhrase,
  toggleDetails
} from '../actions/action-creators.js';

import { statTypes } from '../actions/action-types.js';

class SavedPhrases extends React.Component {

  onRemovePhrase = (index) => {
    this.props.removePhrase(index);
  }

  onToggleDetails = (index) => {
    this.props.toggleDetails(index);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.savedPhrases.map((phrase, index) => {
            return (
              <li key={index}>
                {phrase.text}
                <button onClick={() => this.onRemovePhrase(index)}>x</button>
                <button onClick={() => this.onToggleDetails(index)}>{phrase.isShowingDetails ? '-' : '+'}</button>
                {phrase.isShowingDetails && <div>
                  <div><b>characters:</b> {phrase.charCount}</div>
                  <div><b>words:</b> {phrase.wordCount}</div>
                  <div><b>sentences:</b> {phrase.sentCount}</div>
                </div>}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    savedPhrases: state.savedPhrases
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removePhrase: index => dispatch(removePhrase(index)),
    toggleDetails: index => dispatch(toggleDetails(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPhrases);
