import {ADD_CHAR, ADD_CURSOR, DELETE_CURSOR} from '../constants/actiontypes';
import { createAction } from 'redux-actions';

export const addChar = createAction(ADD_CHAR);
export const addCursor = createAction(ADD_CURSOR);
export const deleteCursor = createAction(DELETE_CURSOR);