const express = require('express');
const {createUser} = require('../controller/userController');
const {getUser} = require('../controller/userController');
const {updateUser} = require('../controller/userController');
const {deleteUser} = require('../controller/userController');

const router = express.Router();

// router.get('/users', (req, res) => {
//     res.send('Get all users');
// });

router.post('/add-users', createUser);
router.get('/get-users', getUser);
router.put('/update-users/:id', updateUser);
router.delete('/delete-users/:id', deleteUser);
module.exports = router;
