const express = require('express')
require('./db/mongoose')
const taskRouter = require('./router/tasks')

const app = express()
const port = 3000
app.use(express.json())
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
