import dotend from 'dotenv'
import express from 'express'
import { executeQueries } from './chatbot.js'
import cors from 'cors'

dotend.config()

const app = express()
app.use(express.json())
app.use(cors())

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
// app.use(express.static(__dirname + '/dist'))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/dist/index.html')
// })

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Api running')
})

app.post('/api/chat', async (req, res) => {
  const { message, sessionId } = req.body
  try {
    const response = await executeQueries(message, sessionId)
    res.json({ message: response, status: 'ok' })
  } catch (error) {
    console.error('Error al procesar la solicitud: ', error)
    res.status(500).json({ error: 'Error al procesar la solicitud', status: 'error' })
  }
})
