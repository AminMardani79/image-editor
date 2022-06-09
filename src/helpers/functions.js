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