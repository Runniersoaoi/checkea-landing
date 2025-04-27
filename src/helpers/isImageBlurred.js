export const isImageBlurred = (image) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Dibujar la imagen en el canvas
  canvas.width = image.width;
  console.log(canvas.width);
  canvas.height = image.height;
  console.log(canvas.height);
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Obtener los datos de los píxeles de la imagen
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Convertir a escala de grises
  let grayData = [];
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Fórmula de luminancia para convertir a escala de grises
    grayData.push(0.299 * r + 0.587 * g + 0.114 * b);
  }

  // Aplicar filtro Laplaciano y calcular varianza
  let laplacianVariance = 0;
  let laplacianKernel = [
    [-1, -1, -1],
    [-1, 8, -1],
    [-1, -1, -1],
  ];

  for (let y = 1; y < canvas.height - 1; y++) {
    for (let x = 1; x < canvas.width - 1; x++) {
      let sum = 0;
      for (let ky = -1; ky <= 1; ky++) {
        for (let kx = -1; kx <= 1; kx++) {
          const pixelIndex = ((y + ky) * canvas.width + (x + kx)) * 4;
          const pixelGrayValue = grayData[pixelIndex / 4];
          sum += pixelGrayValue * laplacianKernel[ky + 1][kx + 1];
        }
      }
      laplacianVariance += sum * sum;
    }
  }

  // Comparar varianza con un umbral (el umbral puede ajustarse dependiendo de tus necesidades)
  const threshold = 10000000; // Este valor puede necesitar ajuste
  console.log(laplacianVariance);
  return laplacianVariance < threshold;
};
