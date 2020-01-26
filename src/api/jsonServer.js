import axios from 'axios';

export default axios.create({
  // free ngrok requires this url to change every 8 hours
  baseURL: 'http://18974c5c.ngrok.io'
});
