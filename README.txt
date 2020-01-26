To run app:

You will need 3 terminal windows.
First, navigate to blog directory and run 'npm start' to run application.
In two separate windows, navigate to sibling jsonserver folder.
'npm run db' will run the jsonserver
'npm run tunnel' will run the ngrok tunnel allowing network connections.

note: ngrok will provide you with a temporary url.
for the application to work properly, the axios baseURL needs to be updated to the ngrok-provided url in /blog/src/api/jsonServer.js