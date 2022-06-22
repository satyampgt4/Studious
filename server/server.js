import express from 'express';

const app = express();
const port = 5000;

// var usersRouter = require('./Routes/users.routes');
// app.use('/users', usersRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})