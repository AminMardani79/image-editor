export const CheckImage = (file) => {
  return file && file["type"].split("/")[0] === "image";
};
