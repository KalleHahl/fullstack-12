const express = require("express")
const router = express.Router()

const redis = require("../redis")

const configs = require("../util/config")

let visits = 0

/* GET index data. */
router.get("/", async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits,
  })
})

router.get("/statistics", async (req, res) => {
  let added_todos = await redis.getAsync("added_todos")
  if (!added_todos) added_todos = 0
  added_todos = parseInt(added_todos)
  res.send({
    added_todos,
  })
})

module.exports = router
