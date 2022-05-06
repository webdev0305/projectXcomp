const express = require('express')
const bodyParser = require('body-parser')
const util = require('util')
const db = require('./db')
const ethers = require('ethers') // Ethers
const app = express()
const ENCRYPT_KEY = "projextXCompetition"
const defaultProvider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)

const getContract = async() => {
  
}
app.use(bodyParser.json());

app.get('/', (req, res) => {
  db.query(`
    SELECT a.id, a.title, a.description, a.logo_url, a.winner_url, a.images, a.winner, a.last_time, a.insturction IS NULL AS instruction,
      b.first_name winner_first_name,b.last_name winner_last_name,b.email winner_email,b.phone1 winner_phone1,b.phone2 winner_phone2,b.address winner_address 
    FROM competition a 
    LEFT JOIN account b ON a.winner=b.id
    ORDER BY a.id DESC`).then(data => {
		res.json({
			count: data.length,
			data: data.reduce((arr, el) => ({ ...arr, [el.id]: el }),{})
		})
	})
})

app.post('/instruction', (req, res) => {
  
  const {id,signature, owner} = req.body
  const contractCompetition = new ethers.Contract(
    String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
    CompetitionABI,
    address?provider?.getSigner():defaultProvider
  )
  const competition = contractCompetition.
  const signerAddress = await ethers.utils.verifyMessage(msg, signature)

  db.query(`
    SELECT DES_DECRYPT(instruction, ?) AS instruction
    FROM competition
    WHERE id=?`,[ENCRYPT_KEY, id]).then(data => {
		res.json({
			data: data[0].instruction
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

app.post('/update/instruction', (req, res) => {
  const {instruction, id} = req.body

  db.query("UPDATE competition SET instruction=DES_ENCRYPT(?,?) WHERE id=?", [instruction, ENCRYPT_KEY, id]).then(()=> {
    res.json({
      success: true
    }).catch((err)=> {
      res.json({
        success: false,
        message: err
      })
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