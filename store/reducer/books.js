import { BOOKS } from '../../model/dummy-data';

const initialState = {
    books: BOOKS
}

export default (state = initialState, action) => {
    return state;
}