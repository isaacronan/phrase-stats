import {
  UPDATE_PHRASE,
  SAVE_PHRASE,
  REMOVE_PHRASE,
  TOGGLE_DETAILS,
  statTypes
} from '../actions/action-types.js';

let genCurrentPhrase = (text) => {
  return {
    text: text,
    isShowingDetails: false,
    get charCount() {
      return this.text.length;
    },
    get words() {
      let words = this.text.split(' ');
      let emptyIndex = words.indexOf('');
      if(emptyIndex + 1) {
        words.splice(emptyIndex, 1)
      }
      return words;
    },
    get wordCount() {
      return this.words.length;
    },
    get sentCount() {
      let sentences = this.text.match(/(\.|\?|!)/g);
      return sentences ? sentences.length : 0;
    }
  }
}

let initialState = {
  currentPhrase: genCurrentPhrase(''),
  savedPhrases: []
}

export function phraseStats(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PHRASE:
      return Object.assign({}, state, {
        currentPhrase: genCurrentPhrase(action.value)
      })
    case SAVE_PHRASE:
      if(state.currentPhrase) {
        return Object.assign({}, state, {
          currentPhrase: genCurrentPhrase(''),
          savedPhrases: [...state.savedPhrases, state.currentPhrase]
        })
      } else {
        return state;
      }
    case REMOVE_PHRASE:
      state.savedPhrases.splice(action.index, 1);
      return Object.assign({}, state, {
        savedPhrases: [...state.savedPhrases]
      })
    case TOGGLE_DETAILS:
      state.savedPhrases[action.index].isShowingDetails = !state.savedPhrases[action.index].isShowingDetails;
      return Object.assign({}, state, {
        savedPhrases: [...state.savedPhrases]
      });
    default:
      return state;
  }
}
