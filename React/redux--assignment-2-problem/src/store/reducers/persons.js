import * as actionTypes from '../actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat(action.person)
      }
    case actionTypes.REMOVE_PERSON: 
      const updatedPersons = state.persons.filter(person => person.id !== action.id);
      return {
        ...state,
        persons: updatedPersons
      }
  }
  return state;
}

export default reducer;