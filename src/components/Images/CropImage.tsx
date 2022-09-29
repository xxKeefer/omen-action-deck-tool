import { useCallback, useState } from "react";
import Cropper, { Point, Area } from "react-easy-crop";
import styled from "styled-components";
import { useActionDeck } from "~/contexts";
import { getCroppedImage, makeDataObjectUrl } from "~/utils/images";
import { BigButton, FileSelect } from "../Buttons";
import { Row, Stack } from "../Layout";

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

export const CropImage = () => {
  const {
    setArt,
    state: { art },
  } = useActionDeck();
  const [image, setImage] = useState<string | null>(null);
  const [croppedArea, setCroppedArea] = useState<Area>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  return (
    <Stack>
      {image && (
        <Frame>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={2 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
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
      )}
      <Row>
        <FileSelect
          onSelect={(event) => {
            setImage(makeDataObjectUrl(event.target.files));
          }}
        />
        <BigButton
          onClick={async () => {
            if (!image) return;
            const result = await getCroppedImage(image, croppedArea);
            image && setArt(result);
          }}
        >
          Confirm Crop
        </BigButton>
      </Row>
    </Stack>
  );
};
