import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

// recriando __dirname no ESModules
const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)

export const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: "*", // depois melhorar isso
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

// arquivos estáticos (corrigido)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// ROTAS 


// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    statusCode: 404,
  })
})