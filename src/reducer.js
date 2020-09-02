export const initialState = {
    name: "Nidhi",
    age: "23"
  };
  
  export const actionTypes = {
    CONTEXT_API_NIDHI: "CONTEXT_API_NIDHI",
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case actionTypes.CONTEXT_API_NIDHI:
        return {
          ...state,
          name: action.name,
          age : action.age
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  