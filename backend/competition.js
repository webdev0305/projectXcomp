const express = require('express')
const bodyParser = require('body-parser')
const util = require('util')
const db = require('./db')
const ethers = require('ethers') // Ethers
const CompetitionABI = require("../abi/Competition.json")
const { json } = require('express/lib/response')
const app = express()
const ENCRYPT_KEY = "projextXCompetition"

const defaultProvider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)

const getSignature = async(msg, signature) => {
  // return await ethers.utils.verifyMessage(msg, signature)
}
app.use(bodyParser.json());

app.get(['/','/:address'], (req, res) => {
  const {address} = req.params;
  db.query(`
    SELECT a.id, a.title, a.description, a.logo_url, a.winner_url, a.images, a.winner, a.last_time, a.instruction IS NULL AS instruction,
      b.first_name winner_first_name,b.last_name winner_last_name,b.email winner_email,b.phone1 winner_phone1,b.phone2 winner_phone2,b.address winner_address,
      SUM(c.count) AS my_tickets
    FROM competition a 
    LEFT JOIN account b ON a.winner=b.id
    LEFT JOIN tickets c ON a.id=c.comp_id AND c.address=?
    GROUP BY a.id DESC`,[address]).then(data => {
		res.json({
			count: data.length,
			data: data.reduce((arr, el) => ({ ...arr, [el.id]: el }),{})
		})
	})
})

app.post('/instruction', async (req, res) => {
  const {id, signature, msg} = req.body
  const contractCompetition = new ethers.Contract(
    String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
    CompetitionABI,
    defaultProvider
  )
  const competitions = await contractCompetition.competitions(id-1)
  const ownerAddress = await contractCompetition.owner()
  const signerAddress = ethers.utils.verifyMessage(msg, signature)
  if(competitions.winner == signerAddress || ownerAddress == signerAddress){
    db.query(`
    SELECT CONVERT(DES_DECRYPT(instruction, ?) USING 'latin1') AS instruction
    FROM competition
    WHERE id=?`,[ENCRYPT_KEY, id]).then(data => {
      res.json({
        data: data[0].instruction
      })
    })
  }else{
    res.json({msg:'You have no access permission!'})
  }
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

app.post('/buyticket', (req, res)=> {
  const ticket = req.body
  db.query("INSERT tickets SET ?",[ticket]).then(()=>{
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