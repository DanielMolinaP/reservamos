// Importa las action types acá
import {
  GET_COORDINATES_BY_NAME,
  NEW_CITIES,
  ERROR,
  EXI,
  EXI1,
  ERROR1
} from "../Acctions/index";

const initialState = {
  info: [],
  error: false,
  error1: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES_BY_NAME:
      return {
        ...state,
        info: [...state.info, action.payload]
      };
    case NEW_CITIES:
      return {
        ...state,
        info: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ERROR1:
      return {
        ...state,
        error1: action.payload
      };
    case EXI:
      return {
        ...state,
        error: action.payload
      };
    case EXI1:
      return {
        ...state,
        error1: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
