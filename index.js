require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Note = require('./models/note')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

const requestLogger = (req, res, next) => {
  console.log('Method', req.method)
  console.log('Path', req.path)
  console.log('Body', req.body)
  next()
}

app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>')
})

app.get('/api/notes', (req,res) => {
  Note.find({}).then(notes => {
    res.json(notes)
  })
})

app.get('/api/notes/:id', (req, res, next) => {
  Note.findById(req.params.id)
    .then(note => {
      if(note){
        res.json(note)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/notes/:id', (req, res, next) => {
  Note.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/notes', (req, res, next) => {
  const body = req.body

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save()
    .then(savedNote => {
      res.json(savedNote)
    })
    .catch(error => next(error))
})

app.put('/api/notes/:id', (req, res, next) => {
  const body = req.body

  const note = {
    content: body.content,
    important: body.important,
  }
  
  Note.findByIdAndUpdate(req.params.id, note, { new: true })
    .then(updatedNote => {
      res.json(updatedNote)
    })
    .catch(error => next(error))
})

const unknownEnpoint = (req, res) => {
  res.status(404).send({ error: 'unknown enpoint' })
}

app.use(unknownEnpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if(error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id'} )
  }

  next(error)
}

app.use(errorHandler)

const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
