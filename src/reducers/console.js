import * as constantsUserInfo from '../constants/actiontypes';
let initialState = '';

export default function console(state = initialState, action) {
  switch (action.type) {
  case constantsUserInfo.INPUTON : {
    state = constantsUserInfo.INPUTON;
    return state;
  }
  case constantsUserInfo.INPUTOFF : {
    state = constantsUserInfo.INPUTOFF;
    return state;
  }
  default : {
    return state;
  }
  }
}