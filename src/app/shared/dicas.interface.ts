export interface Dicas {
  // id: string;
  beneficios: Beneficios;
  calificar: string;
  descripcion: string;
  imagen: string;
  pasos: Pasos;
  titulo: string;
}

export interface Pasos {
  paso_1: string;
  paso_2: string;
  paso_3: string;
  paso_4: string;
}

export interface Beneficios {
  beneficio_1: string;
  beneficio_2: string;
}
