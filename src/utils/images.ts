import { Area } from "react-easy-crop";
import mergeImages from "merge-images";
import JSZip from "jszip";

export const makeDataObjectUrls = (data: FileList | null) => {
  if (!data) return null;
  return Array.from(data).map((file) => URL.createObjectURL(file));
};
export const makeDataObjectUrl = (data: FileList | null) => {
  if (!data) return null;
  return URL.createObjectURL(data[0]);
};

export const createImage = (dataURL: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = dataURL;
  });

export function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export async function getCroppedImage(
  dataURL: string,
  pixelCrop: Area,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
) {
  const image = await createImage(dataURL);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  const rotationRadians = getRadianAngle(rotation);

  // calculate bounding box of the rotated image
  const { width: boundingBoxWidth, height: boundingBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  // set canvas size to match the bounding box
  canvas.width = boundingBoxWidth;
  canvas.height = boundingBoxHeight;

  // translate canvas context to a central location to allow rotating and flipping around the center
  context.translate(boundingBoxWidth / 2, boundingBoxHeight / 2);
  context.rotate(rotationRadians);
  context.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  context.translate(-image.width / 2, -image.height / 2);

  // draw rotated image
  context.drawImage(image, 0, 0);

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = context.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  );

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image at the top left corner
  context.putImageData(data, 0, 0);

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise<string>((resolve) => {
    canvas.toBlob((file) => {
      if (file) resolve(URL.createObjectURL(file));
    }, "image/png");
  });
}

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
