
function formarEstilo(nombre) {
  return nombre !== undefined && nombre !== ""
    ? nombre
        .toLowerCase()
        .replaceAll(" ", "")
        .replace(" ", "-")
        .replace("á", "a")
        .replace("é", "e")
        .replace("í", "i")
        .replace("ó", "o")
        .replace("ú", "u")
        .replace(" ", "-")
        .replace("/", "-")
    : "";
}
