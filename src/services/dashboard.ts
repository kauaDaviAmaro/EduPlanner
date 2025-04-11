import api from './api'

export interface DashboardResumo {
  atividades: number
  planejamentos: number
}

export const dashboardService = {
  async getResumo(): Promise<DashboardResumo> {
    const response = await api.get<DashboardResumo>('/dashboard/resumo')
    return response.data
  },
}
