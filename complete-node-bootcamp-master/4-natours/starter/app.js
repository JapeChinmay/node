const express = require('express');

const fs = require('fs');

const app = express();
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours/:id?', (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!id) {
    return res.status(200).json({
      status: 'succes',
      data: {
        tours: tours,
      },
    });
  }

  if (!tour) {
    return res.status(404).json({ message: 'failed' });
  }
  res.status(200).json({
    status: 'succes',
    results: tours.length,
    data: {
      tours: tour,
    },
  });
});

/////

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);

  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'succes',
        data: {
          tours: newTour,
        },
      });
    }
  );
});

app.patch('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'invalid' });
  }

  res.status(200).json({
    status: 'succes',
    data: {
      tour: 'updated',
    },
  });

  res.send('done patch');
});

app.delete('/api/v1/tours/:id', (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'invalid id' });
  }

  res.status(204).json({
    status: 'succes',
    data: 'null',
  });
});
const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
