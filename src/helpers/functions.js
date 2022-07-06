export const CheckImage = (file) => {
  return file && file["type"].split("/")[0] === "image";
};
export const DownLoadImage = (canvas, filename) => {
  let e;
  // create link
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.current.toDataURL("image/jpeg", 0.8);
  e = new MouseEvent("click");
  link.dispatchEvent(e);
};
export const SetSize = (width, height) => {
  let canvasWidth = width * 0.5;
  let canvasHeight = (height * 6) / 7;
  if (width < 390) {
    canvasHeight = (height * 1) / 2;
    canvasWidth = (width * 7) / 8;
  } else if (width < 550) {
    canvasHeight = (height * 2) / 3;
    canvasWidth = (width * 4) / 5;
  } else if (width < 992) {
    canvasWidth = (width * 2) / 3;
    canvasHeight = (height * 5) / 7;
  }
  return { canvasHeight, canvasWidth };
};
