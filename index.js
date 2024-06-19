require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001 

app.get('/', (req, res) => {
  res.send('Mohammed Faizan Ghani')
})


app.get('/Login', (req, res) => {
    res.send('User Login')
  })


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})