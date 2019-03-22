require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose');
const router = express.Router()
const bodyParser = require('body-parser')

//Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Router middleware
const posts = require('./api/routes/posts',)
app.use('/posts', posts)

//Mongoose middleware
mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PW}@ds117816.mlab.com:17816/${process.env.MLAB_DB}`, { useNewUrlParser: true } );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
    console.log(`Connected to mLab ${process.env.MLAB_DB}`)
});

app.get('/', (req, res) => res.send('Welcome to Mern full stack app!'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))