module.exports = (app) => { 
  app.get('/api', (req, res) => { 
    res.json({ message: "Hello World" })
  })
}