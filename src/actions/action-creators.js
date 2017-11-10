import {
  UPDATE_PHRASE,
  SAVE_PHRASE,
  REMOVE_PHRASE,
  TOGGLE_DETAILS,
  SHOW_STAT,
  HIDE_STAT
} from './action-types.js';

export function updatePhrase(value) {
  return {
    type: UPDATE_PHRASE,
    value
  }
}

export function savePhrase() {
  return {
    type: SAVE_PHRASE
  }
}

export function removePhrase(index) {
  return {
    type: REMOVE_PHRASE,
    index
  }
}

export function toggleDetails(index) {
  return {
    type: TOGGLE_DETAILS,
    index
  }
}
