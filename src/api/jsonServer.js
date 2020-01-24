import axios from 'axios';

export default axios.create({
  // free ngrok requires this url to change every 8 hours
  baseURL: 'http://e7f55184.ngrok.io'
});
