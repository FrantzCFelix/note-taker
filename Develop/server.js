//Dependencies
const express = require('express');

//create express server
const app = express();

//port you want to listen to
const PORT = process.env.PORT || 3000;

//Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/***********************************
Same thing as:

const htmlRoutes = require('../routes/htmlRoutes');
htmlRoutes(app);

*************************************/
//require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



//listener
app.listen(PORT, () => console.log('App listening on PORT: ' + PORT));