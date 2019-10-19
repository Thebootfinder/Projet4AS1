/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))

app.use(session({
  secret: 'blablabla', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const users = [{
  ID: 'admin',
  Pass: 'admin'
}]

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  if (!req.session.userId) {
    const isLoginCorrect = users.find(u => u.ID === req.body.username && u.Pass === req.body.password)
    if (!isLoginCorrect) {
      res.json({
        status: false
      })
    } else {
      req.session.userId = 1
      console.log('UserID: ' + req.session.userId)
      res.json({
        status: true
      })
    }
  }
})

app.post('/api/Register', (req, res) => {
  const test = users.find(u => u.ID === req.body.username)
  if (!test) {
    res.json({
      status: true
    })
  } else {
    res.json({
      status: false
    })
  }
})

app.post('/api/CreerUser', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  users.push({
    ID: req.body.username,
    Pass: req.body.password
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
