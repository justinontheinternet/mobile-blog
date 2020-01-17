// ALL COMMENTED OUT CODE IS ELMINATED BY createDataContext CALL!!!!

// import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state
        ,{
          id: Math.floor(Math.random() * 99999)
          ,title: `Blog Post #${state.length + 1}`
        }
      ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
     return state;
  }
};

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost'});
  };
};

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);