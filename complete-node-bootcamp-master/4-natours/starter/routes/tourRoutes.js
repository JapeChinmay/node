const express = require('express');
const tourController = require('./../controller/tourController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  next();
});
const app = express();

app.use('/api/v1/tours', router);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.addNewTour);

router
  .route('/:id')
  .patch(tourController.editTour)
  .delete(tourController.deleteTour);

module.exports = router;
