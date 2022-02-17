const express = require('express')
const next = require('next')
const app = express()

const port = process.argv[3]
const server = next({ dev:true, port })
const handle = server.getRequestHandler()
server.prepare().then(() => {
	app.all('*', (req, res) => {
    return handle(req, res)
  })
	app.listen(port, (err) => {
		if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
	})
})