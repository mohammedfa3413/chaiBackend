require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001 

const data = {
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
    }

app.get('/', (req, res) => {
  res.send('Mohammed Faizan Ghani')
})


app.get('/Login', (req, res) => {
    res.send('User Login')
  })

  
app.get('/data', (req, res) => {
    res.json(data)
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})