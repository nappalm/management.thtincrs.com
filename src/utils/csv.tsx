export function generateCSVFile(title: string, contenido: string) {
  // Combinar la descripción y el contenido en una sola cadena
  const csv = contenido;

  // Crear un objeto Blob a partir del CSV
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });

  // Crear un enlace de descarga
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = title + ".csv";

  // Simular un clic en el enlace para iniciar la descarga
  document.body.appendChild(a);
  a.click();

  // Limpiar el enlace y liberar el objeto Blob
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
