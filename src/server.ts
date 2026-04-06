import { app } from './app.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

// erros assíncronos
process.on('unhandledRejection', (error) => {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`)
  } else {
    console.error('Unknown error:', error)
  }

  process.exit(1)
})

// erros síncronos
process.on('uncaughtException', (error) => {
  console.error('UNCAUGHT EXCEPTION 💥')
  console.error(error)

  process.exit(1)
})