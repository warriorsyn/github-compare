/**
 * Types
 */

export const Types = {
    ADD_REPOSITORY_REQUEST: "github/ADD_REPOSITORY_REQUEST",
    ADD_REPOSITORY_SUCCESS: "github/ADD_REPOSITORY_SUCCES",
    GET_ERROR: "github/GET_ERROR"
}

/**
 * Reducers
 */

const INITIAL_STATE = {
    data: [],
    error: {
        string: "",
        status: false
    }
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_ERROR:
            return { ...state, error: { ...state.error, string: action.payload.text, status: true }}
        case Types.ADD_REPOSITORY_SUCCESS: 
            return { ...state, data: [ ...state.data, action.payload.data ], error: { status: false, string: "" } }
        default:
            return state;
    }
}

/**
 * Actions
 */

export const Creators = {
    addRepositoryRequest: repository => ({
        type: Types.ADD_REPOSITORY_REQUEST,
        payload: { repository }
    }),

    addRepositorySuccess: data => ({
        type: Types.ADD_REPOSITORY_SUCCESS,
        payload: { data }
    }),

    getError: text => ({
        type: Types.GET_ERROR,
        payload: { text }
    })
}