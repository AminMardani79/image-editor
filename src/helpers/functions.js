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
export const DrawImage = (canvas, img, reader, flipH) => {
  //let scaleH = flipH ? -1 : 1;
  const ctx = canvas.current.getContext("2d");
  reader.addEventListener(
    "load",
    () => {
      img = new Image();
      img.src = reader.result;
      img.onload = function () {
        canvas.current.width = 800;
        canvas.current.height = 600;
        ctx.save();
        ctx.drawImage(img, 0, 0, 800, 600);
        ctx.restore();
        canvas.current.removeAttribute("data-caman-id");
      };
    },
    false
  );
};
