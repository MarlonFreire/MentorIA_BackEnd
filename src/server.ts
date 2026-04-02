import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors  from 'cors';
import path  from "path";
import { fileURLToPath } from "url";

// ESmodule __dirname alternative
const  __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// middlaware to handle cors
app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type','Authorization'],
        credentials:true
    }))

// Static folder for uploads
app.use('uploads', express.static(path.join(__dirname, 'uploads')))

// ROTAS

// 404 handler
app.use( (req,res) =>{
    res.status(404).json({
        success: false,
        error: 'route not found',
        statuscode: 404
    })
})

// start server
app.listen(3000, () => {
    console.log('server Rodando')
})

// Erros assincronos
process.on('unhandledRejection', (erro) => {
  if (erro instanceof Error) {
    console.error(`Error: ${erro.message}`);
  } else {
    console.error('Erro desconhecido:', erro);
  }

  process.exit(1);
});

// Erros sincronos
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION 💥');
  console.error(err.stack);
  process.exit(1);
});
