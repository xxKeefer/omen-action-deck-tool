import { useCallback, useState } from "react";
import Cropper, { Point, Area } from "react-easy-crop";
import styled from "styled-components";

const Frame = styled.div`
  width: 400px;
  height: 425px;
  position: relative;
  margin: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  overflow: hidden;
  .reactEasyCrop_Container {
    max-height: 400px;
    max-width: 400px;
  }
  input {
    position: absolute;
    top: 405px;
    left: 5px;
    width: 390px;
  }
`;

type Props = {
  image: File;
};

export const CropImage = ({ image }: Props) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );
  return (
    <Frame>
      <Cropper
        image={URL.createObjectURL(image)}
        crop={crop}
        zoom={zoom}
        aspect={2 / 3}
        onCropChange={setCrop}
        // onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <input
        type="range"
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        aria-labelledby="Zoom"
        onChange={(e) => {
          setZoom(Number(e.target.value));
        }}
      />
    </Frame>
  );
};
