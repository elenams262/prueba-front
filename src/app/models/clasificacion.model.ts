export interface EquipoClasificacion {
  posicion: number;
  nombre: string;
  escudo: string;
  puntos: number;
  partidosJugados: number;
  partidosGanados: number;
  partidosEmpatados: number;
  partidosPerdidos: number;
  golesFavor: number;
  golesContra: number;
  diferenciaGoles: number;
  forma?: string[]; // Para mostrar últimos 5 partidos (G, E, P)
}
