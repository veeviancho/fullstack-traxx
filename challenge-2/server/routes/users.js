const router = require("express").Router();
const connection = require("../config/db")

/**
 * @route POST api/users/login
 * @desc Login user
 * @access Public
 */
router.post('/login', (req, res) => {
  const {username, password} = req.body;
  const query = `SELECT * FROM user WHERE username='${username}' AND password='${password}'`;

  connection.query(query, (err, results, fields) => {
    if (err) console.log(err)
    else if (results.length === 0) {
      // Check if username exists
      const userQuery = `SELECT * FROM user WHERE username='${username}'`;
      connection.query(userQuery, (err, results) => {
        if (err) console.log(err)
        else {
          // If username does not exists
          if (results.length === 0) {
            res.status(404).json({
            msg: 'User does not exist.'
          // If username exists
          })} else {
            res.status(400).json({
              msg: 'Wrong password entered.'
            })
          }
        }
      })
    } else {
      res.status(200).json({
        response: results[0]
      })
    }
  })
})

/**
 * @route GET api/users/:id
 * @desc Read a user data
 * @access Private
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM user WHERE id=${id}`
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else if (results.length === 0) {
      res.status(404).json({
        msg: 'User not found.'
      })
    } else {
      res.status(200).json({
        response: results[0]
      })
    }
  })

})

module.exports = router;