import axios from 'axios';

export default axios.create({
  // free ngrok requires this url to change every 8 hours
  baseURL: 'http://04e6bc22.ngrok.io'
});
