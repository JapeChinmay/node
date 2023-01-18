const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({ status: 'error', message: 'not yet defined' });
};
const createUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'not yet defined' });
};

const getUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'not yet defined' });
};

const addUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'not yet defined' });
};
const deleteUser = (req, res) => {
  res.status(500).json({ status: 'error', message: 'not yet defined' });
};
const router = express.Router();
const app = express();

app.use('/api/v1/users', router);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(addUser).delete(deleteUser);

module.exports = router;
