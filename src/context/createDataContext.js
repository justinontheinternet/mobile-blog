import React, { useReducer } from 'React';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
      // loop through each key in actions
      // for each key, call the function with the dispatch function
      // this will return a function that actually does something
    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }} >
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider }; 
};
