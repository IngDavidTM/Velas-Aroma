export const COLOR_SUFFIX_MAP: Record<string, string> = {
  Negro: "N",
  Blanco: "B",
  Rojo: "R",
  Azul: "A",
  Amarillo: "AM",
  Rosado: "RO",
  Morado: "M",
  Verde: "V",
  Naranja: "NA",
  Marrón: "MA",
};

export function buildColorVariantPath(
  folder: string,
  color: string,
  format: "avif" | "png" = "avif",
) {
  if (!folder) return null;
  const suffix = COLOR_SUFFIX_MAP[color];
  if (!suffix) return null;

  const normalizedFolder = folder.replace(/\/$/, "");
  const baseName = normalizedFolder.split("/").pop();
  if (!baseName) return null;

  return `${normalizedFolder}/${baseName}${suffix}.${format}`;
}
