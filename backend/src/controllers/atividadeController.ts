import { Request, Response } from 'express'
import { atividadeService } from '../services/atividadeService'

export const getAtividades = async (req: Request, res: Response) => {
  const userId = req.user?.id
  const atividades = await atividadeService.listar(userId)
  res.json(atividades)
}

export const createAtividade = async (req: Request, res: Response) => {
  const userId = req.user?.id
  const { titulo } = req.body
  const atividade = await atividadeService.criar({ titulo, usuarioId: userId })
  res.status(201).json(atividade)
}
