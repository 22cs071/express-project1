const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
app.get('/home', (req, res) => {
    // res.send('Hello Home!')
    res.sendFile(__dirname+'/views/home.html')
})

app.get('/about', (req, res) => {
    // res.send('Hello About!')
    res.sendFile(__dirname+'/views/about.html')
})

app.get('/contact', (req, res) => {
    // res.send('Hello Contacts!')
    res.sendFile(__dirname+'/views/contact.html')
})

app.get('/cake', (req, res) => {
    res.send('Hello Cake!')
})

app.get('/contact/surat', (req, res) => {
    res.send('Hello contact from Surat!')
})

app.get('*', (req, res) => {
    res.send('Lauda Hai lega Kya??')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})