const express = require('express');
const app = express();
const port = 3000;
const webroot =__dirname + '/Public';

app.use('/', express.static(webroot));

app.listen(port, () => console.log('Example app listening on port $ {port}!'));
