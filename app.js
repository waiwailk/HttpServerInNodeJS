import * as config from './config.js'
import express from 'express'
console.log(config.PORT)

const app = express();
app.use(express.json() )

app.listen( config.PORT, () => {
     console.log("Server Listening on PORT:" , config.PORT );
     console.log('Server targeting on port ${config.PORT}');
});

app.get("/", (request, response ) => {
	res.send('Hello World');
});

app.get("/status", (request, response) => {
	const status = {
		"Status": "Running"
	};
	
	response.send(status);
});

