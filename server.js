const express = require('express')
// var http = require('http')
// const https = require('https')
const next = require('next')
const app = express()
const fs = require('fs')

const account = require('./backend/account')
const competition = require('./backend/competition')

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

const port = process.argv[3] ?? 3000;
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
	// var httpServer = http.createServer(app);
	// var httpsServer = https.createServer(options, app)
	// if(port==80 || port==443) {
	// 	httpServer.listen(80, (err) => {
	// 		if (err) throw err
	// 		console.log(`> Ready on http://localhost`)
	// 	})
	// 	httpsServer.listen(443, (err) => {
	// 		if (err) throw err
	// 		console.log(`> Ready on https://localhost`)
	// 	})
	// } else {
	app.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on https://localhost:${port}`)
	})
	// }
})