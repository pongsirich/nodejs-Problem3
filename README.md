# nodejs-Problem3
### Problem
- **จงเพิ่ม Endpoint สำหรับการ update task ด้วย description**

<!-- Tips -->
## Table of Contents

* Express
* [MongoDb](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/docs/models.html)

## Installation

- To install a package you need `npm` to get started
```shell
$ npm install
```


## task.js

```javascript
const express = require('express')
const router = express.Router()
const Task = require('../models/task')

//GET /tasks?completed=true
//GET /tasks?limit=10&skip=0
//GET /tasks?sortBy=createAt_desc
router.get('/tasks', async (req, res) => {
  const match = {}
  try {
    const tasks = await Task.find({})
    res.send({ tasks })
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const task = await Task.findOne({ _id })
    if (!task) {
      return res.status(404).send()
    }
    res.send({ task })
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body)
  try {
    await task.save()
    res.status(201).send(task)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/taskCompleted', async (req, res) => {
  // #0 if you use async await should has try/catch
  // #1 validate req.body should contains "description" in JSON if not then return error with status code 400
  // #2 Try to update the completed to "true" with the description
})

module.exports = router

```
