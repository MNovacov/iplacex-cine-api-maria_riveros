export function ActorSchema(data) {
  return {
    idPelicula: data.idPelicula,
    nombre: data.nombre,
    edad: data.edad,
    estaRetirado: data.estaRetirado,
    premios: data.premios
  };
}
