import prisma from '../prisma/client'

export const atividadeService = {
  async listar(usuarioId: number) {
    return prisma.atividade.findMany({ where: { usuarioId } })
  },

  async criar(data: { titulo: string, usuarioId: number }) {
    return prisma.atividade.create({ data })
  }
}
