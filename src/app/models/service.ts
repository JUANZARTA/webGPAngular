export interface Service {
  id: number;
  nombre: string;
  descripcion: string;
  planes: Plan[];
}

export interface Plan {
  nombre: string;
  descripcion: string;
  detalles: string[];
}
