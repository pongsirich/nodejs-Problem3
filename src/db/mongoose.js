const mongoose = require('mongoose')
mongoose.connect('mongodb://203.150.243.73:27017/tasks-mongoose', {
  useNewUrlParser: false,
  auth: {
    authdb: 'admin',
    user: 'root',
    password: 'rootpassword'
  }
})
