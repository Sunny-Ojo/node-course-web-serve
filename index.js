const express = require('express');
const app = express();
const port = 5200;
app.get('/', (req, res) => res.send({ name: 'hello world' }));
//  app.send();
app.listen(4000, () => console.log('node express running'));
