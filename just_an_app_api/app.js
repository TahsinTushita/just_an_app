const express = require('express');
const app = express();

app.get('/', (req,res,next) => res.end('Welcome!!!!'));

app.listen(5000, () => console.log('Server running'));