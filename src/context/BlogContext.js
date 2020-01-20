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
          ,title: action.payload.title
          ,content: action.payload.content
        }
      ];
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
     return state;
  }
};

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content }});
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: 'edit_blogpost', payload: { id, title, content }});
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

export const { Context, Provider } = createDataContext(
  blogReducer
  ,{ addBlogPost, deleteBlogPost, editBlogPost }
  ,[{title: 'TEST POST', content: 'TEST CONTENT', id: 1}]
);
