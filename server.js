const express = require('express')
const next = require('next')
const app = express()

const account = require('./backend/account')
const competition = require('./backend/competition')

const port = process.argv[3]
const server = next({ dev:process.argv[4] && process.argv[4]==='-dev', port })
const handle = server.getRequestHandler()

app.get('/test', (req,res)=>{
	res.json({success:'true'})
})
app.use('/api/account', account)
app.use('/api/competition', competition)

server.prepare().then(() => {
	app.all('*', (req, res) => {
    return handle(req, res)
  })
	app.listen(port, (err) => {
		if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
	})
})