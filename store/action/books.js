export const SET_BOOKS = 'SET_BOOKS';

export const fetchBooks = () => {
    return async dispatch => {
        dispatch({
            type: SET_BOOKS,
            books: []
        })
    }
};