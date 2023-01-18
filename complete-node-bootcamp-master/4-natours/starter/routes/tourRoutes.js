const express = require('express');
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
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
};

const addNewTour = (req, res) => {
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
};

const editTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'invalid' });
  }

  res.status(200).json({
    status: 'succes',
    data: {
      tour: 'updated',
    },
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'invalid id' });
  }

  res.status(204).json({
    status: 'succes',
    data: 'null',
  });
};

const router = express.Router();
const app = express();

app.use('/api/v1/tours', router);

router.route('/').get(getAllTours).post(addNewTour);

router.route('/id').patch(editTour).delete(deleteTour);

module.exports = router;
