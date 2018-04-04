import {createAction} from 'redux-actions';
import {INPUTON, INPUTOFF} from '../constants/actiontypes';

export const inputon = createAction(INPUTON);
export const inputoff = createAction(INPUTOFF);