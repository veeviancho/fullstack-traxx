const router = require("express").Router();
const connection = require("../config/db");

/**
 * @route POST api/currency
 * @desc Create new currency
 * @access Private
 */
router.post("/", (req, res) => {
  const { base, counter, rate } = req.body;

  // Check if base and counter combination exists in database
  const query = `SELECT * FROM currency WHERE base='${base}' AND counter='${counter}'`;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else if (results.length !== 0) {
      res.status(400).json({
        error: 'Base and Counter pair already exists.',
        response: results
      })
    } else {
      const postQuery = `INSERT INTO currency(base, counter, rate) VALUES ('${base}', '${counter}', ${rate})`;
      connection.query(postQuery, (err, results) => {
        if (err) console.log(err);
        else {
          res.status(200).json({
            response: results
          })
        }
      })
    }
  })
})

/**
 * @route GET api/currency
 * @desc Read all currency
 * @access Private
 */
router.get("/", (req, res) => {
  const query = `SELECT * FROM currency`;
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else {
      res.status(200).json({
        response: results
      })
    }
  })
})

/**
 * @route GET api/currency/:id
 * @desc Read a currency data
 * @access Private
 */
router.get("/:id", (req, res) => {
  const id = req.params.id
  const query = `SELECT * FROM currency WHERE id=${id}`
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else if (results.length === 0) {
      res.status(404).json({
        error: 'Data does not exist.'
      })
    } else {
      res.status(200).json({
        response: results[0]
      })
    }
  })
})

/**
 * @route PUT api/currency/:id
 * @desc Update a currency data
 * @access Private
 */
router.put("/:id", (req, res) => {
  const id = req.params.id
  const { base, counter, rate } = req.body

  // Check if currency data exists
  const query = `SELECT * FROM currency WHERE id=${id}`
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err);
    else if (results.length === 0) {
      res.status(404).json({
        error: 'Data does not exist.'
      })
    } else {
      const updateQuery = `UPDATE currency SET base='${base}', counter='${counter}', rate=${rate} WHERE id=${id}`
      connection.query(updateQuery, (err, results, fields) => {
        res.status(200).json({
          response: results
        })
      })
    }
  })
})

/**
 * @route DELETE api/currency/:id
 * @desc Delete a currency data
 * @access Private
 */
router.delete("/:id", (req, res) => {
  const id = req.params.id
  const query = `DELETE FROM currency WHERE id=${id}`
  connection.query(query, (err, results, fields) => {
    if (err) console.log(err)
    else {
      res.status(200).json({
        response: results
      })
    }
  })
})


module.exports = router;