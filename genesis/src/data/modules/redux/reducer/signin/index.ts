import {
    ERROR,
    ID,
    PASSWORD,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILURE,
    signinActionType,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS,
    RESET,
  } from 'src/data/modules/redux/action/signin';
  import ISignInState from './interface';
  
  const initState: ISignInState = {
    id: '',
    password: '',
    error: {
      type: '',
      status: 0,
      message: '',
    },
  };
  
  const SignInState = (state: ISignInState = initState, action: signinActionType) => {
    switch (action.type) {
      case ID: {
        return {
          ...state,
          id: action.payload,
        };
      }
      case PASSWORD: {
        return {
          ...state,
          password: action.payload,
        };
      }
      case ERROR: {
        return {
          ...state,
          error: action.payload,
        };
      }
      case SIGNIN_FAILURE: {
        return {
          ...state,
          error: action.payload,
        };
      }
      case SIGNIN_SUCCESS: {
        return {
          ...state,
        };
      }
      case REFRESH_TOKEN_SUCCESS: {
        localStorage.setItem('access_token', action.payload.access_token);
        localStorage.setItem('refresh_token', action.payload.refresh_token);
        return {
          ...state,
        };
      }
      case REFRESH_TOKEN_FAILURE: {
        return {
          ...state,
          error: action.payload,
        };
      }
      case RESET: {
        return {
          ...state,
          ...initState,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default SignInState;
  