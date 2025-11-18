export function PeliculaSchema(data) {
  return {
    nombre: data.nombre,
    generos: data.generos,
    anioEstreno: data.anioEstreno
  };
}
