export interface CasosClinicos {
  id: string;
  contraindicaciones: string;
  cuidadosimportantes: string;
  descripcion: string;
  imagen: string;
  sintomas: Sintomas;
  titulo: string;
  tratamientos: string;
}

export interface Sintomas {
  sintoma_1: string;
  sintoma_2: string;
  sintoma_3: string;
  sintoma_4: string;
}
