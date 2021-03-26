
const express = require('express')

const FriendsRouter = require('./friends/friends-router')

const server = express()
server.use(express.json())

server.use('/api/friends', FriendsRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
  })

  server.use((err, req, res, next) => { // eslint-disable-line
    // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
    res.status(500).json({
      message: 'something went wrong inside the accounts router',
      errMessage: err.message,
    })
  })

module.exports = server