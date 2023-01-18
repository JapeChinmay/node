const express = require('express');

const fs = require('fs');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(morgan('dev'));

/////////////////////////////////////////////////////
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//////////////////////////////////////////////////////////////

////////////////////////////////////////////users

//////////////////////////////////////////////////////////////////
//app.get('/api/v1/tours/:id?', getAllTours);

//app.post('/api/v1/tours', addNewTour);

// app.patch('/api/v1/tours/:id', editTour);

// app.delete('/api/v1/tours/:id', deleteTour);

const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
