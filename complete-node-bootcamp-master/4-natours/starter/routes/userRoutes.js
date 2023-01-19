const express = require('express');

const userController = require('./../controller/userController');

const router = express.Router();
const app = express();

app.use('/api/v1/users', router);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.addUser)
  .delete(userController.deleteUser);

module.exports = router;
