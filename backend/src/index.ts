import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/userRoutes'
import atividadeRoutes from './routes/atividadeRoutes'
import planejamentoRoutes from './routes/planejamentoRoutes'
import authRoutes from './routes/authRoutes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/atividades', atividadeRoutes)
app.use('/api/planejamentos', planejamentoRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
