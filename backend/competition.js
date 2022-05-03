const express = require('express')
const bodyParser = require('body-parser')
const util = require('util')
const db = require('./db')

const app = express()
app.use(bodyParser.json());

app.get('/', (req, res) => {
  db.query(`
    SELECT a.*,
      b.first_name winner_first_name,b.last_name winner_last_name,b.email winner_email,b.phone1 winner_phone1,b.phone2 winner_phone2,b.address winner_address 
    FROM competition a 
      LEFT JOIN account b ON a.winner=b.id`).then(data => {
		res.json({
			count: data.length,
			data: data.reduce((arr, el) => ({ ...arr, [el.id]: el }),{})
		})
	})
})

app.post('/insert', (req, res) => {
  const competition = req.body
  competition.last_time = new Date()
  db.query("REPLACE INTO competition SET ?",[competition]).then(()=>{
    res.json({
      success: true
    })
  }).catch(()=>{
    res.json({
      success: false
    })
  })
})

app.post('/update', (req, res)=>{
  const competition = req.body
  // competition.last_time = new Date().getTime()
  db.query("UPDATE competition SET ? WHERE id=?",[competition, competition.id]).then(()=>{
    res.json({
      success: true
    })
  }).catch((err)=>{
    res.json({
      success: false,
      message: err
    })
  })
})

module.exports = app