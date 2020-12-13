import * as actionTypes from './actions';

const initialState = {
    persons: []  // must be same name used in Person class check comment *** in Person.js
}

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:

            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }

            return {
                ...state,
                persons: state.persons.concat(newPerson)

            }
        case actionTypes.DELETE:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
        default:
            return state;
    }
}

export default personReducer;