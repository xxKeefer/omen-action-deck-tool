import { Area } from "react-easy-crop";
import mergeImages from "merge-images";
import JSZip from "jszip";

export const makeDataObjectUrl = (data: FileList | null) => {
  if (!data) return null;
  return URL.createObjectURL(data[0]);
};

export const makeBase64Strings = async (data: FileList | null) => {
  if (!data) return null;
  const batch = Array.from(data).map((file) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  });
  return await Promise.all(batch);
};

export const createImage = async (url: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });

export async function getCroppedImage(dataURL: string, pixelCrop: Area) {
  const image = await createImage(dataURL);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) return null;

  canvas.height = image.height;
  canvas.width = image.width;

  context.drawImage(image, 0, 0); // draws original image

  const data = context.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  ); // gets cropped image

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  context.putImageData(data, 0, 0); // draws cropped image

  return canvas.toDataURL("image/png");
}

export const resizeImage = async (dataUrl: string, targetHeight = 600) => {
  const image = await createImage(dataUrl);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) return null;

  const scaleFactor = targetHeight / image.height;
  const targetWidth = image.width * scaleFactor;

  canvas.width = targetWidth;
  canvas.height = targetHeight;

  context.drawImage(image, 0, 0, targetWidth, targetHeight);

  return canvas.toDataURL("image/png");
};

export const applyOverlay = async (image: string, overlay: string) => {
  return await mergeImages([image, overlay], {
    width: 400,
    height: 600,
    format: "image/png",
  });
};

export const cardsToZip = async (cards: string[]) => {
  const zip = new JSZip();
  cards.forEach((card, index) => {
    zip.file(`card-${index}.png`, card.split(",")[1], { base64: true });
  });
  return await zip.generateAsync({ type: "blob" });
};
