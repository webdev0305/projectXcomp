const express = require('express')
const bodyParser = require('body-parser')
const util = require('util')
const db = require('./db')

const app = express()
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
  db.query(`SELECT * FROM account WHERE id=?`,req.params.id).then(data => {
		res.json(data[0])
	})
})

app.post('/', (req, res)=> {
  const account = req.body
  db.query('REPLACE INTO account SET ?', account).then(()=>{
    res.json({success:true})
  })
})

// app.post('/:id', (req, res)=> {
//   const account = req.body
//   db.query('UPDATE account SET ? WHERE id=?', [account, req.params.id]).then(()=>{
//     res.json({success:true})
//   })
// })

module.exports = app