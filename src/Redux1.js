// 2021.08.03 - TUE:

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

// 2021.07.31 - SAT: 

// Use a Switch Statement to Handle Multiple Actions: 

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch(action.type) {
      case 'LOGIN':
        return { authenticated: true }
      case 'LOGOUT': 
        return { authenticated: false }
      default:
        return state
    }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };

// Handle an Action in the Store:

const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
  
    if (action.type === 'LOGIN') {
      return {login: true};
    } else {
      return state;
    }
  
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };

// Dispatch an Action Event:

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  
  store.dispatch(loginAction())

// Define an Action Creator:

const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  
  function actionCreator() {
    return action;
  }

// Define a Redux Action:

// Define an action here:

const action = {
    type: 'LOGIN'
  }

// Get State from the Redux Store:

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  
  const currentState = store.getState();

// 2021.07.30 - FRI: 

// Create a Redux Store:

const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  
  const store = Redux.createStore(reducer); 