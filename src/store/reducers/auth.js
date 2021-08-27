
const initialstate = {
    loading: false, 
    isAuthenticated: false,
    error: null,
    currentUser: null
}

const auth = (state = initialstate, action) => {
  switch (action.type){
      case 'API_FETCH_START':
          return {
            ...state,
            login: true,
            error: null
          }

      case 'SIGNUP_USER_SUCESSFULLY':
          return {
              ...state, 
              isAuthenticated: true,
              error: null,
              loading: false,
              currentUser: action.payload
          }

       case 'SIGNUP_USER_FAIL':
           return {
               ...state,
               isAuthenticated: false,
               loading: false,
               error: action.payload
           }   
      default: 
        return state
  }
}